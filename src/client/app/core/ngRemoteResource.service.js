/**
 * Created by Oleksiy Rudenko on 20/06/2016.
 *
 * Extends ngResource.
 * Credits to Kirk Bushell http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
 *
 * **Usage**
 * Inject module dependency:
 * angular.module( 'app', [ 'ngRemoteResource' ] ); // inject dependency
 *
 * Inject dependency on service
 * angular.module( 'app' ).factory( 'UserResource', UserResource );
 * UserResource.$inject=[ 'RemoteResource' ];
 * function UserResource( $resource ) {
 *   return $resource( 'users/:id', { id: '@id' } ); // extended version invoked
 * }
 */

(function(){
  'use strict';

// Prepare the 'app' module for subsequent registration of configuration, controllers and delegates
  angular.module('ngRemoteResource')
    .factory('RemoteResource',RemoteResource);

  RemoteResource.$inject = [
    '$resource',
  ];

  function RemoteResource($resource) {
    return function( url, params, methods ) {
      var defaults = {
            update: { method: 'PUT', isArray: false },
            create: { method: 'POST' }
      };
      methods = angular.extend( defaults, methods );
      var resource = $resource( url, params, methods );
      resource.prototype.$save = function() {
        if ( !this.id ) {
          return this.$create();
        } else {
          return this.$update();
        }
      };
      return resource;
    };
  }
})();