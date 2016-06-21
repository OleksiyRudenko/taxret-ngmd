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
| `ID` | `INTEGER` | 32-bit integer |
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

#### Field Properties

Fields may have extra properties like `notNull`, `min`, `max`, precision.
For numeric types `min` and `max` refer to their values, while for string types refer to byte length.

If properties are not set implicitly then system defaults in use. However, those defaults can
be overridden with cross-database defaults with certain provisions for some aliases.

System defaults are:

| Data Type   | is nullable | notNull | min | max | precision | defaultValue |
| :---        | :--- | :--- | :--- | :--- | :--- | :--- |
| `ID`        | no  | true* |              1 | 2,147,483,647 | n/a | `null`* |
| `INTEGER`   | yes | true | -2,147,483,648 | 2,147,483,647 | n/a |     0  |
| `BIGINT`    | yes | true | -9,007,199,254,740,992 | 9,007,199,254,740,992 | n/a |     0  |
| `NUMBER`    | yes | true | `number`   | `number` | `number` |     0  |
| `DECIMAL`   | yes | true | -9,007,199,254,740,992 | 9,007,199,254,740,992 | 0   |     0  |
| `STRING`    | yes | true | 0 | 524,288 | n/a | '' |
| `BOOLEAN`   | yes | true | n/a | n/a | n/a| false |
| `OBJECT`    | yes | false | n/a | n/a | n/a | `null` |
| `BLOB`      | yes | false | n/a | n/a | n/a | `null` |
| `ENUM`      | yes | false | n/a | n/a | n/a | `null` |
| `SET`       | yes | false | n/a | n/a | n/a | `null` |
| `JSDATE`    | yes | true | `Date` | `Date` | n/a | `null` |
| `DATESTR`   | no | true* | '0000-00-00' | '9999-12-31' | n/a | `0000-00-00` |
| `TIMESTAMP` | no | true  | 0 | 9,007,199,254,740,992 | n/a | `null` |
| `DATETIME`  | no | true  | '0000-00-00 00:00:00' | '9999-12-31 23:59:59' | 14 | `null` |

(*) denotes defaults that cannot be changed neither on field definition nor with cross-database
 defaults.

If a type is not nullable and defaultValue set to `null` then there is special behavior
for the case when `null` is supplied to store.

If `ID` field in Record Object undefined then it is set to `null`.

If `ID` field in Record Object is `null` then new record inserted. This behaviour, however,
can be overridden.

If `TIMESTAMP` field in Record Object undefined on INSERT then it is set to `null`.

If `TIMESTAMP` field in Record Object is `null` on INSERT/UPDATE then it is set to current time.

In theory `string` length is limited to memory available. To be more practical I decided to
limit `STRING` length to a value of
[`maxlength` attribute of `<input>` element](http://www.w3schools.com/tags/att_input_maxlength.asp).



Cross-Database defaults per type (default value, isNull)

Cross-Database defaults per type



#### Data Type Aliases

Some aliases are just convenience replacements. Other reset some or all default properties.
Such reset defaults survive cross-database defaults settings, however, can be overridden
at field definition.

If no defaults specified in a table below then alias inherits defaults from principal
data type.

| Data Type | Alias | Defaults |
| :--- | :--- | :--- |
| `INTEGER` | `INT` | |
| `STRING` | `CHAR` | `min=max; onBelow=pad; onAbove=truncate;` |
| `STRING` | `VARCHAR` | `min=0; max=16; onBelow=error; onAbove=truncate;` |
| `DECIMAL` | `MONEY` | `precision=2;` |

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


### Field Constraints


#### Behaviour

Designer can define LocalDB behaviour on attempts to assign a field a value, which is
not allowed according to Field Constraints.

There is a number of preset behaviours available depending on field data type.

| Data Type | onBelow | onAbove | onNull | onChange |
| :--- | :--- | :--- | :--- | :--- |
| numeric types | error,min,_value_ | error,max,_value_ | error,min,max,_value_ | allow,deny |
| string types  | error,pad | error,trunc | error,spaces(.length=min),'string value' | allow,deny |
| other |


ID mutable?

System defaults come first in a list and can be overridden with other behaviours from the list
on field definition or with cross-database defaults unless marked with.

If there is single behaviour then it is not overridable.

[**[back-to-top](#table-of-contents)**]

### Indices

#### Primary Key

Cross-database defaults (id/_id, auto-declare primary if id/_id field present)

#### Foreign Key

#### Composite Indices

[**[back-to-top](#table-of-contents)**]

### Relations

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

### Comprehensive Schema Example

[**[back-to-top](#table-of-contents)**]

## DB Upgrade

### Configuring Upgrades

[**[back-to-top](#table-of-contents)**]

## Further Reading on Providers

[Return service depending on config [160614]](https://gist.github.com/manju4ever/cfa2672cc74665d106212cff5f321bc3)

[AngularJS Modularization & Dependency Injection [150902]](http://tutorials.jenkov.com/angularjs/dependency-injection.html#providers)

[Yet another approach on injecting to $get [141126]](https://github.com/angular/angular.js/issues/1452)

[Injecting to $get hard way [160107]](http://stackoverflow.com/questions/19171207/injecting-dependencies-into-provider)

[**[back-to-top](#table-of-contents)**]