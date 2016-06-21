(function(){
  'use strict';

  // configuration for routing
  angular
    .module('app')
    .config( ConfigCompileProvider );

  ConfigCompileProvider.$inject = [
    '$compileProvider',
  ];

  // XXX: 'true' enables debugging with Protractor & Batarang, affects app performance; https://docs.angularjs.org/guide/production
  function ConfigCompileProvider($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
  }

})();