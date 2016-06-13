(function(){
  'use strict';

  angular.module('app.core')
    .factory('enumAptType', EnumAptTypeService);
  EnumAptTypeService.$inject=[
    '$q',
    'enumBase',
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
      $q,
      enumBase
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
    enumBase._constructor.apply(service);
    if (Object.freeze())
      Object.freeze(service);
    return service;
  }
})();
