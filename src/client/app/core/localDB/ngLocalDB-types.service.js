/**
 * Created by Oleksiy Rudenko on 21/06/2016.
 */

(function(){
  'use strict';

  angular.module('ngLocalDB')
    .factory('LocalDBtypes', LocalDBtypes);

  LocalDBtypes.$inject = [
   '$q',
   '$log',
   ];

  function LocalDBtypes($g, $log) {
    // provider
    var service = {
      PID     : {
        lfType  : 'INTEGER',
        min     : 1,
        max     : 2147483647,
        notNull : true,
        defaultValue  : null,
        onNull  : incrementId,

      },
      FID     : {

      },


    };

    return service;


  }
})();