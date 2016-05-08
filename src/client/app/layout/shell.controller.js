/**
 * Created by Oleksiy Rudenko on 08/05/2016.
 */
(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);


    ShellController.$inject = [
        '$mdSidenav',
    ];

    /**
     * @name SidebarLeftController
     * @desc Controller for the left sidenav
     * @param $mdSidenav
     * @constructor
     */
    function ShellController(
        $mdSidenav
    ) {
        /*jshint validthis: true */
        var vm = this;

        activate();

        function activate() {
            vm.toggleSideNav    = toggleSideNav;
        }

        // *********************************
        // Internal methods
        // *********************************

        function toggleSideNav() {
            $mdSidenav('left').toggle();
        }
    }

})();