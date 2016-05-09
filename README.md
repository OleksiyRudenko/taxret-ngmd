# Tax Return

[Demo](http://oleksiyrudenko.github.io/taxret-ngmd/src/client/#/declarants)

## Goal

This project uses Angular, Angular Material, UI.Router, Lovefield
and [few other libraries](#stack) to build a single page application
with IndexedDB-based local storage to assist declarants in completion
of tax returns under Ukrainian tax regulations.

This application is also might be used as a skeleton application.

## Table of Contents

1. [Stack](#stack)
    * [Core and UI](#core-and-ui)
    * [Data Storage](#data-storage)
1. [Project Directory Layout](#project-directory-layout)
1. [Project branching conventions](#project-branching-conventions)

## Stack

[Angular Material Start](https://github.com/angular/material-start)<sup>[2016-02-03]</sup>
was used as a boilerplate for this project.

NB! Please, do not rely on `node_modules\` & `test\` as these are inherited from
Material Start project but not currently in use.

### Core and UI

| [AngularJS 1.5.1](https://angularjs.org/) / [More...](https://drive.google.com/drive/folders/0BxgtL8yFJbacQmpCc1NMV3d5dnM) / [CDN](https://cdnjs.com/libraries/angular.js/1.5.1) | [angular-material 1.0.6](https://material.angularjs.org/1.0.6/) | [angular-ui.router 0.2.18](http://angular-ui.github.io/ui-router/) |
| --- | --- | --- |
| ?[angular-ui](http://angular-ui.github.io/) | ?[angular-xeditable](https://vitalets.github.io/angular-xeditable/) | ?[angular-formly](http://angular-formly.com/#/) |
| ?[ngmd-data-table](https://github.com/daniel-nagy/md-data-table) |. | . |

### Data Storage

| [IndexedDB](https://www.w3.org/TR/IndexedDB/) | [Lovefield <sup>[2016-04-11]</sup>](https://github.com/google/lovefield) | [ng-lovefield <sup>[2016-03-01]</sup>](https://github.com/kutomer/ng-lovefield) |
| --- | --- | --- |

[**[back-to-top](#table-of-contents)**]

## Project Directory Layout

Initial boilerplate directory layout has been refactored based on
[John Papa's recommendations](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#application-structure-lift-principle)
and particularly
[this demo project](https://github.com/johnpapa/ng-demos/tree/master/modular).

Please refer to [directoryLayout.md](directoryLayout.md) for more details.

[**[back-to-top](#table-of-contents)**]

## Project branching conventions

### To be implemented (recommended)

[A successful Git branching model<sup>[2010-01-05]</sup>](http://nvie.com/posts/a-successful-git-branching-model/)
by Vincent Driessen

[Using git-flow to automate your git branching workflow<sup>[2010-08-19]</sup>](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/)
by Jeff Kreeftmeijer

[git-flow cheatsheet](http://danielkummer.github.io/git-flow-cheatsheet/)
by Daniel Kummer

[Git extensions<sup>[2016-04-17]</sup>](https://github.com/petervanderdoes/gitflow-avh)
by [Peter Vanderdoes](https://github.com/petervanderdoes)

IDE plugins:
* [JetBrains](https://plugins.jetbrains.com/plugin/7315)

Suggested extension:
* `document/` branches -- for documentation, which is not tied to
   particular code, features etc.
* `refactor/` branches -- for refactoring project layout or code

### Currently in use

Branch naming:

 * `master` - major branch
 * `dev` - development branch
 * `gh-pages` - latest development roll-out
 * `release-X.Y` - release v.X.Y
 * `hotfix-X.Y.Z` - hotfix Z for release v.X.Y
 * Other types of branches:

   _Branch name template:_ `type-YYMMDD-descr` _where_

     * `type` is one of
        - `bf` - bugfix
        - `rf` - refactoring
        - `fea` - feature
        - `doc` - documentation
     * `YYMMDD` - date the branch was initialized on
     * `descr` - single-word description; use `-` to employ more words

Normally, `bf` and `rf` discontinued as soon as merged back.

Prefix `doc` is used for documentation, which is not tied to particular
code, features etc.

### Prior to 28-Apr-2016

None reasonable

