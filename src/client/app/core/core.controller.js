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
        vm.dataLPSservice = dataLPSservice;
        vm.UItab = { Selected : 0 }; // to use in tabbed context -- switch to initial tab, where selected item expected to be

        vm.currDeclarant    = vm.dataLPSservice.declarants.getCurrent(); // null
        vm.declarants       = [ ];
        vm.selectDeclarant  = selectDeclarant;

        // Load all registered persons

        vm.dataLPSservice
            .declarants.loadAll()
            .then( function( declarants ) {
                vm.declarants    = [].concat(declarants);
                // vm.currDeclarant = dataLPSservice.declarants.getCurrent();
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
              // TODO: DEV-PROD remove  timestamp on production
              templateUrl: './app/persons/view/dialog.ChooseAvatar.html?nd=' + Date.now(),
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
          // $scope.UserAvaGridController = PersonAvatarGridController;
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