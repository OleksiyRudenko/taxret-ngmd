*Latest significant amendment:* [2016-04-10]

Project file structure based on extracts from
[Scalable code organization in AngularJS](https://medium.com/opinionated-angularjs/scalable-code-organization-in-angularjs-9f01b594bf06#.savwdvmcq)[2013-11-20]

The document refers to
[AngularJSv1.2 CRUD application demo](https://github.com/angular-app/angular-app)[2014-08-18]
noting that [here](https://github.com/angular-app/angular-app/tree/master/client/src/common)
it employs hybrid of folders and module pattern, which is not a good practice.
> The directives, resources (RESTful models) and services directories are simply
> collections of stand-alone objects, while security is a module. My suggestion is
> to put all your modules in the app directory and avoid creating this hybrid.

The original source follows Extrapolation results for quick reference.

# Extrapolation results

See Original source extract below. Not so much to extrapolate.

# Original Source
```
app
  about
    about.html
    about.js      # module
    about.spec.js
  home
    home.html
    home.js       # module
    home.spec.js
  app.js
  app.spec.js
assets
  (images etc.)
common
  directives
  resources (or models)
  services
styles
  (sass/less/css files)
index.html
```
It’s a good practice to use dot notation in the module name as a namespace and
to indicate a relationship (but not a dependency):
```
angular.module('myApp.home', [ ])

   .config(function ($routeProvider) {
     $routeProvider.when('/home', {
       templateUrl: 'home/home.html',
       controller: 'HomeController',
       resolve: {
         newsItems: function ($http) {
           return $http.get('api/news');
         }
       }
     });
   })

   .controller('HomeController', function ($scope, newsItems) {
     $scope.newsItems = newsItems;
   });
```