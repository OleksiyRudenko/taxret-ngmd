/**
 * Created by Oleksiy Rudenko on 21/06/2016.
 */

(function(){
  'use strict';

  angular.module('ngLocalDB')
    .provider('LocalDB', LocalDB);

  /* LocalDBservice.$inject = [
    'lovefield',
    '$rootScope',
    '$q',
    '$log',
  ]; */

  function LocalDB() { // lovefield, $rootScope, $q, $log) {
    // service to return
    this.$get = LocalDBservice;
    // configuration setting methods

    // private configurable variables

    // ====================== code

    // configuration setting methods

    // Main service
    function LocalDBservice() {
      var service = {
        version       : privateVersion,
        schemaPath    : privateSchemaPath,
        upgradeConfig : privateUpgradeConfig,
      };

      return service;
    }

  }
})();