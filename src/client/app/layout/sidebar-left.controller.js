/* Created by Oleksiy Rudenko on 03/05/2016. */
(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('SidebarLeftController', SidebarLeftController);


  SidebarLeftController.$inject = [
    '$mdSidenav',
    '$mdBottomSheet',
    'dataLPSservice',
    '$log',
    '$state',
  ];

  /**
   * @name SidebarLeftController
   * @desc Controller for the left sidenav
   * @param $mdSidenav
   * @param $mdBottomSheet
   * @param dataLPSservice
   * @param $log
   * @param $state            -- router state
   * @constructor
   */
  function SidebarLeftController(
                        $mdSidenav,
                        $mdBottomSheet,
                        dataLPSservice,
                        $log,
                        $state
                      ) {
    /*jshint validthis: true */
    var vm = this;
    vm.dataLPSservice = dataLPSservice;
    vm.routingState = $state;
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

    activate();

    function activate() {
      vm.makeContact      = makeContact;
    }


    // *********************************
    // Internal methods
    // *********************************


    // ================== bottom sheet : contact
    /**
     * @name makeContact
     * @desc Show the Contact view in the bottom sheet
     * @param selectedUser
     */
    function makeContact(selectedUser) {
      console.log('SidebarLeftController::makeContact() has been invoked');
      $mdBottomSheet.show({
        controllerAs  : "cp",
        // TODO: DEV-PROD remove  timestamp on production
        templateUrl   : './app/persons/view/contactSheet.html?nd=' + Date.now(), // used to get template cache refreshed
        controller    : [ '$mdBottomSheet', ContactSheetController],
        parent        : angular.element(document.getElementById('content'))
      }).then(function(clickedItem) {
        $log.debug( clickedItem.name + ' clicked!');
        // FIXME: ERR invokes error when other button clicked (e.g. Share button once again)
      });

      /**
       * @name ContactSheetController
       * @desc User ContactSheet controller
       * @param $mdBottomSheet
       */
      function ContactSheetController( $mdBottomSheet ) {
        var vm = this;
        vm.user = selectedUser;
        vm.actions = [
          { name: 'Phone'       , icon: 'phone'       , icon_url: './content/svg/phone.svg'},
          { name: 'Twitter'     , icon: 'twitter'     , icon_url: './content/svg/twitter.svg'},
          { name: 'Google+'     , icon: 'google_plus' , icon_url: './content/svg/google_plus.svg'},
          { name: 'Hangout'     , icon: 'hangouts'    , icon_url: './content/svg/hangouts.svg'},
          { name: 'Extra'       , icon: 'phone'       , icon_url: './content/svg/phone.svg'},
        ];
        vm.contactUser = function(action) {
          // The actually contact process has not been implemented...
          // so just hide the bottomSheet

          $mdBottomSheet.hide(action);
        };
      }
    }


  }
})();