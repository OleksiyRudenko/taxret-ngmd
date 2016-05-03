/* Created by Oleksiy Rudenko on 03/05/2016. */
(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('SidebarLeft', SidebarLeft);

  SidebarLeft.$inject = ['$route', 'routehelper'];

  function SidebarLeft($route, routehelper) {
    /*jshint validthis: true */
    var vm = this;
    // var routes = routehelper.getRoutes();
    // vm.isCurrent = isCurrent;
    //vm.sidebarReady = function(){console.log('done animating menu')}; // example

    activate();

    function activate() { getNavRoutes(); }

    function getNavRoutes() {
      vm.navRoutes = routes.filter(function(r) {
        return r.settings && r.settings.nav;
      }).sort(function(r1, r2) {
        return r1.settings.nav - r2.settings.nav;
      });
    }

    function isCurrent(route) {
      if (!route.title || !$route.current || !$route.current.title) {
        return '';
      }
      var menuName = route.title;
      return $route.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
    }

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

  }
})();