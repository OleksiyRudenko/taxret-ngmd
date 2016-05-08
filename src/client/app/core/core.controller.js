/**
 * Created by oleksiy.rudenko on 02/04/2016.
 */
(function(){

    angular
        .module('app.core')
        .controller('AppController', AppController);
    
    AppController.$inject=[
        /*'$scope',
        'dataLPSservice',
        '$log',
        '$q',
        '$mdDialog', 
        '$mdMedia', */
    ];

    /**
     * @name AppController 
     * @desc Core Controller for the App
     * @ param $scope
     * @ param dataLPSservice
     * @ param $log
     * @ param $q
     * @ param $mdDialog
     * @ param $mdMedia
     * @constructor
     */
    function AppController(
                            /* $scope,
                            dataLPSservice
                            $log,
                            $q,
                            $mdDialog,
                            $mdMedia */
                            ) {
        /* jshint validthis: true */
        var vm = this;
        

    }

})();