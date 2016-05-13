(function(){
  'use strict';

  // configuration for routing
  angular
    .module('app')
    .config(
      ConfigCompileProvider
      /*
      ['$compileProvider',
      function($compileProvider) {
        $compileProvider.debugInfoEnabled(false); // XXX: 'true' enables debugging with Protractor & Batarang, affects app performance
      }] */
    );

  ConfigCompileProvider.$inject = [
    '$compileProvider',
  ];

  // XXX: 'true' enables debugging with Protractor & Batarang, affects app performance; https://docs.angularjs.org/guide/production
  function ConfigCompileProvider($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
  }

})();