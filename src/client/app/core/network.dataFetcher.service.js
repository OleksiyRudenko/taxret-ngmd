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

  }


})();
