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
    var service = {};
    
    return service;
  }

})();
