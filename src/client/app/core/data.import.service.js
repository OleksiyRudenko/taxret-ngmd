/* LPS = Local Persistent Storage */
(function(){
  'use strict';

  angular.module('app.core')
    .factory('DataImportService', DataImportService);
  DataLPSservice.$inject=[
    '$http',
    'lovefield',
    '$log',
    // 'NetworkDataFetcher',
  ];

  /**
   * @name DataImportService
   * @desc A service to initialize/update LocalPersistentStorage:IndexedDB with/from (mockData|remoteDB|files)
   * @param $http
   * @param lovefield
   * @param $log
   * param NetworkDataFetcher
   * @returns {{Object}}
   */
  function DataImportService(
    $http,
    lovefield,
    $log
    // NetworkDataFetcher
  ){
    var service = {
      indicatorTable : 'ePerson', // if this table is empty then DB needs to be initialized with initial and mock data
      http_       : $http,
      dataFetcher_ : null,
      lovefield_  : lovefield,
      db_         : null,
      init        : init,
      init_       : init_,
      checkForExistingData_ : checkForExistingData_,
      insertData_ : insertData_,
    };

    initialize();
    
    return service;

    function initialize() {
      // service.dataFetcher_ = new NetworkDataFetcher(service.http_);
      service.whenInitialized_ = service.init_().then(
        function() {
          $log.debug('DB populated with data');
        }.bind(service)
      );
    }
    /**
     * @name init
     * @desc Ensures that database is populated with data (re-entrant).
     * @return {!IThenable}
     */
    function init() {
      return service.whenInitialized_;
    };

    // Private methods

    /**
     * @name init_
     * @desc Ensures that database is populated with data.
     * @return {!IThenable}
     * @private
     */
    function init_() {
      return service.lovefield_.getDB()
        .then(
          function(db) {
            service.db_ = db;
            // window.db = db;

            return service.checkForExistingData_();
          }
          .bind(service)
        )
        .then(
          (function(dataExist) {
            return dataExist
              ? Promise.resolve()
              : service.insertData_();
          })
            .bind(service)
        );
    }
  
    /**
     * @name checkForExistingData_
     * @desc Checks if any data exists already in the DB.
     * @return {boolean}
     * @private
     */
    function checkForExistingData_() {
      var indicatorTable = service.db_.getSchema().table(service.indicatorTable);
      return service.db_.select().from(indicatorTable).exec().then(
        function(rows) {
          return rows.length > 0;
        });
    };
  
    /**
     * Fetches the data from an external source or mock data source and inserts it to the DB.
     * @return {!IThenable}
     * @private
     */
    function insertData_() {
      return Promise.all([
        /* service.dataFetcher_.fetchHistoricalData(),
        service.dataFetcher_.fetchStockInfo() */
      ]).then(
        function(rawData) {
          /* var historicalDataRaw = rawData[0];
          var stockInfoRaw = rawData[1];
          return service.lovefield_.insertData(
            historicalDataRaw, stockInfoRaw); */
        }.bind(service));
    };
  

  }

})();