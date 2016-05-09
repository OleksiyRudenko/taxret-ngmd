/**
 * Created by oleksiy.rudenko on 02/04/2016.
 */
(function(){

    angular
        .module('app.core')
        .controller('CoreController', CoreController);
    
    CoreController.$inject=[
        /*'$scope',
        'dataLPSservice',
        '$log',
        '$q',
        '$mdDialog', 
        '$mdMedia',
        '$mdSidenav', */
    ];

    /**
     * @name CoreController 
     * @desc Core Controller for the App
     * @ param $scope
     * @ param dataLPSservice
     * @ param $log
     * @ param $q
     * @ param $mdDialog
     * @ param $mdMedia
     * @ param $mdSidenav
     * @constructor
     */
    function CoreController(
                            /* $scope,
                            dataLPSservice
                            $log,
                            $q,
                            $mdDialog,
                            $mdMedia,
                            $mdSidenav */
                            ) {
        /* jshint validthis: true */
        var vm = this;

        /* activate();

        function activate() {
            vm.toggleSideNav    = toggleSideNav;
        }

        // *********************************
        // Internal methods
        // *********************************

        function toggleSideNav() {
            $mdSidenav('left').toggle();
        } */

    }

})();