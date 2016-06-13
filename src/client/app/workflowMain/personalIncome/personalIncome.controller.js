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
   * Employs https://github.com/daniel-nagy/md-data-table
   */
  function PersonalIncomeController(
    PersonalIncomeService,
    $log
  ) {
    /* jshint validthis: true */
    var vm = this;

    // ================ define tbv == table view
    vm.tbv = {};
    // view options
    vm.tbv.options = {
      rowSelection:     true,
      multiSelect:      true,
      autoSelect:       true,
      decapitate:       false,
      largeEditDialog:  false,
      boundaryLinks:    false,
      limitSelect:      true,
      pageSelect:       true
    };
    // selected rows storage
    vm.tbv.selected = [];
    // rows per page selector set-up
    vm.tbv.limitOptions = [5, 10, 15, {
      label: 'All',
      value: function () {
        return vm.data ? vm.data.count : 0;
      }
    }];
    // initial query
    vm.tbv.query = {
      order:  'name',
      limit:  5,
      page:   1
    };
    // table columns mapping
    vm.tbv.columns = [{
 
    }];

  }

})();
