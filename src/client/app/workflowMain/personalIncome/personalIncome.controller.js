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
    
    // define tbv = table view 
    vm.tbv.options = {       // view options
      rowSelection:     true,
      multiSelect:      true,
      autoSelect:       true,
      decapitate:       false,
      largeEditDialog:  false,
      boundaryLinks:    false,
      limitSelect:      true,
      pageSelect:       true
    };
    vm.tbv.selected = [];   // selected rows
    vm.tbv.limitOptions = [5, 10, 15, {       // rows per page
      label: 'All',
      value: function () {
        return vm.data ? vm.data.count : 0;
      }
    }];
    vm.tbv.query = {        // initial query
      order:  'name',
      limit:  5,
      page:   1
    };
    vm.tbv.columns = [{     // table columns mapping
 
    }];

  }

})();
