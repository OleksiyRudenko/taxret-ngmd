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

* * *

### *Ignore the following remainder of the document!*

# Angular Material-Start

This Material **start** project is a *seed* for AngularJS Material applications. The project contains a sample AngularJS application and is pre-configured to install the Angular framework and a bunch of development and testing tools for instant web development gratification.

This sample application is intended to be useful as both a learning tool and a skeleton application
for a typical [AngularJS Material](http://material.angularjs.org/) web app: comprised of a Side navigation
area and a content area. You can use it to quickly bootstrap your AngularJS webapp projects and dev
environment for these projects.

### What is the UX?

Below is a snapshot of the Starter-App with the Users' *master-detail* view. Also shown is the user
experience that will be displayed for smaller device sizes. The responsive layout changes to hide
the user list, reveal the **menu** button. In the User Details view, you may also click the
**share** button  to show the Contact &lt;User&gt; bottom sheet view.

<br/>

![material-starter-ux2](https://cloud.githubusercontent.com/assets/210413/6448551/70864488-c0e0-11e4-8767-c4e1e4c2f343.png)

<br/>

This Starter app demonstrates how:

*  Angular Material `layout` and `flex` options can easily configure HTML containers
*  Angular Material components `<md-toolbar>`, `<md-sidenav>`, `<md-icon>` can be quickly used
*  Custom controllers can use and show `<md-bottomsheet>` with HTML templates
*  Custom controller can easily, programmatically open & close the SideNav component.
*  Responsive breakpoints and `$mdMedia` are used
*  Theming can be altered/configured using `$mdThemingProvider`
*  ARIA features are supported by Angular Material and warnings can be used to improve accessibility.

### ES5 & ES6 Tutorials

The repository contains both ES5 and ES6 versions of the application. Traditional development with
ES5 standards and solutions are presented here by default. Tutorials are included: step-by-step
instructions that clearly demonstrate how the Starter application can be created in minutes.

![Wireframe](https://cloud.githubusercontent.com/assets/210413/6444676/c247c8f8-c0c4-11e4-8206-208f55cbceee.png)

> These tutorials have been presented live, on-stage at **ng-conf 2015, Utah**.

Developers should checkout the following repository branches for:

* Branch [**master**](https://github.com/angular/material-start): contains the finished, ES5, material-starter application.
* Branch [**Starter - ES5 Tutorials**](https://github.com/angular/material-start/tree/es5-tutorial):
contains the ES5 tutorials with development Lession #1 - #7.
* Branch [**Starter - ES6** ](https://github.com/angular/material-start/tree/es6): same completed application as shown in the **[master](https://github.com/angular/material-start)** branch, but implemented with ES6 and JSPM (instead of the ES5 in master).

> The **README** for the ES6 branch will provide some details showing how easy, <u>more simplifed</u>,
and <u>more manageable</u> it is to develop ES6 applications with Angular Material 1.x. As time permits, we will expand on that information.<br/><br/> 

## Getting Started

#### Prerequisites

You will need **git** to clone the material-start repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test material-start. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

#### Clone material-start

To get you started you can simply clone `master` branch from the
[Material-Start](https://github.com/angular/material-start) repository and install the dependencies:

> NOTE: The `master` branch contains the traditional, ES5 implementation familiar to Angular developers.

Clone the material-start repository using [git][git]:

```
git clone https://github.com/angular/material-start.git
cd material-start
```

If you just want to start a new project without the material-start commit history then you can do:

```bash
git clone --depth=1 https://github.com/angular/material-start.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

#### Install Dependencies

We have two kinds of dependencies in this project: tools and AngularJS framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We also get the AngularJS and Angular Material library code via `npm`

```
npm install
```

You should find that you have one new folder in your project.

* `node_modules` - contains the npm packages for the tools we need


## Directory Layout

```
app/                    --> all of the source files for the application
  assets/app.css        --> default stylesheet
  src/           		--> all app specific modules
     declarants/             --> package for user features
  index.html            --> app layout file (the main html template file of the app)
test/
  karma.conf.js         --> Karma-Jasmine config file (for unit tests)
  protractor-conf.js    --> Protractor config file (for e2e tests)
  unit/					--> Karma-Jasmine unit tests
  e2e/ 			        --> end-to-end tests
```


## Serving the Application Files

While AngularJS is client-side-only technology and it's possible to create AngularJS webapps that
don't require a backend server at all, we recommend serving the project files using a local
web server during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`.

### Running the App during Development

The angular-seed project comes pre-configured with a local development web server. It is a node.js
tool called [http-server][http-server].  You can install http-server globally:

```
npm install -g live-server
```

Then you can start your own development web server to serve static files from a folder by running:

>Run `live-server` in a Terminal window</br>
Open browser to url `http://localhost:8080/app/`


Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.

### Run UnitTests

Simply open a Terminal window and run `npm run tests` to start all your Karma unit tests.


## Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the
project. Now that the AngularJS framework library code and tools are acquired through package managers
(npm) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.


## Contact

For more information on AngularJS please check out http://angularjs.org/
For more information on Angular Material, check out https://material.angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
