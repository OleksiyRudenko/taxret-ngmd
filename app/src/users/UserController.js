(function(){

  angular
       .module('users')
       .controller('UserController',  UserController);

  UserController.$inject = ['userService', '$mdSidenav', '$mdBottomSheet', '$log', '$q', ];

  /**
   * User List Controller for the TaxRet App
   * @param userService
   * @param $mdSidenav
   * @param $mdBottomSheet
   * @param $log
   * @constructor
   */
  function UserController( userService, $mdSidenav, $mdBottomSheet, $log) {
    /* jshint validthis: true */
    var vm = this;

    vm.selected     = null;
    vm.users        = [ ];
    vm.selectUser   = selectUser;
    vm.toggleList   = toggleUsersList;
    vm.makeContact  = makeContact;

    // Load all registered users

    userService
          .loadAllUsers()
          .then( function( users ) {
            vm.users    = [].concat(users);
            vm.selected = userService.getDeclarantCurrent();
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
      $mdSidenav('left').toggle();
    }

      /**
       * Select the current avatars
       * @param user
       */
    function selectUser ( user ) {
      vm.currDeclarant = angular.isNumber(user) ? $scope.users[user] : user;
    }

    /**
     * Show the Contact view in the bottom sheet
     */
    function makeContact(selectedUser) {

        $mdBottomSheet.show({
          controllerAs  : "cp",
          templateUrl   : './src/users/view/contactSheet.html',
          controller    : [ '$mdBottomSheet', ContactSheetController ],
          parent        : angular.element(document.getElementById('content'))
        }).then(function(clickedItem) {
          $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * User ContactSheet controller
         */
        function ContactSheetController( $mdBottomSheet ) {
          this.user = selectedUser;
          this.actions = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.contactUser = function(action) {
            // The actually contact process has not been implemented...
            // so just hide the bottomSheet

            $mdBottomSheet.hide(action);
          };
        }
    }

  }

})();
