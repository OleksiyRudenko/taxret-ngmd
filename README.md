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
1. [Project Logical Structure](#project-logical-structure)
    * [Client side](#client-side)
      - [Entry point](#entry-point---indexhtml)
      - [Application View Layout](#application-view-layout)
      - [Main features](#main-features)
        * [Declarants view](#declarants-view)
        * [Main workflow features](#main-workflow-features)
        * [Reference manuals views](#reference-manuals-views)
      - [Supporting components](#supporting-components)
    * [Server side](#server-side)
1. [Project Directory Layout](#project-directory-layout)
1. [Project branching conventions](#project-branching-conventions)
1. [Similar or Related Solutions, Other Related Resources](#similar-or-related-solutions-other-related-resources)

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
| [angular-IndexedDB.coffee](https://github.com/bramski/angular-indexedDB) |  | |

[**[back-to-top](#table-of-contents)**]


## Project Logical Structure

This section describes the logical structure of the project referring
 to the files and directories containing relevant components.

Legend:
 * `/path/with-initial-slash/` - denotes path from the project root
 * `path/without-initial-slash/` - denotes path relative to current
    context (sub-section)
 * `path/with-ending-slash/` - denotes directory
 * `path/without-ending-slash.extension` - denotes files

Designation of project root sub-directories:
 * `/node_modules/` - NodeJS maintained installations;
    currently **NOT IN USE!**; please, **IGNORE**
 * `/src/` - project source files
 * `/test/` - tests;
    currently **NOT IN USE!**; please, **IGNORE**
 * `/vendor/` - clones of 3rd party resources; should be replaced with external
   references on production stage
 * `/void/` - various non-essential resources; please, **IGNORE**
 * asterisk (`*`) in a pathname denotes _any_ like a wildcard or
   replaces non-essential part of filename for the sake of enhanced
   readability

Please, refer to [Project Directory Layout](#project-directory-layout)
section for more details.

Business logic terms:
 * person - an entity; persons set comprises of legal entities and persons,
   some of which may be assigned roles (like 'declarant'), others are used
   to refer to from documents; each person may be assigned 0+ roles;
 * declarant - a role; a natural person the Tax Return is produced
   in the name of;

[**[back-to-top](#table-of-contents)**]

### Client side

`/src/client/`

Source files for client-side part of the application.

Directory layout:
 * `app/` - application codebase
 * `content/` - static content files (imagery, documentation, css)
 * `vendor/` - 3rd party resources (libraries, css) that will be hosted along
    with the application on production stage
 * `index.html` - application entry point

Further file paths will be relative to `/src/client/` unless otherwise
 explicitly expressed by context or by `/preceded-with-a-slash` notation.

[**[back-to-top](#table-of-contents)**]

#### Entry point - `index.html`

`index.html` loads required resources and global view from
`app/layout/shell.html`.

[**[back-to-top](#table-of-contents)**]

#### Application View Layout

`app/layout/`

`layout.module.js` declares `app.layout` module referred to by other
components in `app/layout/`.

User interface is driven and managed mainly by Angular Material library,
 supporting responsive design, elements visualization and UI widgets.

Global view container comprises of `shell.html` template supported with
 `ShellController` (`shell.controller.js`) with a `toggleSideNav()` method
 to hide/show left sidebar for smaller portview resolutions.

Shell view includes:
 * **left sidebar** view components and structure:
   - `sidebar-left.html` is a template
   - `sidebar-left.controller.js` provides `SidebarLeftController`, which
     * provides interface for navigation bound with routing rules set with
       Angular UI Router config (`app/core/route-config.js`)
     * implements `makeContact()` method as an action for the 'Share' button
       in the sidebar's toolbar, which uses `app/layout/contactSheet.html`
       template (<span style="color:red;">stubbed for future use</span>).

       Icons supplied by `$mdIconProvider`
       (see `app/core/mdTheming-config.js`), which uses assets from
       `content/svg/`.
   - major sections of sidebar are:
     * toolbar - contains (a) a button showing current declarant and navigating
       to `declarants` main view, and (b) 'Share' button revealing
       `contactSheet`
     * main workflow components navigation
     * on-site documentation navigation
 * **main** view is an area where application core components views are
   loaded in; its components and structure:
   - `main.html` is a template where content is loaded by router in response
     to user's navigation requests
   - the structure is managed by loaded components

[**[back-to-top](#table-of-contents)**]

#### Main features

Main features views are loaded into main view area as a result of user
 navigational requests from left sidebar UI elements.

Main features are supported by the following components:
 * `app/persons/` - components to support person-related features
    including declarants view
 * `app/persons/views/` - person-related views templates
 * `app/workflowMain/` - components for each main workflow stage distributed
   across relevant sub-directories
 * `app/manuals/` - documentation views templates; these also use assets from
   `content/doc/`

Navigation is driven by Angular UI Router
 configured in `app/core/route-config.js`.

##### Declarants view

Actuated by click/tap on left sidebar toolbar button.

| View: |   | `app/persons/view/declarants.html` |
| :--- | :--- | :--- |
| Controller: |  `DeclarantsController` | `app/persons/declarants.controller.js` |

Implements tabbed view:
 1. Current declarant details input form (`app/persons/view/declarants.editCurrent.html`)
    * click on avatar invokes modal dialog using
      `app/persons/view/dialog.ChooseAvatar.html`
      controlled by
      `PersonAvaGridController` (`app/persons/personAvatarGrid.controller.js`);

      Avatars (icons) supplied by `$mdIconProvider`
      (see `app/core/mdTheming-config.js`), which uses assets from
      `content/svg/`.
    * input form employs `angular material` features as well as `ng-telephone` directive
      (`app/core/directives/ng-telephone.directive.js`),
      which in its turn depends on `telephone*` filters (`app/core/filters/telephone*.filter.js`)
 1. List of declarants (`app/persons/view/declarants.selectAnother.html`).
    * on click declarant set as current
    * ~~context 'exclude' button - excludes a person from the list of declarants~~
        - ~~action not available for admin~~
        - ~~reset curent declarant when excluded~~
 1. List of natural persons with other roles (`app/persons/view/declarants.selectFromOtherNatPers.html`) (<span style="color:red;">stubbed for future use</span>)
    * on click person assigned role 'Declarant' and set as current declarant
    * 'add' button - new natural person dialog, which
        - requires full name input
        - checks for uniquiness
        - creates person stub record
        - assigns person 'declarant' role
        - redirects to first tab
    * context 'remove' button - sets person's isActive property to `false`
    * switch 'active/inactive' - shows active and/or inactive natural persons

Data provided by `dataLPSservice` (`app/core/data.LPS.service.js`) configured
 in `app/core/data.LPS-config.js`.

[**[back-to-top](#table-of-contents)**]

##### Main workflow features

Actuated by click/tap on left sidebar navigation buttons.

<span style="color:red;">_**NOT IMPLEMENTED YET, STUBBED**_</span>



[**[back-to-top](#table-of-contents)**]

##### Reference manuals views

Actuated by click/tap on left sidebar navigation buttons.

Requested view loaded from `app/manuals/`. Each view loads relevant
 `.md`-file. Markdown mark-up is supported with `vendor/angular-marked.*.js`,
 which uses `vendor/marked.*.js` library.

[**[back-to-top](#table-of-contents)**]

#### Supporting components

**Markup**

`app/core/markup-config.js` configures `vendor/angular-marked.*.js`
(which uses `vendor/marked.*.js`) to be used in `marked` in directives
to provide for Markdown support.

Please, see [Reference manuals views](#reference-manuals-views) for further details.

**Database support**

`app/core/data.LPS.service.js`:
<span style="color:red;">_**NOT IMPLEMENTED YET AS PLANNED;
Supplies non-persistent mock data**_</span>
  * ~~provides a Local Persistent Storage data service based on IndexedDB~~
  * ~~uses `vendor/ng-lovefield.*.js`,~~
    ~~which is a wrapper for `vendor/lovefield.*.js` library~~
  * ~~configured in `app/core/data.LPS-config.js`;~~

**Other components**

Other components, not mentioned above are either
 * self descriptive
   - `app/core/core.module.js` - declares `app.core` module for other
     components in `app/core/`
 * better described by their authors; please refer to related resources
   - `app/core/mdTheming-config.js`
 * stubbed for future use
   - `app/core/core.controller.js` - stubbed for global controller
   - `app/core/core.service.js` - stubbed for global data service
 * support workarounds for incompatibility issues or lack of
   transparent native techniques
   - `app/core/route-run.js` - enforces default view due to UI-Router view
     include in-intransparability

[**[back-to-top](#table-of-contents)**]


### Server side

`/src/server/`

Source files for server-side part of the application.

Currently is a stub for future possible use

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

## Similar or Related Solutions, Other Related Resources

### Solutions

[Taxer.ua](https://taxer.ua/ru/features) - more for private entrepreneurs

[Tax Return Form [160702]](http://taxlink.ua/ua/declaration/)

### Related Information

[Summary: Tax Return for 2015 [160702]](http://familybudget.com.ua/2016/02/%D0%B4%D0%B5%D0%BA%D0%BB%D0%B0%D1%80%D0%B0%D1%86%D1%96%D1%8F-%D0%BF%D1%80%D0%BE-%D0%B4%D0%BE%D1%85%D0%BE%D0%B4%D0%B8-2015/)

[Summary: Uniform Tax [160702]](http://chp.com.ua/spravochnik/edinyj-nalog)

[Summary: General Taxation [160702]](http://chp.com.ua/spravochnik/obwaja-sistema)
