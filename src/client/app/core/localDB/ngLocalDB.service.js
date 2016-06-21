/**
 * Created by Oleksiy Rudenko on 21/06/2016.
 */

(function(){
  'use strict';

  angular.module('ngLocalDB')
    .factory('LocalDBservice', LocalDBservice);

  LocalDBservice.$inject = [
    'lovefield',
    '$rootScope',
    '$q',
    '$log',
  ];

  function LocalDBservice(lovefield, $rootScope, $q, $log) {

  }
})();