(function(){
  'use strict';

  angular.module('app.core')
    .factory('enumAptType', EnumAptTypeService);
  EnumAptTypeService.$inject=[
    '$q', 
    // '$rootScope'
  ];

  /**
   * @name EnumAptTypeService
   * @desc Provides static enumeration on apartment type
   * @param $q
   * @ param $rootScope
   * @returns enumeration
   * @constructor
   */
  function EnumAptTypeService(
      $q 
      // $rootScope
  ){
    var service = {
      APT     : 1,
      OFFICE  : 2,
      properties : {
        1 : { descr : "кв.", },
        2 : { descr : "оф.", },
      },
    };
    if (Object.freeze())
      Object.freeze(service);
    return service;
  }
})();
