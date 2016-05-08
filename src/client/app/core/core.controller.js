/**
 * Created by oleksiy.rudenko on 02/04/2016.
 */
(function(){

    angular
        .module('app.core')
        .controller('AppController', AppController);
    
    AppController.$inject=[
        '$scope',
        'dataLPSservice',
        '$log',
        '$q',
        '$mdDialog', '$mdMedia', 
    ];

    /**
     * @name AppController 
     * @desc Main Controller for the TaxRet App
     * @decs NB! Uses $watch
     * @param $scope
     * @param dataLPSservice
     * @param $log
     * @param $q
     * @param $mdDialog
     * @param $mdMedia
     * @constructor
     */
    function AppController(
                            $scope,
                            dataLPSservice,
                            $log,
                            $q,
                            $mdDialog,
                            $mdMedia
                            ) {
        /* jshint validthis: true */
        var vm = this;
        vm.dataLPSservice = dataLPSservice; // ?
        vm.UItab = { Selected : 0 }; // to use in tabbed context -- switch to initial tab, where selected item expected to be

        vm.currDeclarant    = vm.dataLPSservice.getDeclarantCurrent(); // null
        vm.users            = [ ];
        vm.selectUser       = selectUser;

        // Load all registered users

        vm.dataLPSservice
            .loadAllUsers()
            .then( function( users ) {
                vm.users    = [].concat(users);
                // vm.currDeclarant = dataLPSservice.getDeclarantCurrent();
            });

        // *********************************
        // Internal methods
        // *********************************

        /**
         * @name selectUser
         * @desc Set current user/declarant
         * @param user
         */
        function selectUser ( user ) {
            user = angular.isNumber(user) ? vm.users[user] : user;
            vm.currDeclarant = user;
            dataLPSservice.setDeclarantCurrent(user);
            vm.UItab.Selected = 0;
        }

        // ================= Pop-up dialog fn set
        vm.dialog = {
            status : '  ',
            customFullscreen : $mdMedia('xs') || $mdMedia('sm'),
            ChooseAvatarDialog : ChooseAvatarDialog,
        };

        /**
         * @name ChooseAvatarDialog
         * @desc Make Dialog to Choose Avatar on event and using currently chosen avatar id
         * @param ev
         * @param avatarid
         */
        function ChooseAvatarDialog(ev,avatarid) {
          var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && vm.dialog.customFullscreen;
          // alert("ChooseAvatarDialog(" + ev + ", " + avatarid + ")");
          // console.log("ChooseAvatarDialog( " + ev + ", " + avatarid + " );");
          // console.log("$mdDialog == ( " + $mdDialog + " ;");
          $mdDialog.show({
              controller: DialogController,
              templateUrl: './app/users/view/dialog.ChooseAvatar.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:false,
              fullscreen: useFullScreen,
              // locals : { importedValue: vm.value, }, // TODO: study this
              // preserveScope: true, // TODO: study this -- Does it allow using vm.* in template?
              // scope : $scope, // TODO: study this -- Will `scope: vm` be valid equivalent?
            })
            .then(function(answer) {
              vm.dialog.status = 'You said the information was "' + answer + '".';
            }, function() {
              vm.dialog.status = 'You cancelled the dialog.';
            });
          $scope.$watch(function() {
            return $mdMedia('xs') || $mdMedia('sm');
          }, function(wantsFullScreen) {
            vm.dialog.customFullscreen = (wantsFullScreen === true);
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

    }

})();