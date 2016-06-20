# Data Layer

Purposes:
 * abstraction layer for data exchange
 * uniform interface to:
   - $http (via ngResource)
   - IndexedDB/other storages (via ngLovefield); see [Lovefield Data Store](https://github.com/google/lovefield/blob/master/docs/spec/02_data_store.md) for details 
   - localStorage
   - sessionStorage
 * caching data (fetch from remote unless already stored locally)

## Process Overview

### Usecases

#### Remote Data Storage

Creates service for `$resource`.

#### Local Data Storage

Local Persistent Data Storage (`localResource`) uses `localStorageResource` a
`$resource`-like featured service.

#### Cache remote data locally

If query (`.query()`, `.get()`) to `localPDS` successful then result returned.
Otherwise associated `$resource` inquired.

If remote inquiry successful then result
 - stored with `localResource`
 - return to client.

Otherwise error returned.

## Storage Management Specs

All services are promise-based.

### `PersistentDataService`

Data processing abstraction layer.

Holds a list of resources supplemented with standard methods:
- get()
- query()
- save() - overloaded so either create() or update() invoked based on `id`
- create() - added to `$resource` automatically (with method `POST`)
- update() - added to `$resource` automatically (with method `PUT`, isArray : false)
- remove()
- ~~delete()~~ (due to incompatibility with IE)

Every resource is associated with Remote and/or Local Data Storage via
`$resource` or `localResource` respectively.

If both `$resource` and `localResource` specified for a resource then
remote data caching strategy implemented. No upload to remote server
provisioned for. Thus remote server is used for fetching data only.

General workflow (simplified for the sake of readability):
```
if (resource.resourceName.localResource) {
    actionResult = dataResource.resourceName.localResource.action();
    if (action==get|query && actionResult==error
        && dataResource.resourceName.remoteResource) {
        // try to get data from remote
        actionResult = dataResource.resourceName.remoteResource.action();
        if (actionResult) {
            dataResource.resourceName.localResource.save();
        }
    }
    return actionResult;
} else {
    actionResult = resource.resourceName.remoteResource.action();
    return actionResult;
}
```

On ad hoc basis remote query can be forced (localResource not used)
and not cached.

On ad hoc basis update from remote can be forced:
 - hard force = if remote fails then query fails
 - soft force = if remote fails then query fails if only local fails

Local storage is served with lovefield/ng-lovefield, which also receives
instructions for actions on database set-up/upgrade.

At construction stage `PDS` supplied with configuration to set-up remote
resources and local storage:
- remoteResource ($resource) url and other settings
- lovefield tables
- localResource associations with tables
- binding of remote and local resources with data resources


### Services Graph

```
{App}
    |
    \-- PersistentDataService
        |-- remoteResource
        |   \-- [$resource] -- dependency
        |       \-- [$http] -- dependency
        \-- localResource
            \-- localDB
                \-- [ng-lovefield] -- dependency
                    \-- [lovefield] -- dependency
```

## Future Request

### Sync

Make cache synced also to remote server.

### Id Reservation

An app server supplies client (token) with a set (range) of ids to use.

Each id is unique per entity. Tokens are not part of entity id, token
denominates data owner.

This enables bi-directional sync, sync across devices transfer of
 data possession.

#### Further development on ids

Each id (not just ranges) has its owner identified by token.

An hierarchy of owners (delegation with limited powers) can be built.