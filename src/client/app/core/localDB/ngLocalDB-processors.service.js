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


    };

    return service;


  }
})();