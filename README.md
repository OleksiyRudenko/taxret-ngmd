# Tax Return
## Goal
 This project uses Angular, Angular Material, UI.Router, Lovefield
 libraries to build a single page application with IndexedDB-based
 local storage to assist users in completion of tax returns under
 Ukrainian tax regulations.

 This application is also might be used as a skeleton application.

 ## Structure
 ```bash
ng-boilerplate/
  |- src/
  |  |- client/
  |  |  |- _module.ts
  |  |  |- component1/
  |  |  |- |- component.ts
  |  |  |- |- component.html
  |  |  |- |- component.scss
  |  |- server/
  |  |  |- <server code>
  |  |- assets/
  |  |  |- <static files>
  |  |- tests/
  |  |  |- unit
  |  |  |  |- **/*.js
  |  |  |- integration
  |  |  |  |- **/*.js
  |  |- types/
  |  |  |  |- **/*.d.ts
  |- vendor/
  |  |- angular/
  |  |- angular-mocks/
  |  |- lodash/
  |  |- ui-router/
  |- gulpfile.js
 ```
This app groups code by feature but not to the point of grouping
the templates/tests/css inside it (it's really easy to change
that in the gulpfile if you want to do that though).

Look at the home module present in the boilerplate to see how
you can integrate a module in the angular app and.
There's also an exemple service and directive.

There are couple conventions in place that you should follow:

**Client**
* Each feature folder should have file `_module.ts` declaring
  new angular module, which should be referenced in the
  `client/_module.ts`.
  I decided to avoid things like `ocLazyLoad` or `angularAMD`
  due to introduced complexity. That's why main _module.ts has
  dependency on feature modules. This means that all `_module`
  files (not any other files from a given feature) will be
  loaded on initial load, but that's OK since they are small.
* Each `angular.module` should have this:
  `ngAmdProvider.configure(app);` in its configuration function.
  This allows angular controllers, services, directive, and
  the rest to be registered asynchronously - when the file loads.
* Each ui.router state options should be wrapped in
  `ngAmdProvider.resolve('client/home/home', {...})`.
  See example in `client/_module.ts`.
  We need to load code for the component that is used in
  the `template` option when we navigate to a state.

**Server**
* Each api route should be placed in a separate file under
  `server/routes/api`. It also should be registered in
  `server/routeHandler` with the appropriate url path.


## Stack

### Core & UI

| [AngularJS 1.5.1](https://angularjs.org/) [more](https://drive.google.com/drive/folders/0BxgtL8yFJbacQmpCc1NMV3d5dnM) | [angular-material 1.0.6](https://material.angularjs.org/1.0.6/) | [angular-ui.router 0.2.18](http://angular-ui.github.io/ui-router/) |
| --- | --- | --- |
| ?[angular-ui](http://angular-ui.github.io/) | ?[angular-xeditable](https://vitalets.github.io/angular-xeditable/) | ?[angular-formly](http://angular-formly.com/#/) |
| ?[ngmd-data-table](https://github.com/daniel-nagy/md-data-table) |. | . |

### Data Storage

| [IndexedDB 0.0](https://www.w3.org/TR/IndexedDB/) | [Lovefield 0.0](https://github.com/google/lovefield) | . |
| --- | --- | --- |


*This README.md structure is taken from
[DmitryEfimenko/ng-boilerplate](https://github.com/DmitryEfimenko/ng-boilerplate)*

* * *

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
     users/             --> package for user features
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
