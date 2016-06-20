# Change Log (branches)
All notable changes to this project will be documented in this file.
~~This project adheres to [Semantic Versioning](http://semver.org/).~~

However, here branches instead of versions described.

## [core-160620-remoteResource] - 2016-06-20
- Extends ngResource with default actions `.create()` and `.update()`.
- Overloads `.save()` so it invokes either `.create()` or `.update()` depending on `id` status (falsy or truthy).


## [fea-160613-persIncome] - 2016-06-13
Personal income references from employers feature.

## [fea-160510-dbdeclarant] - 2016-05-10
Synchronize user input form with Local Persistent Storage via dataLPS service.

## [fea-160509-formfor] - 2016-05-09
### Added
- `angular-locale_uk-ua`
- `ng-currency` directive [by aguirrel](https://github.com/aguirrel/ng-currency)
- `ng-telephone` directive
- `telephoneNumber` directive stub (to be removed)
### Changed
- employ ng-Material features to validate user input.
- `telephone*` filters


## [rf-160507-controllers] - 2016-05-07
Refactor controllers & a service to follow app logic.
### Refactored
- globalize **users service** by converting into **persistent
  local storage data service (PLSdataService)**
- users module -> persons module
- users -> declarants
- move declarants related logic from core controller to declarants
  controller
- AppController -> CoreController (stubbed for future use)
- AppService -> CoreService (stubbed for future use)

## [fea-160507-app] - 2016-05-07
Should be `rf-...` for main purpose was to refactor `taxretApp`
and `app` modules.
### Refactored
- app -> app.core
- taxretApp -> app
- AppController: moved properties from $scope to vm.*

* * *

**Skip following remainder of the file, which is a cheatsheet.**

See [CHANGELOG example](https://github.com/olivierlacan/keep-a-changelog/blob/master/CHANGELOG.md)

- `Added` - new features
- `Changed` - features change
- `Deprecated` - features to be removed from future versions
- `Removed` - features removed in this version
- `Fixed` - what's fixed
- `Security` - security improvements

## [Unreleased]
### Added
- zh-CN and zh-TW translations from @tianshuo.
- de translation from @mpbzh.

## [0.0.8] - 2015-02-17
### Changed
- Update year to match in every README example.
- Reluctantly stop making fun of Brits only, since most of the world
  writes dates in a strange way.

### Fixed
- Fix typos in recent README changes.
- Update outdated unreleased diff link.


