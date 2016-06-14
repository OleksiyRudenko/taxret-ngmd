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
    // data filter settings
    vm.tbv.filter = {
      options: {
        debounce: 500
      }
    };
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
      name    : "Роботодавець",
      orderBy : "employer"
    }, {
      name    : "Основне місце роботи",
      orderBy : "isMainJob"
    }, {
      name    : "Рік",
      orderBy : "year",
      numeric : true
    }, {
      name    : "з",
      orderBy : "monthBegin",
      numeric : true
    }, {
      name    : "до",
      orderBy : "monthEnd",
      numeric : true
    }, {
      name    : "Дохід",
      orderBy : "sumIncome",
      numeric : true
    }, {
      name    : "ЄСВ",
      orderBy : "sumUSI",
      numeric : true
    }, {
      name    : "ПДФО",
      orderBy : "sumTax",
      numeric : true
    }, {
      name    : "Додаткове благо",
      orderBy : "sumxIncome",
      numeric : true
    }, {
      name    : "ПДФО з додатокового блага",
      orderBy : "sumxTax",
      numeric : true
    }, {
      name    : "Військовий збір",
      orderBy : "sumMilTax",
      numeric : true
    }];

  }

})();
