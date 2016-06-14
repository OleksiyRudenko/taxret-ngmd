/**
 * Created by Rudenko on 13/06/2016.
 */
(function(){

  angular
    .module('app.personalIncome')
    .controller('PersonalIncomeController',  PersonalIncomeController);

  PersonalIncomeController.$inject = [
    '$scope',
    'PersonalIncomeService',
    '$log',
  ];

  /**
   * @name PersonalIncomeController
   * @desc Manage current declarant's personal income references
   * @param $scope to employ $watch
   * @param PersonalIncomeService
   * @param $log
   * @constructor
   * Employs https://github.com/daniel-nagy/md-data-table
   */
  function PersonalIncomeController(
    $scope,
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
      label: 'Всі',
      value: function () {
        return vm.data ? vm.data.count : 0;
      }
    }];
    // vm.tbv.bookmark -- current page, created by .$watch()
    // initial query
    vm.tbv.query = {
      order   : 'name',
      limit   : 5,
      page    : 1
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

    vm.getItems     = getItems;
    vm.addItem      = addItem;
    vm.deleteItem   = deleteItem;
    vm.removeFilter = removeFilter;
    
    // Internal methods

    function addItem(event) {
      $mdDialog.show({
        clickOutsideToClose : true,
        controller          : 'piAddItemController',
        controllerAs        : 'ctrl',
        focusOnOpen         : false,
        targetEvent         : event,
        templateUrl         : './app/workflowMain/personalIncome/dialog.AddItem.html',
      }).then(vm.getItems);
    };

    function getItems() {
      // vm.promise = PersonalIncomeService.personalIncomeReferences.get(vm.query, success).$promise; // ex desserts.get
      vm.promise = PersonalIncomeService.get(vm.query, success).$promise;
    }
    
    function success(items) {
      vm.items = items;
    }

    function deleteItem(event) {
      $mdDialog.show({
        clickOutsideToClose : true,
        controller          : 'piDeleteItemController',
        controllerAs        : 'ctrl',
        focusOnOpen         : false,
        targetEvent         : event,
        locals              : { items: vm.selected },                 // ex desserts: vm.selected
        templateUrl         : './app/workflowMain/personalIncome/dialog.DeleteItem.html',
      }).then(vm.getItems);
    };

    function removeFilter() {
      vm.filter.show = false;
      vm.query.filter = '';

      if(vm.filter.form.$dirty) {
        vm.filter.form.$setPristine();
      }
    };

  $scope.$watch(
    function(scope) {
      return vm.tbv.query.filter;           // instead of 'vm.tbv....' which is illegal in ControllerAs syntax
    }, function (newValue, oldValue) {
      if(!oldValue) {
        vm.tbv.bookmark = vm.tbv.query.page;
      }

      if(newValue !== oldValue) {
        vm.tbv.query.page = 1;
      }

      if(!newValue) {
        vm.tbv.query.page = vm.tbv.bookmark;
      }

      vm.getItems();
    });

  }

})();
