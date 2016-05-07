(function(){
  'use strict';

  // Prepare the 'app' module for subsequent registration of configuration, controllers and delegates
  // TODO: rename 'app' => 'src' and 'src' => 'smthElse' for the sake of style compliance
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

    // App Features
      'app.core',
      'users',
      'app.layout',

  ]);
  
})();