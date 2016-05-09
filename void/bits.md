## Services, Factories et al
### Service returns a promise
Respect promise of async nature of data delivery.
Inject (register) service via factory

`.factory('serviceName', function(param|$scope|$http...) {} )`

or min-safe syntax (declare params ahead for minificator)

`.factory('serviceName', [ '$scope', 'serviceA', function($scope,serviceA) {} ])`

```javascript
angular.module('myModule', [])
 .controller('myController', function($scope, userRepository) {
    // promise
    userRepository.getAllUsers().success(function(users) {$scope.users = users});
    // wrong way
    $scope.users = userRepository.getAllUsers();

    /* $scope.changeFirstUsersFirstName = function() {
        $scope.users[0].firstName = 'Jill' */
    };
 })
 .factory('userRepository', function($http) {
    return {
        getAllUsers: function() {
            var url = "https://api.mongolab.com/api/1/databases/angularjs-intro/collections/users?apiKey=terrPcifZzn01_ImGsFOIZ96SwvSXgN9";
            return $http.get(url);
        }
    };
```

### Service => Factory
Service is just a constructor function that will be called with 'new'.

Factory returns an object you can run some code before.

See service as a factory in transit to ES6.
```javascript
 app.controller('AppController', function (MyService) {
    MyService.sayHello(); // logs 'hello'
   });

 app.service('MyService', function () {
  this.sayHello = function () {
    console.log('hello');
  };
 });

 app.factory('MyService', function () {
  return {
    sayHello: function () {
      console.log('hello');
    };
  }
 });

 // service as a factory
 app.service('MyService', function () {
 // we could do additional work here too
 return {
     sayHello: function () {
       console.log('hello');
     };
   }
 });

 // === ES6 === style
 class MyService {
   sayHello() {
     console.log('hello');
   }
 }

 app.service('MyService', MyService);

```

See also [discussion](http://stackoverflow.com/questions/14324451/angular-service-vs-angular-factory).

### Constant, Value, Service, Factory, Decorator, Provider
See [explanation](https://gist.github.com/demisx/9605099)
and also [in details](http://www.simplygoodcode.com/2015/11/the-difference-between-service-provider-and-factory-in-angularjs/)
and on [docs.angularJS.org](https://docs.angularjs.org/guide/services)

## vm vs $scope

[AngularJS's Controller As and the vm Variable<sup>[2014-06-24]</sup>](http://www.johnpapa.net/angularjss-controller-as-and-the-vm-variable/)

[Digging into Angular’s “Controller as” syntax<sup>[2014-05-26]</sup>](https://toddmotto.com/digging-into-angulars-controller-as-syntax/)
-- NB! $watchers

[A better way to $scope, angular.extend, no more “vm = this”<sup>[2015-04-20]</sup>](https://toddmotto.com/a-better-way-to-scope-angular-extend-no-more-vm-this/)

Avoid binding to primitives, even those produced by `ng-repeat`:
```javascript
  <div ng-repeat="value in model.values">     // model.values = [ primitives, ...]
    <input type="text" ng-model="value" />                  // avoid
    <input type="text" ng-model="model.values[$index]" />   // recommended
  </div>
```

## $rootScope
[broadcast/emit...](https://makeomatic.ru/blog/2014/10/07/Angular_scope_rootScope/)

## misc

2read: [$apply/safeApply](http://ts-soft.ru/blog/angular-cheatsheet)