(function(){
  'use strict';

  angular.module('ngLocalDB')
    .factory('LocalDBprocessors', LocalDBprocessors);

  LocalDBprocessors.$inject = [
    '$q',
    '$log',
  ];

  function LocalDBprocessors($g, $log) {
    // provider
    var service = {
      incrementId         : incrementId,
      
      errorNull           : errorNull,
      errorBelowMinValue  : errorBelowMinValue,
      errorAboveMaxValue  : errorAboveMaxValue,

    };

    return service;
    
    // ================== INTERNAL METHODS =========================
    function incrementId(value) {
      
    }
    
    function errorNull() {
      return { code : 1, msg : 'Null value' };
    }

    function errorBelowMinValue() {
      return { code : 2, msg : 'Value below min' };
    }
    
    function errorAboveMaxValue() {
      return { code : 3, msg : 'Value above max' };
    }


  }
})();