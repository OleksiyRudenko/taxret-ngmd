/**
 * Created by Rudenko on 13/06/2016.
 */
(function(){

  angular
    .module('app.personalIncome')
    .controller('PersonalIncomeController',  PersonalIncomeController);

  PersonalIncomeController.$inject = [
    'PersonalIncomeService',
    '$log',
  ];

  /**
   * @name PersonalIncomeController
   * @desc Manage current declarant's personal income references
   * @param PersonalIncomeService
   * @param $log
   * @constructor
   */
  function PersonalIncomeController(
    PersonalIncomeService,
    $log
  ) {
    /* jshint validthis: true */
    var vm = this;


  }

})();
