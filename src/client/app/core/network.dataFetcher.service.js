/*
    Base path: https://github.com/google/lovefield/tree/master/codelabs/stock_analyzer
    For service prototype see: src/common/data_fetcher.js
    For use see: src/common/fetcher_service.js

 */

(function(){
  'use strict';
  
  angular.module('app.core')
    .factory('NetworkDataFetcher', NetworkDataFetcherService);
  
  NetworkDataFetcherService.$inject=[
    '$http',
    '$log',
  ];

  /**
   * @name NetworkDataFetcherService
   * @desc Provides app with external or mock data. This is entry point for sync with cloud storage
   */

  function NetworkDataFetcherService(
    $http,
    $log
  ) {
    var service = {
      http_             : $http,
      queryTemplate_    : './content/data/{q}.json',
                          // remote e.g. 'https://www.google.com/finance/historical?q={q}&authuser=0&output=csv'
      files             : ['admin','mockDeclarants',], // each json file contains array of objects
      FetchData         : FetchData,
      FetchDataFromLocal  : FetchDataFromLocal,
      FetchDataFromLocalForItem_ : FetchDataFromLocalForItem_,
      FetchDataFromRemote : FetchDataFromRemote,
    };

    return service;
    
    /**
     * @name  FetchData
     * @desc  Fetches data over http or, if  from local file
     * @param {boolean} [fromFile]
     */
    function FetchData(remote) {
      remote = remote || false;
      return (remote)
        ? this.FetchDataFromRemote()
        : this.FetchDataFromLocal();
      }
  
    /**
     * @name FetchDataFromLocal
     */
    function FetchDataFromLocal() {
      var promises = this.files.map(this.FetchDataFromLocalForItem_, this);
      return Promise.all(promises)
        .then(
          function(arrayPerFile) {
            var result = [];
            arrayPerFile.forEach(function(rows) {
              result.push.apply(result,rows);
            });
            return result;
          }
        );
    }

    /**
     * @name  FetchDataFromLocalForItem_
     * @param {string} filename
     * @private
     */
    function FetchDataFromLocalForItem_(filename) {
      var url = this.queryTemplate_.replace('{q}',filename);
      return this.http_.get(url)
        .then(
          function(result) {
            return result.data.map(function(obj){
              // add some extra data if required
              $log.debug("network.dataFetcher.service:FetchDataFromLocalForItem_ :: "
                + filename + ".obj = "
                + angular.toJson(obj,true));
              return obj;
            });
          }
        );
    }
      
      /**
       * @name FetchDataFromRemote
       */  
      function FetchDataFromRemote() {
    
      }
    

  }


})();
