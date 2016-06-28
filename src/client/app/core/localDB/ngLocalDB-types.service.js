/**
 * Created by Oleksiy Rudenko on 21/06/2016.
 */

(function(){
  'use strict';

  angular.module('ngLocalDB')
    .factory('LocalDBtypes', LocalDBtypes);

  LocalDBtypes.$inject = [
    'LocalDBprocessors',
    '$q',
    '$log',
   ];

  function LocalDBtypes(LDBp, $g, $log) {
    var PID = {
      lfType  : 'INTEGER',
      min     : 1,
      max     : 2147483647,
      notNull : true,
      defaultValue  : null,

      onNull  : LDBp.incrementId,
      onBelow : LDBp.incrementId,
      onAbove : LDBp.errorAboveMaxValue,

      onSave  : undefined,
      onRetrieve  : undefined,
    };
    PID.onsave = [ PID.onNull, PID.onBelow, PID.onAbove ];

    var FID = {
      lfType  : 'INTEGER',
      min     : 1,
      max     : 2147483647,
      notNull : false,
      defaultValue  : null,

      onNull  : undefined,
      onBelow : LDBp.errorBelowMinValue,
      onAbove : LDBp.errorAboveMaxValue,

      onSave  : undefined,
      onRetrieve  : undefined,
    };
    FID.onsave = [ FID.onNull, FID.onBelow, FID.onAbove ];

    var INTEGER = {
      lfType  : 'INTEGER',
      min     : -2147483648,
      max     : 2147483647,
      notNull : true,
      defaultValue  : 0,

      onNull  : LDBp.errorNull,
      onBelow : LDBp.errorBelowMinValue,
      onAbove : LDBp.errorAboveMaxValue,

      onSave  : undefined,
      onRetrieve  : undefined,
    };
    INTEGER.onsave = [ FID.onNull, FID.onBelow, FID.onAbove ];

    // service
    var service = {
      PID     : PID,
      FID     : FID,
      INTEGER : INTEGER,
    };

    return service;


  }
})();