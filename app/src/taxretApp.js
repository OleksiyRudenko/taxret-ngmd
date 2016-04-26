(function(){
  'use strict';

  // Prepare the 'taxretApp' module for subsequent registration of configuration, controllers and delegates
angular
  .module('taxretApp', ['ngMessages', 'ngMaterial', 'ui.router', 'app', 'users', 'hc.marked', 'kutomer.ng-lovefield']);
  
})();