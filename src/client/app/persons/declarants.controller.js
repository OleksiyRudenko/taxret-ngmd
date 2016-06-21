(function(){

  angular
       .module('app.persons')
       .controller('DeclarantsController',  DeclarantsController);

  DeclarantsController.$inject = [
    '$scope',
    '$state',
    'dataLPSservice',
    'DataImportService',
    '$mdDialog',
    '$mdMedia',
    '$log',
  ];

  /**
   * @name DeclarantsController
   * @desc User List Controller for the TaxRet App
   * @param $scope
   * @param dataLPSservice
   * @param DataImportService
   * @param $mdDialog
   * @param $mdMedia
   * @param $log
   * @constructor
   */
  function DeclarantsController(
      $scope,
      $state,
      dataLPSservice,
      DataImportService,
      $mdDialog,
      $mdMedia,
      $log
      ) {
    /* jshint validthis: true */
    var vm = this;
    vm.dataLPSservice = dataLPSservice;
    vm.UItab = { Selected : $state.current.data['UItab.Selected'] }; // to use in tabbed context -- switch to initial tab, where selected item expected to be

    vm.declarants       = [ ];
    vm.selectDeclarant  = selectDeclarant;

    // Create mock data
    DataImportService.init().then(
      function() {
        // start observing; see src/final/query_builder_controller.js (basepath: @network.dataFetcher.service.js)
      }
    );

    // Load all registered persons
    dataLPSservice
          .declarants.loadAll()
          .then( function( declarants ) {
            vm.declarants    = [].concat(declarants);
            vm.selected = dataLPSservice.declarants.getCurrent();
          });

    // *********************************
    // Internal methods
    // *********************************
    
    /**
     * @name selectDeclarant
     * @desc Set current declarant
     * @param user
     */
    function selectDeclarant ( declarant ) {
      user = angular.isNumber(declarant) ? vm.declarants[declarant] : declarant;
      vm.currDeclarant = declarant;
      dataLPSservice.declarants.setCurrent(declarant);
      vm.UItab.Selected = 0;
      $state.go('declarants.editCurrent');
    }

  }

})();
