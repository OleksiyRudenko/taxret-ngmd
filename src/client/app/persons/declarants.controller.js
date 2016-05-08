(function(){

  angular
       .module('app.persons')
       .controller('DeclarantsController',  DeclarantsController);

  DeclarantsController.$inject = [
    '$scope',
    'dataLPSservice',
    '$mdDialog',
    '$mdMedia',
    '$log',
  ];

  /**
   * @name DeclarantsController
   * @desc User List Controller for the TaxRet App
   * @param $scope
   * @param dataLPSservice
   * @param $mdDialog
   * @param $mdMedia
   * @param $log
   * @constructor
   */
  function DeclarantsController(
      $scope,
      dataLPSservice,
      $mdDialog,
      $mdMedia,
      $log
      ) {
    /* jshint validthis: true */
    var vm = this;
    vm.dataLPSservice = dataLPSservice;
    vm.UItab = { Selected : 0 }; // to use in tabbed context -- switch to initial tab, where selected item expected to be

    vm.declarants       = [ ];
    vm.selectDeclarant  = selectDeclarant;

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
