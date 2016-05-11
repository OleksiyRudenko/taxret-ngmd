(function(){

  angular
    .module('app.persons')
    .controller('DeclarantsEditCurrentController',  DeclarantsEditCurrentController);

  DeclarantsEditCurrentController.$inject = [
    '$scope',
    '$state',
    'dataLPSservice',
    '$mdDialog',
    '$mdMedia',
    '$log',
  ];

  /**
   * @name DeclarantsEditCurrentController
   * @desc User List Controller for the TaxRet App
   * @param $scope
   * @param dataLPSservice
   * @param $mdDialog
   * @param $mdMedia
   * @param $log
   * @constructor
   */
  function DeclarantsEditCurrentController(
    $scope,
    $state,
    dataLPSservice,
    $mdDialog,
    $mdMedia,
    $log
  ) {
    /* jshint validthis: true */
    var vm = this;
    vm.dataLPSservice = dataLPSservice;

    // form related data
    vm.form = {
      fields : {},
      options : {},
      submitForm : FormSubmit,
      // submitFailed : FormSubmitFailed,
    };

    // choose avatar dialog properties
    vm.dialog = {
      status : '  ',
      customFullscreen : $mdMedia('xs') || $mdMedia('sm'),
      ChooseAvatarDialog : ChooseAvatarDialog,
    };

    initialize();


    // *********************************
    // Internal methods & properties
    // *********************************

    /**
     * @name initialize
     * @desc Initializes controller
     */
    function initialize() {
      ImportDeclarant();
      ImportOptions();
    }

    /**
     * @name ImportDeclarant
     * @desc Import current declarant data from dataLPSservice
     */
    function ImportDeclarant() {
      var declarant = dataLPSservice.declarants.getCurrent();
      // copy required data
      // TODO: 2READ: http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object
      for (var attr in declarant) {
        if (declarant.hasOwnProperty(attr)) vm.form.fields[attr] = declarant[attr]; // non-recursive cloning
      }
    }

    /**
     * @name ImportOptions
     * @desc Import enums from dataLPSservice as options
     */
    function ImportOptions() {
      // import from collection
      var enumSet = dataLPSservice.enums.AddressRegion;
      vm.form.options.AddressRegion = [];
      for (var attr in enumSet) {
        if (enumSet.hasOwnProperty(attr)) vm.form.options.AddressRegion.push( { value: attr, label: enumSet[attr] });
      }

      // import from true enum
      enumSet = dataLPSservice.enums.ePersonAptType.properties;
      vm.form.options.AptType = [];
      for (var attr in enumSet) {
        if (enumSet.hasOwnProperty(attr)) vm.form.options.AptType.push( { value: attr, label: enumSet[attr].descr });
      }
    }

    /**
     * @name FormSubmit
     * @desc Invoked on submit. Updates data via dataLPS service
     */
    function FormSubmit() {
      // check to make sure the form is completely valid
      if (!$scope.DeclarantCurrProfileEdit.$valid) {
        {
          alert('Дані не коректі!');
          return;
        }
      }
      alert('Дані прийнято.');
    }

    /**
     * @name FormSubmitFailed
     * @desc Invoked on submit failure. Shows message
     * @param error
     */
    /* function FormSubmitFailed(error) {
      flashr.now.info(error);
    } */

    // ================= Pop-up dialog fn set

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
