`[2016-06-21]` - created

`[2016-06-21]` - latest major update

# LocalDB Provider / Service

## Purpose

LocalDB is a configurable service to manage data stored in local web storage using
[`lovefield` library](https://github.com/google/lovefield)
and [`kutomer.ng-lovefield` wrapper](https://github.com/kutomer/ng-lovefield).

The purpose to is to:
  - bring more abstraction to app data model
  - add features not available with `lovefield` (like field constraints)
  - supplement with adjustable behaviour on constraints violation
  - automatize building and managing `m:n` relations
  - supplement relations with `aggregation` supplementing exisiting `composition`
  - make database schema described with JSON
  - make database upgrade procedure described with JSON


## Table of Contents
1.
1.
1.


## Installing and Configuring

### Install

### Configure Service

### Configure DB Schema

### Configure DB Upgrade

[**[back-to-top](#table-of-contents)**]

## DB Schema

### Configuring Schema

DB schema can be defined in _lazy_ or _strict_ format.

Normally, you will want to start with _lazy_ format, which is compiled by LocalDB into _strict_
internally before applied.

Strict presentation of schema can be exported and stored for future use.
Schema loader's workflow depending on argument value:
 - `'strict'` - loads `schema.strict.json`
 - `'lazy'` - loads `schema.json`
 - no argument - loads `schema.strict.json` if available or `schema.json` otherwise

### Data Types

| Data Type | `lovefield` Type Mapping* | JavaScript type |
| :--- | :--- | :--- |
| `PID` | `INTEGER` | 32-bit integer |
| `FID` | `INTEGER` | 32-bit integer |
| `INTEGER` | `INTEGER` | 32-bit integer |
| `BIGINT` | `NUMBER` | `number` |
| `NUMBER` | `NUMBER` | `number` |
| `DECIMAL` | `INTEGER` | 32-bit integer |
| `STRING` | `STRING` | `string` |
| `BOOLEAN` | `BOOLEAN` | `boolean` |
| `OBJECT` | `OBJECT` | `Object` |
| `BLOB` | `ARRAY_BUFFER` | `ArrayBuffer` |
| `ENUM` | n/a | n/a |
| `SET` | n/a | n/a |
| `JSDATE` | `DATE_TIME` | `Date` |
| `DATESTR` | `STRING` | `string` |
| `TIMESTAMP` | `NUMBER` | `number` |

*) All `lovefield` types are prefixed with `lf.Type.`

#### Data Type Aliases

Some aliases are just convenience replacements. Other reset some or all default properties.
Such reset defaults survive cross-database defaults settings, however, can be overridden
at field definition.

If no defaults specified in a table below then alias inherits defaults from principal
data type.

| Data Type | Alias | Defaults |
| :--- | :--- | :--- |
| `INTEGER` | `INT` | |
| `STRING`  | `CHAR` | `min=max; onBelow=pad; onAbove=truncate;` |
| `STRING`  | `VARCHAR` | `min=0; max=16; onBelow=error; onAbove=truncate;` |
| `DECIMAL` | `MONEY` | `precision=2;` |
| `BOOLEAN` | `BOOL` |  |

#### Data Type: `ID`

[**[back-to-top](#table-of-contents)**]


#### Data Type: JSDATE, DATESTR, DATETIME, TIMESTAMP

The idea behind is taken from [MySQL Specs](http://dev.mysql.com/doc/refman/5.7/en/datetime.html)
with certain provisions.


DATETIME precisions:
 -  6 = `00-00-00`
 -  8 = `0000-00-00`
 - 12 = `0000-00-00 00:00`
 - 14 = `0000-00-00 00:00:00`
Other precision values rounded down, but 6 is a minimum.

[**[back-to-top](#table-of-contents)**]

### Field Constraints

Fields may have extra properties like `notNull`, `min`, `max`, `precision`.
For numeric types `min` and `max` refer to values, while for string
types these constraints refer to byte length.

If properties are not set implicitly then system defaults in use. However, those defaults can
be overridden with cross-database defaults with certain provisions for some aliases.

System defaults are:

| Data Type   | notNull | min | max | precision | defaultValue |
| :---        | :---  | :---: | :---: | :---: | :---: |
| `PID`        | true* |              1 | 2,147,483,647 | n/a | `null`* |
| `FID`        | false |              1 | 2,147,483,647 | n/a | `null`  |
| `INTEGER`   | true  | -2,147,483,648 | 2,147,483,647 | n/a |     0  |
| `BIGINT`    | true  | -9,007,199,254,740,992 | 9,007,199,254,740,992 | n/a |     0  |
| `NUMBER`    | true  | `number`   | `number` | `number` |     0  |
| `DECIMAL`   | true  | -9,007,199,254,740,992 | 9,007,199,254,740,992 | 0   |     0  |
| `STRING`    | true  | 0 | 524,288 | n/a | '' |
| `BOOLEAN`   | true  | n/a | n/a | n/a| false |
| `OBJECT`    | false* | n/a | n/a | n/a | `null` |
| `BLOB`      | false* | n/a | n/a | n/a | `null` |
| `ENUM`      | false | n/a | n/a | n/a | `null` |
| `SET`       | false | n/a | n/a | n/a | `null` |
| `JSDATE`    | false | `Date` | `Date` | n/a | `null` |
| `DATESTR`   | true  | '0000-00-00' | '9999-12-31' | n/a | `0000-00-00` |
| `TIMESTAMP` | true* | 0 | 9,007,199,254,740,992 | n/a | `null`* |
| `DATETIME`  | true  | '0000-00-00 00:00:00' | '9999-12-31 23:59:59' | 14 | `null` |

(*) denotes defaults that cannot be changed neither on field definition nor with cross-database
 defaults.

`defaultValue` - is a value used on INSERT when field is `undefined`.

If a type is not nullable (i.e. `notNull` == `true*` ) and defaultValue set to `null`
then there is special behavior for the case when `null` is allowed on INSERT.

If `PID` field in Record Object undefined then it is set to `null`.

If `PID` field in Record Object is `null` then new record inserted. This behaviour, however,
can be overridden.

If `TIMESTAMP` field in Record Object undefined on INSERT then it is set to `null`.

If `TIMESTAMP` field in Record Object is `null` on INSERT/UPDATE then it is set to current time.

In theory `string` length is limited to memory available. To be more practical I decided to
limit `STRING` length to a value of
[`maxlength` attribute of `<input>` element](http://www.w3schools.com/tags/att_input_maxlength.asp).


regexp (`new RegExp("a|b\\w", "i");`,
[see also](http://stackoverflow.com/questions/874709/converting-user-input-string-to-regular-expression))

per language?

onMismatch


unique

Cross-Database defaults per type (default value, isNull)

Cross-Database defaults per type

#### Constraints Violation Behaviour

Designer can define LocalDB behaviour on attempts to assign a field a value, which is
not allowed according to Field Constraints.

There is a number of preset behaviours available depending on field data type.

| Data Type | onBelow | onAbove | onNull | onZero | onChange |
| :--- | :--- | :--- | :--- | :--- | :--- |
| other numeric types | error,min,_value_ | error,max,_value_ | error,min,max,_value_ | n/a | allow,deny |
| string types  | error,pad | error,trunc | error,spaces(.length=min),'string value' | n/a | allow,deny |
| other |


ID mutable?

System defaults come first in a list and can be overridden with other behaviours from the list
on field definition or with cross-database defaults unless marked with.

If there is single behaviour then it is not overridable.

[**[back-to-top](#table-of-contents)**]

### Field Attributes

Some data types require special attributes.

| Data Type | Attribute | Meaning |
| :--- | :---  | :--- |
| ENUM | table | Specifies table of type LIST or TREE which is a source of verbose value description |
| SET  | table | Specifies table of type LIST or TREE which is a source of verbose value description |

In case of SET host table there is intermediary `m:n`-table to bind with LIST/TREE table.

[**[back-to-top](#table-of-contents)**]

### Indices

#### Primary Key

Cross-database defaults (id/_id, auto-declare primary if id/_id field present, isActive)

#### Foreign Key

#### Composite Indices

[**[back-to-top](#table-of-contents)**]

### Relations

#### Supported relations.

`A` and `B` are entities in relation. `A` is always sovereign.

`FID` in either entity refers to another one.

`PID` is an id in entity.

`[PID]` and `[FID]` denote optionality of id or id reference.

| Use case | Keys in `A` | Keys in `B` | On DELETE `A` | On DELETE `B` |
| :--- | :--- | :--- | :--- | :--- |



**Person-Weight**

`A` must be associated with one and only `B`.

`B` must be associated with one and only `A`.

`1:1` relation - composition.

**Person-CurrentAddress**

`A` may be associated with one `B`.

`B` cannot exist without `A`.

`1:[0,1]` relation - composition.

**Person-BankAccount**

`A` may be associated with one or more of `B`.

`B` cannot exist without `A`.

`1:0+` relation - composition.

**House-Storey**

`A` must be associated with at least one of `B`.

`B` cannot exist without `A`.

`1:1+` relation - composition.

**Flight-Passenger**

`A` may be associated with one or more of `B`.

`B` is sovereign, may be associated with one or more of `A`.

`0+:0+` relation - aggregation.

**Company-Industry**

`A` must be associated with at least one of `B`.

`B` is sovereign, may be associated with one or more of `A`.

`0+:1+` relation - aggregation.



#### Many-to-Many Relation

#### Aggregation

[**[back-to-top](#table-of-contents)**]

### Multi-Lingual Support

### Shadow Tables

#### Set

#### Enum

#### Tree

[**[back-to-top](#table-of-contents)**]

### Cross-Database Defaults

PK

Behaviour - onBelow/onAbove/onNull

Min/Max

ID=null on UPDATE -- default behavior => INSERT

[**[back-to-top](#table-of-contents)**]

## Caching

Items can be cached. Items are rows or tables.

Cache is on per table basis. User should provide an object to keep cache at. The cache object
is bound to a table.

Cache is supplemented upon SELECT on a single table (without joins).

Upon DELETE cache gets updated according to user provided option: ignore cache or
rows are deleted accordingly or
cache repopulated upon DELETE completed or cleared.

Upon INSERT/UPDATE cache gets updated according to user provided option: ignore cache or
rows added/updated accordingly or cache repopulated upon INSERT/UPDATE completed or cleared.

For the case of cache repopulation user should provide SELECT instruction or relevant
SELECT instruction cache object (object which contains SELECT instruction).

Cache may slowdown SELECT queries. Cache keeps special flag denoting whether it keeps complete
table copy. ....

Cache not used on SELECT queries with joins.

Cache is useful to build `<SELECT>` lists, radio-buttons or check-boxes groups and similar widgets.
Normally cache can be used directly for that purpose.

[**[back-to-top](#table-of-contents)**]

### Comprehensive Schema Example

[**[back-to-top](#table-of-contents)**]

## DB Initialization and Upgrade

If you know well what **`upgrade`** means in context of IndexedDB skip ahead
to [DB Initialization](#db-Initialization).

At some point of your DB lifecycle you may decide to change the schema of your DB, so you
implement schema changes and your app from now on relies on changed DB schema.
Everything may work fine in your development environment,
but once your app gets launched on a different device that keeps DB under outdated schema
it has to **upgrade** existing DB.

LocalDB automates the process. Each schema is stored under version starting with one.
At launch LocalDB attempts to open DB with given target version.
If available DB has lower version then LocalDB starts upgrading DB.

Upgrade is done gradually - from current version until target version is reached.
Each upgrade iteration may also require some manipulations on data stored, which is
also automated.

### DB Initialization

Consider DB initialization as an upgrade from version 0 (inexistent) to version 1.

### DB Upgrade

On upgrade you may want:
 * create new or delete existent table
 * rename tables/columns
 * add/remove columns
 * move columns between tables
 * add/remove persistent indices

Moving columns may require data manipulations.

Some schema changes may require persistent indices get rebuilt.

It is also possible to populate new tables with data, which can be imported from local `json`
or remote http-request. Most likely you will want to keep initial table data in a subdirectory
under current schema version directory.

Upgrade instructions are not checked for consistency, so if you delete a column and then
try to move it you will end up with an exception.

Table creation instructions should refer to a schema
specification (`createTable *|tablename[tablename,...]`) for a version we are upgrading to.

```
[
     "createTable Person",
     "changeTbType Category TREE",
     "removeTable OtherData",
     "addColumn Person passport driversLicence",
     "moveColumn city Person Address",
     "renameColumn Person passport travelDocument",
     "changeColDef Person passport",
     "createTable Address Company",
     "createTable *",
     "auto",
     { op: "populate Account initialBalance", value: "10.00" },
     { op: "populate Address city district", value: [ "Kyiv", "Pechersk"] },
     "importData Person ./ini/Person.json",
    },
]
```

`auto` instruction will compare target schema with old one amended with preceding
instructions and will generate required instructions.
However, it cannot recognize renaming and columns moving so these operations should precede
 `auto` command.

You also may want to export resulting database before each upgrade iteration
(upgrade to next version).

### Upgrade Roll-back

To roll-back you need an exported copy of database as of desired DB version.


[**[back-to-top](#table-of-contents)**]

## Further Reading on Providers

[Return service depending on config [160614]](https://gist.github.com/manju4ever/cfa2672cc74665d106212cff5f321bc3)

[AngularJS Modularization & Dependency Injection [150902]](http://tutorials.jenkov.com/angularjs/dependency-injection.html#providers)

[Yet another approach on injecting to $get [141126]](https://github.com/angular/angular.js/issues/1452)

[Injecting to $get hard way [160107]](http://stackoverflow.com/questions/19171207/injecting-dependencies-into-provider)

[**[back-to-top](#table-of-contents)**]