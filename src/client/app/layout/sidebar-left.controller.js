/* Created by Oleksiy Rudenko on 03/05/2016. */
(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('SidebarLeftController', SidebarLeftController);


  SidebarLeftController.$inject = [
    '$mdSidenav',
    '$mdBottomSheet',
    'userService',
    '$log',
    // '$route', 'routehelper'
  ];

  /**
   * @name SidebarLeftController
   * @desc Controller for the left sidenav
   * @param $mdSidenav
   * @param $mdBottomSheet
   * @param userService
   * @param $log
   * @constructor
   */
  function SidebarLeftController(
                        $mdSidenav,
                        $mdBottomSheet,
                        userService,
                        $log
                        // $route, routehelper
                      ) {
    /*jshint validthis: true */
    var vm = this;
    // var routes = routehelper.getRoutes();
    // vm.isCurrent = isCurrent;
    //vm.sidebarReady = function(){console.log('done animating menu')}; // example
    vm.userService = userService;
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
      vm.toggleSideNav    = toggleSideNav;
      vm.makeContact      = makeContact;
      // getNavRoutes();
    }

    /*
    function getNavRoutes() {
      vm.navRoutes = routes.filter(function(r) {
        return r.settings && r.settings.nav;
      }).sort(function(r1, r2) {
        return r1.settings.nav - r2.settings.nav;
      });
    } */

    /*
    function isCurrent(route) {
      if (!route.title || !$route.current || !$route.current.title) {
        return '';
      }
      var menuName = route.title;
      return $route.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
    }
    */

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

    // ================== bottom sheet : contact
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