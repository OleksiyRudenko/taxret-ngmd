(function(){
  'use strict';

  // Prepare the 'taxretApp' module for subsequent registration of configuration, controllers and delegates
  // TODO: rename 'taxretApp' => 'src' and 'src' => 'smthElse' for the sake of style compliance
angular
  .module('taxretApp', [

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

    // App Features
    'app',
    'users',
    'app.layout',

  ]);
  
})();