/**
 * Created by Rudenko on 13/06/2016.
 */
(function(){
  'use strict';

  angular.module('app.personalIncome')
    .factory('PersonalIncomeService', PersonalIncomeService);
  PersonalIncomeService.$inject=[
    '$q',
    'dataLPSservice',
    '$log',
  ];

  /**
   * @name PersonalIncomeService
   * @desc Supplies personal income references data for current declarant
   * @param $q
   * @param dataLPSservice
   * @param $log
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function PersonalIncomeService(
    $q,
    dataLPSservice,
    $log
  ){
    // array of arrays representing income references
    var mockData = [[
      {
        employer    : 'Національний авіаційний університет',
        isMainJob   : true,
        year        : 2015,
        monthBegin  : 1,
        monthEnd    : 7,
        sumIncome   : 70000,
        sumUSI      : 1400,
        sumTax      : 11900,
        sumxIncome  : 7155,
        sumxTax     : 1788.75,
        sumMilTax   : 1100,
      }
    ], [
      
    ]];
    var service = {};
    
    return service;

    function get(id) {
      return $q.resolve(mockData[id]);
    }

  }

})();
