(function(){
  'use strict';

// Prepare the 'app' module for subsequent registration of configuration, controllers and delegates
angular
  .module('app', [

    // Global dependencies
      // -- Angular & Angular Material helpers
      'ngMessages',
      'ngMaterial',
      // -- Routing
      'ui.router',
      // -- Markup
      'hc.marked',
      // -- Database
      'kutomer.ng-lovefield',
      // -- Directives
      'ng-currency',
      'ng-telephone',

    // App Features
      'app.core',
      'app.persons',
      'app.layout',

  ]);
  
})();