(function(){

  angular
       .module('users')
       .controller('UserController',  UserController);

  UserController.$inject = ['userService', '$mdSidenav', '$mdBottomSheet', '$log', '$q', ];

  /**
   * @name UserController
   * @desc User List Controller for the TaxRet App
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
     * @name toggleUsersList
     * @desc Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
      $mdSidenav('left').toggle();
    }

    /**
     * @name selectUser
     * @desc Select the current avatars
     * @param user
     */
    function selectUser( user ) {
      vm.currDeclarant = angular.isNumber(user) ? $scope.users[user] : user;
    }

    /**
     * @name makeContact
     * @desc Show the Contact view in the bottom sheet
     * @param selectedUser
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
         * @name ContactSheetController
         * @desc User ContactSheet controller
         * @param $mdBottomSheet
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
