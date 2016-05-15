(function(){
  'use strict';

  angular.module('app.core')
    .factory('DataImportService', DataImportService);

  DataImportService.$inject=[
    '$http',
    'lovefield',
    '$log',
    'NetworkDataFetcher',
  ];

  /**
   * @name DataImportService
   * @desc A service to initialize/update LocalPersistentStorage:IndexedDB with/from (mockData|remoteDB|files)
   * @param $http
   * @param lovefield
   * @param $log
   * @param NetworkDataFetcher
   * @returns {{Object}}
   */
  function DataImportService(
    $http,
    lovefield,
    $log,
    NetworkDataFetcher
  ){
    var service = {
      indicatorTable : 'ePerson', // if this table is empty then DB needs to be initialized with initial and mock data
      http_       : $http,
      dataFetcher_ : NetworkDataFetcher,
      lovefield_  : lovefield,
      db_         : null,
      init        : init,
      init_       : init_,
      checkForExistingData_ : checkForExistingData_,
      insertData_ : insertData_,
    };

    initializeService();
    
    return service;

    function initializeService() {
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
      return this.whenInitialized_;
    };

    // Private methods

    /**
     * @name init_
     * @desc Ensures that database is populated with data.
     * @return {!IThenable}
     * @private
     */
    function init_() {
      return this.lovefield_.getDB()
        .then(
          function(db) {
            this.db_ = db;
            // window.db = db;

            return this.checkForExistingData_();
          }
          .bind(this)
        )
        .then(
          (function(dataExist) {
            return dataExist
              ? Promise.resolve()
              : this.insertData_();
          })
            .bind(this)
        );
    }
  
    /**
     * @name checkForExistingData_
     * @desc Checks if any data exists already in the DB.
     * @return {boolean}
     * @private
     */
    function checkForExistingData_() {
      var indicatorTable = this.db_.getSchema().table(this.indicatorTable);
      return this.db_.select().from(indicatorTable).exec().then(
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
        }.bind(this));
    };
  

  }

})();