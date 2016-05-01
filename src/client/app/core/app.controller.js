/**
 * Created by oleksiy.rudenko on 02/04/2016.
 */
(function(){

    angular
        .module('app')
        .controller('AppController', AppController);
    
    AppController.$inject=[ // 'appService',
        '$scope', 'userService', '$mdSidenav', 
        '$mdBottomSheet', '$log', '$q', 
        '$mdDialog', '$mdMedia', 
    ];

    /**
     * @name AppController 
     * @desc Main Controller for the TaxRet App
     * @decs NB! Uses $watch
     * @param $scope
     * @param userService
     * @param $mdSidenav
     * @param $mdBottomSheet
     * @param $log
     * @param $q
     * @param $mdDialog
     * @param $mdMedia
     * @constructor
     */
    function AppController( // appService,
                            $scope,
                            userService, $mdSidenav, $mdBottomSheet, $log, $q,
                            $mdDialog, $mdMedia) {
        /* jshint validthis: true */
        var vm = this;
        vm.userService = userService; // ?
        $scope.selectedTab = 0; // to use in tabbed context -- switch to initial tab, where selected item expected to be

        vm.states     = [
            {
                sref    :   'payroll',
                icon    :   '',
                title   :   'Доходи ФО',
            },
            {
                sref    :   'transport',
                icon    :   '',
                title   :   'Транспортні засоби',
            },
            {
                sref    :   'realestate',
                icon    :   '',
                title   :   'Нерухомість',
            },
            {
                sref    :   'funds',
                icon    :   '',
                title   :   'Фондові активи',
            },
            {
                sref    :   'foreignfee',
                icon    :   '',
                title   :   'Зарубіжні доходи',
            },
            {
                sref    :   'entrepreneur',
                icon    :   '',
                title   :   'Доходи ФОП',
            },
            {
                sref    :   'expenseexempt',
                icon    :   '',
                title   :   'Пільгові витрати',
                hr      :   true,
            },
            {
                sref    :   'docUserManual',
                icon    :   '',
                title   :   'Керівництво користувача',
            },
            {
                sref    :   'docAbout',
                icon    :   '',
                title   :   'Про проект',
                hr      :   true,
            },
            {
                sref    :   'docDev',
                icon    :   '',
                title   :   'Розробникам',
            }
        ];

        vm.currDeclarant    = vm.userService.getDeclarantCurrent(); // null
        vm.users            = [ ];
        vm.selectUser       = selectUser;
        vm.toggleSideNav    = toggleSideNav;
        vm.makeContact      = makeContact;

        // Load all registered users

        vm.userService
            .loadAllUsers()
            .then( function( users ) {
                vm.users    = [].concat(users);
                // vm.currDeclarant = userService.getDeclarantCurrent();
            });

        // *********************************
        // Internal methods
        // *********************************

        /**
         * @name toggleSideNav
         * @desc Hide or Show the 'left' sideNav area
         */
        function toggleSideNav() {
            $mdSidenav('left').toggle();
        }

        /**
         * @name selectUser
         * @desc Set current user/declarant
         * @param user
         */
        function selectUser ( user ) {
            user = angular.isNumber(user) ? $scope.users[user] : user;
            vm.currDeclarant = user;
            userService.setDeclarantCurrent(user);
            $scope.selectedTab = 0;
        }

        // ================= Pop-up dialog fn set
        $scope.status = '  ';
        $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
        $scope.ChooseAvatarDialog =   ChooseAvatarDialog;

        /**
         * @name ChooseAvatarDialog
         * @desc Make Dialog to Choose Avatar on event and using currently chosen avatar id
         * @param ev
         * @param avatarid
         */
        function ChooseAvatarDialog(ev,avatarid) {
          var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
          // alert("ChooseAvatarDialog(" + ev + ", " + avatarid + ")");
          // console.log("ChooseAvatarDialog( " + ev + ", " + avatarid + " );");
          // console.log("$mdDialog == ( " + $mdDialog + " ;");
          $mdDialog.show({
              controller: DialogController,
              templateUrl: './app/users/view/dialog.app.ChooseAvatar.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:false,
              fullscreen: useFullScreen
            })
            .then(function(answer) {
              $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
              $scope.status = 'You cancelled the dialog.';
            });
          $scope.$watch(function() {
            return $mdMedia('xs') || $mdMedia('sm');
          }, function(wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
          });
        };

        /**
         * @name DialogController
         * @desc Dialog Controller
         * @param $scope
         * @param $mdDialog
         */
        function DialogController($scope, $mdDialog) {
          // $scope.UserAvaGridController = UserAvaGridController;
          $scope.hide = function() {
            $mdDialog.hide();
          };
          $scope.cancel = function() {
            $mdDialog.cancel();
          };
          $scope.answer = function(answer) {
            $mdDialog.hide(answer);
          };
        }

        // ================== AvaGrid


        /**
         * @name makeContact
         * @desc Show the Contact view in the bottom sheet
         * @param selectedUser
         */
        function makeContact(selectedUser) {
            console.log('AppController::makeContact() has been invoked');
            $mdBottomSheet.show({
                controllerAs  : "cp",
                templateUrl   : './app/users/view/contactSheet.html',
                controller    : [ '$mdBottomSheet', ContactSheetController],
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
                    { name: 'Phone'       , icon: 'phone'       , icon_url: './content/svg/phone.svg'},
                    { name: 'Twitter'     , icon: 'twitter'     , icon_url: './content/svg/twitter.svg'},
                    { name: 'Google+'     , icon: 'google_plus' , icon_url: './content/svg/google_plus.svg'},
                    { name: 'Hangout'     , icon: 'hangouts'    , icon_url: './content/svg/hangouts.svg'}
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