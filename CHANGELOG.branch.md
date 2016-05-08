# Change Log (branches)
All notable changes to this project will be documented in this file.
~~This project adheres to [Semantic Versioning](http://semver.org/).~~

However, here branches instead of versions described.

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


