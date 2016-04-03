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