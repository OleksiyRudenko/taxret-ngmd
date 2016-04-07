/**
 * Created by oleksiy.rudenko on 02/04/2016.
 */
(function(){

    angular
        .module('app')
        .controller('AppController', [
            // 'appService',
            'userService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
            AppController
        ]);

    /**
     * Main Controller for the TaxRet App
     * @param $scope
     * @param userService
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function AppController( // appService,
                            userService, $mdSidenav, $mdBottomSheet, $log) {
        var self = this;

        self.states     = [
            {
                sref    :   'payroll',
                icon    :   '',
                title   :   'Доходи ФО'
            },
            {
                sref    :   'transport',
                icon    :   '',
                title   :   'Транспортні засоби'
            },
            {
                sref    :   'realestate',
                icon    :   '',
                title   :   'Нерухомість'
            },
            {
                sref    :   'funds',
                icon    :   '',
                title   :   'Фондові активи'
            },
            {
                sref    :   'foreignfee',
                icon    :   '',
                title   :   'Зарубіжні доходи'
            },
            {
                sref    :   'entrepreneur',
                icon    :   '',
                title   :   'Доходи ФОП'
            },
            {
                sref    :   'expenseexempt',
                icon    :   '',
                title   :   'Пільгові витрати'
            }
        ];

        self.currDeclarant     = userService.getDeclarantCurrent(); // null
        self.users        = [ ];
        self.selectUser   = selectUser;
        self.toggleSideNav   = toggleSideNav;
        self.makeContact  = makeContact;

        // Load all registered users

        userService
            .loadAllUsers()
            .then( function( users ) {
                self.users    = [].concat(users);
                // self.currDeclarant = userService.getDeclarantCurrent();
            });

        // *********************************
        // Internal methods
        // *********************************

        /**
         * Hide or Show the 'left' sideNav area
         */
        function toggleSideNav() {
            $mdSidenav('left').toggle();
        }

        /**
         * Select the current avatars
         * @param menuId
         */
        function selectUser ( user ) {
            user = angular.isNumber(user) ? $scope.users[user] : user;
            self.currDeclarant = user;
            userService.setDeclarantCurrent(user);
        }

        /**
         * Show the Contact view in the bottom sheet
         */
        function makeContact(selectedUser) {

            $mdBottomSheet.show({
                controllerAs  : "cp",
                templateUrl   : './src/users/view/contactSheet.html',
                controller    : [ '$mdBottomSheet', ContactSheetController],
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