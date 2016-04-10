*Latest significant uppdate:* [2016-04-10]

Project file structure based on extracts from
[ngbp/ngbp](https://github.com/ngbp/ngbp)[2015-01-25]

It is worth to specifically note that the project documentation
therein is quite developed and contains
detailed explanations on project build processes.

The original source follows Extrapolation results for quick reference.

# Extrapolation

Generalized comments incorporated for the sake of optimization analysis process.

Comment is denoted with leading `#` and follows folder or file
it refers to.

Files put above sub-directories for better comprehension.

Read [Original Source](#original-source) section and follow
subsequent references for further details.

## Step 1. Merger
```
ng-boilerplate/
  |- .bowerrc               # The Bower configuration file. This
  |                           tells Bower to install components into
  |                           the vendor/ directory.
  |- bower.json             # This is our project configuration for
  |                           Bower and it contains the list of Bower
  |                           dependencies we need.
  |- build.config.js        # Customizable build settings
  |- Gruntfile.js           # Build script
  |- module.prefix          # Compiled application script wrapped (1)
  |- module.suffix          # Compiled application script wrapped (2)
  |- package.json           # App metadata, used by NPM and build script
  |- grunt-tasks/
  |- karma/                 # Test configuration
  |- src/                   # Application sources
  |  |- index.html          # This is the HTML document of the single-page application
  |  |- app/                # Application-specific code, i.e. code not likely to
  |  |  |                     be reused in another application.
  |  |  |- app.js           # Main app configuration file. It kickstarts
  |  |  |                     the whole process by requiring all the modules
  |  |  |                     from src/app that we need. We must load these
  |  |  |                     now to ensure the routes are loaded. If as in
  |  |  |                     our "products" example there are subroutes, we
  |  |  |                     only require the top-level module, and allow
  |  |  |                     the submodules to require their own submodules.
  |  |  |- app.spec.js      # Unit testing specs
  |  |  |- <app logic>      # Any component can be drag-n-dropped
  |  |  |                     with all its code and styles
  |  |  |- about/           # .html|js|css
  |  |  |- home/
  |  |- assets/             # Static files like fonts and images
  |  |  |- <static files>
  |  |- common/             # Third-party libraries or components likely to be
  |  |  |                     reused in another application
  |  |  |- <reusable code>  # .html|js|css
  |  |  |- plusOne/         # A simple directive to load a Google +1
  |  |  |                     Button on an element.
  |  |- less/               # LESS CSS files -- routing only
  |  |  |- main.less
  |  |  |- variables.less
  |- vendor/                # Third-party libraries
  |  |- angular-bootstrap/
  |  |- bootstrap/
  |  |- placeholders/
```

# Original source
Generalized comments incorporated for the sake of optimization analysis process.

Comment is denoted with leading `#` and follows folder or file
it refers to.

Detailed explanations may be added bellow the structure.

Files put above sub-directories for better comprehension.

## Overall Directory Structure
Refer to [README.md](https://github.com/ngbp/ngbp/blob/v0.3.2-release/README.md)[2014-12-08]
for details.
```
ng-boilerplate/
  |- .bowerrc               # The Bower configuration file. This
  |                           tells Bower to install components into
  |                           the vendor/ directory.
  |- bower.json             # This is our project configuration for
  |                           Bower and it contains the list of Bower
  |                           dependencies we need.
  |- build.config.js        # Customizable build settings
  |- Gruntfile.js           # Build script
  |- module.prefix          # Compiled application script wrapped (1)
  |- module.suffix          # Compiled application script wrapped (2)
  |- package.json           # App metadata, used by NPM and build script
  |- grunt-tasks/
  |- karma/                 # Test configuration
  |- src/                   # Application sources
  |  |- index.html
  |  |- app/
  |  |  |- <app logic>
  |  |  |- app.js
  |  |  |- app.spec.js
  |  |  |- about/
  |  |  |- home/
  |  |- assets/
  |  |  |- <static files>
  |  |- common/
  |  |  |- <reusable code>
  |  |- less/
  |  |  |- main.less
  |- vendor/                # Third-party libraries
  |  |- angular-bootstrap/
  |  |- bootstrap/
  |  |- placeholders/
```
* `vendor/` - third-party libraries. Bower will install
  packages here. Anything added to this directory will need
  to be manually added to `build.config.js` and `karma/karma-unit.js`
  to be picked up by the build system.

## The `src` Directory
The `src/` directory contains all code used in the application along with
all tests of such code.
```
src/
  |- index.html       # this is the HTML document of the single-page application
  |- app/             # application-specific code, i.e. code not likely to
  |                     be reused in another application.
  |  |- app.js
  |  |- app.spec.js
  |  |- about/
  |  |- home/
  |- assets/          # static files like fonts and images
  |- common/          # third-party libraries or components likely to be
  |                     reused in another application
  |  |- plusOne/
  |- less/            # LESS CSS files
  |  |- main.less
  |  |- variables.less
```

### `index.html`
The `index.html` file is the HTML document of the single-page application (SPA)
that should contain all markup that applies to everything in the app, such as
the header and footer. It declares with `ngApp` that this is `ngBoilerplate`,
specifies the main `AppCtrl` controller, and contains the `ngView` directive
into which route templates are placed.

Unlike any other HTML document (e.g. the templates), `index.html` is compiled as
a Grunt template, so variables from `Gruntfile.js` and `package.json` can be
referenced from within it. Changing `name` in `package.json` from
"ng-boilerplate" will rename the resultant CSS and JavaScript placed in `build/`,
so this HTML references them by variable for convenience.

### The `src/app` Directory
The `src/app` directory contains all code specific to this application. Apart
from `app.js` and its accompanying tests (discussed below), this directory is
filled with subdirectories corresponding to high-level sections of the
application, often corresponding to top-level routes. Each directory can have as
many subdirectories as it needs, and the build system will understand what to
do. For example, a top-level route might be "products", which would be a folder
within the `src/app` directory that conceptually corresponds to the top-level
route `/products`, though this is in no way enforced. Products may then have
subdirectories for "create", "view", "search", etc. The "view" submodule may
then define a route of `/products/:id`, ad infinitum.

As `ngBoilerplate` is quite minimal, take a look at the two provided submodules
to gain a better understanding of how these are used as well as to get a
glimpse of how powerful this simple construct can be.
```
src/
  |- app/
  |  |- app.js      # Main app configuration file. It kickstarts
  |  |                the whole process by requiring all the modules
  |  |                from src/app that we need. We must load these
  |  |                now to ensure the routes are loaded. If as in
  |  |                our "products" example there are subroutes, we
  |  |                only require the top-level module, and allow
  |  |                the submodules to require their own submodules.
  |  |- app.spec.js # Unit testing specs
  |  |- home/
  |  |- about/
```

#### `app.js`
This is our main app configuration file. It kickstarts the whole process by
requiring all the modules from `src/app` that we need. We must load these now to
ensure the routes are loaded. If as in our "products" example there are
subroutes, we only require the top-level module, and allow the submodules to
require their own submodules.

As a matter of course, we also require the template modules that are generated
during the build.

However, the modules from `src/common` should be required by the app
submodules that need them to ensure proper dependency handling. These are
app-wide dependencies that are required to assemble your app.

```js
angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about'
  'ui.router',
  'ui.route'
])
```

With app modules broken down in this way, all routing is performed by the
submodules we include, as that is where our app's functionality is really
defined.  So all we need to do in `app.js` is specify a default route to follow,
which route of course is defined in a submodule. In this case, our `home` module
is where we want to start, which has a defined route for `/home` in
`src/app/home/home.js`.

```js
.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})
```

Use the main applications run method to execute any code after services
have been instantiated.

```js
.run( function run () {
})
```

And then we define our main application controller. This is a good place for logic
not specific to the template or route, such as menu logic or page title wiring.

```js
.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})
```
See [src/app/README.md](https://github.com/ngbp/ngbp/blob/v0.3.2-release/src/app/README.md)[2014-04-15]
for further details and explanations re testing.

### The `src/common/` Directory
The `src/common/` directory houses internal and third-party re-usable
components. Essentially, this folder is for everything that isn't completely
specific to this application.

Each component resides in its own directory that may then be structured any way
the developer desires. The build system will read all `*.js` files that do not
end in `.spec.js` as source files to be included in the final build, all
`*.spec.js` files as unit tests to be executed, and all `*.tpl.html` files as
templates to compiled into the `$templateCache`. There is currently no way to
handle components that do not meet this pattern.

```
src/
  |- common/
  |  |- plusOne/    # a simple directive to load a Google +1
  |  |                Button on an element.
```

Every component contained here should be drag-and-drop reusable in any other
project; they should depend on no other components that aren't similarly
drag-and-drop reusable.

### The `src/less` Directory
This folder is actually fairly self-explanatory: it contains your LESS/CSS files to be compiled during the build.
The only important thing to note is that *only* `main.less` will be processed during the build, meaning that all
other stylesheets must be *imported* into that one.

This should operate somewhat like the routing; the `main.less` file contains all of the site-wide styles, while
any styles that are route-specific should be imported into here from LESS files kept alongside the JavaScript
and HTML sources of that component. For example, the `home` section of the site has some custom styles, which
are imported like so:

```css
@import '../app/home/home.less';
```

The same principal, though not demonstrated in the code, would also apply to reusable components. CSS or LESS
files from external components would also be imported. If, for example, we had a Twitter feed directive with
an accompanying template and style, we would similarly import it:

```css
@import '../common/twitterFeed/twitterFeedDirective.less';
```

Using this decentralized approach for all our code (JavaScript, HTML, and CSS) creates a framework where a
component's directory can be dragged and dropped into *any other project* and it will "just work".

I would like to eventually automate the importing during the build so that manually importing it here would no
longer be required, but more thought must be put in to whether this is the best approach.