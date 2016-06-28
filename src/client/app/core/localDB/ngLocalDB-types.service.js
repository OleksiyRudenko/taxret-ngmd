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
    INTEGER.onsave = [ INTEGER.onNull, INTEGER.onBelow, INTEGER.onAbove ];

    var BIGINT = {
      lfType  : 'NUMBER',
      min     : Number.MIN_SAFE_INTEGER,
      max     : Number.MAX_SAFE_INTEGER,
      notNull : true,
      defaultValue  : 0,

      onNull  : LDBp.errorNull,
      onBelow : LDBp.errorBelowMinValue,
      onAbove : LDBp.errorAboveMaxValue,

      onSave  : undefined,
      onRetrieve  : undefined,
    };
    BIGINT.onsave = [ BIGINT.onNull, BIGINT.onBelow, BIGINT.onAbove ];

    var NUMBER = {
      lfType  : 'NUMBER',
      min     : Number.MIN_VALUE,
      max     : Number.MAX_VALUE,
      notNull : true,
      defaultValue  : 0,

      onNull  : LDBp.errorNull,
      onBelow : LDBp.errorBelowMinValue,
      onAbove : LDBp.errorAboveMaxValue,

      onSave  : undefined,
      onRetrieve  : undefined,
    };
    NUMBER.onsave = [ NUMBER.onNull, NUMBER.onBelow, NUMBER.onAbove ];

    var DECIMAL = {
      lfType  : 'NUMBER',
      min     : Number.MIN_SAFE_INTEGER,
      max     : Number.MAX_SAFE_INTEGER,
      notNull : true,
      defaultValue  : 0,
      precision     : 0,

      onNull  : LDBp.errorNull,
      onBelow : LDBp.errorBelowMinValue,
      onAbove : LDBp.errorAboveMaxValue,

      onSave  : undefined,
      onRetrieve  : undefined,
    };
    DECIMAL.onsave = [ DECIMAL.onNull, DECIMAL.onBelow, DECIMAL.onAbove ];

    // service
    var service = {
      PID     : PID,
      FID     : FID,
      INTEGER : INTEGER,
      INT32   : INTEGER,
      INT     : INTEGER,
      BIGINT  : BIGINT,
      NUMBER  : NUMBER,
      DECIMAL : DECIMAL,
    };

    return service;


  }
})();