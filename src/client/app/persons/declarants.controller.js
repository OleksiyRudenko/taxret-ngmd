(function(){

  angular
       .module('app.persons')
       .controller('DeclarantsController',  DeclarantsController);

  DeclarantsController.$inject = ['dataLPSservice', '$mdSidenav', '$mdBottomSheet', '$log', '$q', ];

  /**
   * @name DeclarantsController
   * @desc User List Controller for the TaxRet App
   * @param dataLPSservice
   * @param $mdSidenav
   * @param $mdBottomSheet
   * @param $log
   * @constructor
   */
  function DeclarantsController(dataLPSservice, $mdSidenav, $mdBottomSheet, $log) {
    /* jshint validthis: true */
    var vm = this;
    vm.dataLPSservice = dataLPSservice;
    vm.UItab = { Selected : 0 }; // to use in tabbed context -- switch to initial tab, where selected item expected to be

    vm.selected         = null;
    vm.declarants       = [ ];
    vm.selectDeclarant  = selectDeclarant;
    vm.toggleList       = toggleUsersList;
    vm.makeContact      = makeContact;

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
     * @name toggleUsersList
     * @desc Hide or Show the 'left' sideNav area
     */
    /*
    function toggleUsersList() {
      $mdSidenav('left').toggle();
    }*/

    /**
     * @name selectUser
     * @desc Select the current avatars
     * @param user
     */
    /*
    function selectDeclarant( declarantCurrent ) {
      vm.currDeclarant = angular.isNumber(declarantCurrent) ? $scope.persons[declarantCurrent] : declarantCurrent;
    } */

    // The method below not in use! Instead AppController::makeContact() in use
    /**
     * @name makeContact
     * @desc Show the Contact view in the bottom sheet
     * @param selectedUser
     */
    /*
    function makeContact(selectedUser) {
        console.log('DeclarantsController::makeContact() has been invoked');
        $mdBottomSheet.show({
          controllerAs  : "cp",
          // TODO: DEV remove  timestamp on production
          templateUrl   : './app/persons/view/contactSheet.html?nd=' + Date.now(),
          controller    : [ '$mdBottomSheet', ContactSheetController ],
          parent        : angular.element(document.getElementById('content'))
        }).then(function(clickedItem) {
          $log.debug( clickedItem.name + ' clicked!');
          // TODO: ERR invokes error when other button clicked (e.g. Share button once again)
        });

        /**
         * @name ContactSheetController
         * @desc User ContactSheet controller
         * @param $mdBottomSheet
         /
        function ContactSheetController( $mdBottomSheet ) {
          var vm = this;
          vm.declarantCurrent = selectedUser;
          vm.actions = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'content/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'content/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'content/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'content/svg/hangouts.svg'}
          ];
          vm.contactUser = function(action) {
            // The actually contact process has not been implemented...
            // so just hide the bottomSheet

            $mdBottomSheet.hide(action);
          };
        }
    } */

  }

})();
