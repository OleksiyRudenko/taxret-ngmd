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

See [angular-cached-resource](https://github.com/goodeggs/angular-cached-resource).

### Id Reservation

An app server supplies client (token) with a set (range) of ids to use.

Each id is unique per entity. Tokens are not part of entity id, token
denominates data owner.

This enables bi-directional sync, sync across devices transfer of
 data possession.

#### Further development on ids

Each id (not just ranges) has its owner identified by token.

An hierarchy of owners (delegation with limited powers) can be built.

## Other Related Resources

[How to force AngularJS resource resolution with ui-router [2014-03-18]](http://www.jvandemo.com/how-to-resolve-angularjs-resources-with-ui-router/)

[Extending Angular’s $resource Service for a Consistent API [2014-06-03]](https://objectpartners.com/2014/06/03/extending-angulars-resource-service-for-a-consistent-api/) +
[gist](https://gist.github.com/brucecoddington/92a8d4b92478573d0f42)

[Injecting a mock into an AngularJS service [2013-02-08..2016-04-13]](http://stackoverflow.com/questions/14773269/injecting-a-mock-into-an-angularjs-service) +
[gist](https://gist.github.com/alicial/7681791)

[$httpBackend [ng 1.5.1]](https://code.angularjs.org/1.5.1/docs/api/ngMock/service/$httpBackend)

### Related Modules

[angular-webstorage [2013]](http://ngmodules.org/modules/angular-webstorage) +
[github [2015-12-20]](https://github.com/fredricrylander/angular-webstorage)

[ngStorage [2013]](http://ngmodules.org/modules/ngStorage) +
[github [2016-06-08]](https://github.com/gsklee/ngStorage)

[angular-storage by Auth0 [2013]](http://ngmodules.org/modules/angular-storage) +
[github [2016-04-03]](https://github.com/auth0/angular-storage)

More @ [ngmodules tag:localStorage](http://ngmodules.org/tags/localStorage)