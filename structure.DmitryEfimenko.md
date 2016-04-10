*Latest significant update:* [2016-04-10]

Project file structure based on extract from
[DmitryEfimenko/ng-boilerplate/blob/master/README.md](https://github.com/DmitryEfimenko/ng-boilerplate/blob/master/README.md)
[2016-03-11]

The original source follows Extrapolation results for quick reference.

# Extrapolation
Please, note that `.ts` denotes TypeScript files.
## Step 1. Incorporation of comments
 Comment is denoted with leading `#` and follows folder or file
 it refers to.
```bash
ng-boilerplate/
  |- src/
  |  |- client/
  |  |  |       # Each feature folder should have file
  |  |  |         `_module.ts` declaring new angular module,
  |  |  |         which should be referenced in the `client/_module.ts`.
  |  |  |         This means that all `_module` files
  |  |  |         (not any other files from a given feature)
  |  |  |         will be loaded on initial load, but
  |  |  |         that's OK since they are small.
  |  |  |       # Each `angular.module` should have this:
  |  |  |         `ngAmdProvider.configure(app);` in its configuration function.
  |  |  |         This allows angular controllers, services, directive,
  |  |  |         and the rest to be registered asynchronously
  |  |  |         - when the file loads.
  |  |  |       # Each ui.router state options should be wrapped
  |  |  |         in `ngAmdProvider.resolve('client/home/home', {...})`.
  |  |  |         See example in `client/_module.ts`.
  |  |  |         We need to load code for the component that
  |  |  |         is used in the `template` option when
  |  |  |         we navigate to a state.
  |  |  |
  |  |  |- _module.ts
  |  |  |- component1/
  |  |  |- |- component.ts
  |  |  |- |- component.html
  |  |  |- |- component.scss
  |  |- server/
  |  |  |      # Each api route should be placed in
  |  |  |        a separate file under `server/routes/api`
  |  |  |        It also should be registered in `server/routeHandler`
  |  |  |        with the appropriate url path.
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
Comment re AMD-provider:
> Angular by itself it’s very powerful, but on a larger project
> (without something like these two frameworks) you could start
> to see velocity degradation and extra bandwidth usage as we’re
> effectively loading the entire web site in order to view the
> home page. This is where the Angular AMD framework comes into
> play. With potentially hundreds of controllers and views, we
> want a way of preventing unneeded resources from being served
> from the site.
[source](https://lean.mean.software/2014/12/11/angularamd-and-the-ui-router/)[2014-12-11]
**angularAMD** is an utility that facilitates the use of RequireJS
in AngularJS applications supporting on-demand loading of 3rd
party modules such as angular-ui.

[AngularAMD](https://github.com/marcoslin/angularAMD)[latest commit 2014-12-17][2016-04-10]
[explained](http://marcoslin.github.io/angularAMD/#/home)

# Original source

Please, note that `.ts` denotes TypeScript files.

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

This app groups code by feature but not to the point of
grouping the templates/tests/css inside it (it's really easy
to change that in the gulpfile if you want to do that though).


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
  This allows angular controllers, services, directive,
  and the rest to be registered asynchronously - when the
  file loads.
* Each ui.router state options should be wrapped in
  `ngAmdProvider.resolve('client/home/home', {...})`.
  See example in `client/_module.ts`.
  We need to load code for the component that is used in
  the `template` option when we navigate to a state.

**Server**
* Each api route should be placed in a separate file under
  `server/routes/api`. It also should be registered in
  `server/routeHandler` with the appropriate url path.