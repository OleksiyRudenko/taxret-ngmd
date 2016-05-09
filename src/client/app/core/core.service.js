/**
 * Created by oleksiy.rudenko on 03/04/2016.
 *
 */
(function(){
    'use strict';

    angular.module('app.core')
        .factory('CoreService', CoreService);
    CoreService.$inject=['$q'];

    /**
     * @name CoreService
     * @desc Former persons service. Deprecated. To be removed.
     * @param $q
     * @returns null
     * @constructor
     */
    function CoreService($q) {

        return null;
    }

})();