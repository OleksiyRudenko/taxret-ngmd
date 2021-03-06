# Project Directory Layout

Please, note that files precede sibling sub-directories
 for the sake of better files attribution to a directory.

```
Project-Root-Folder
|
+---node_modules        # project builder files; inherited from angular-material, not in use
|
+---src                 # app source files
|   +---client              # client side
|   |   |
|   |   |   index.html          # main entry point
|   |   |
|   |   +---app
|   |   |   +---core            # app core: main module, configs, runs
|   |   |   |
|   |   |   +---layout          # viewport layout
|   |   |   |
|   |   |   +---manuals         # documents views
|   |   |   |
|   |   |   +---persons         # persons related features
|   |   |   |   |
|   |   |   |   \---view            # persons related features views
|   |   |   |
|   |   |   \---workflowMain    # main workflow features (major options at left sidenav menu)
|   |   |
|   |   +---content         # app assets
|   |   |   |
|   |   |   |   app.css         # styles
|   |   |   |
|   |   |   +---doc             # documents: references and manuals
|   |   |   |
|   |   |   \---svg             # icons
|   |   |
|   |   \---vendor          # 3rd party libraries to be hosted along with app
|   |
|   \---server          # server side
|
+---test            # project tests files; inherited from angular-material, not in use
|
\---vendor          # external libraries used in development phase; to be replaced with CDN references on production
```

* * *

### *Ignore the following remainder of the document!*

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
