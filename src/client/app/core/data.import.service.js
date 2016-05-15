/* LPS = Local Persistent Storage */
(function(){
  'use strict';

  angular.module('app.core')
    .factory('DataImportService', DataImportService);
  DataLPSservice.$inject=[
    '$q',
    '$rootScope',
    'lovefield',
    'enumPersonStatus',
    'enumCountryUARegionService',
    'enumAptType',
    '$log',
  ];

  /**
   * @name DataImportService
   * @desc A service to initialize/update LocalPersistentStorage:IndexedDB with/from (mockData|remoteDB|files)
   * @param $q
   * @param $rootScope
   * @param lovefield
   * @param enumPersonStatus
   * @param enumCountryUARegionService
   * @param enumAptType
   * @param $log
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function DataImportService(
    $q,
    $rootScope,
    lovefield,
    enumPersonStatus,
    enumCountryUARegionService,
    enumAptType,
    $log
  ){


  }

})();