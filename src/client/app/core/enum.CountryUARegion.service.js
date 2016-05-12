(function(){
  'use strict';

  angular.module('app.core')
    .factory('enumCountryUARegionService', EnumCountryUARegionService);
  EnumCountryUARegionService.$inject=[
    '$q',
    // '$rootScope'
  ];

  /**
   * @name EnumCountryUARegionService
   * @desc Provides static enumeration of UA Regions
   * @param $q
   * @ param $rootScope
   * @returns enumeration
   * @constructor
   */
  function EnumCountryUARegionService(
    $q
    // $rootScope
  ){
    var service = {
      1	:	1	,
      2	:	2	,
      3	:	3	,
      4	:	4	,
      5	:	5	,
      6	:	6	,
      7	:	7	,
      8	:	8	,
      9	:	9	,
      10	:	10	,
      11	:	11	,
      12	:	12	,
      13	:	13	,
      14	:	14	,
      15	:	15	,
      16	:	16	,
      17	:	17	,
      18	:	18	,
      19	:	19	,
      20	:	20	,
      21	:	21	,
      22	:	22	,
      23	:	23	,
      24	:	24	,
      25	:	25	,
      26	:	26	,
      27	:	27	,
      // extension properties
      properties : {
        // 0: "?", 
        1: { descr: "Київ", },
        2: { descr: "Севастополь", },
        3: { descr: "АРК", },
        4: { descr: "Вінницька обл.", },
        5: { descr: "Волинська обл.", },
        6: { descr: "Дніпропетровська обл.", },
        7: { descr: "Донецька обл.", },
        8: { descr: "Житомирська обл.", },
        9: { descr: "Закарпатська обл.", },
        10: { descr: "Запорізька обл.", },
        11: { descr: "Івано-Франківська обл.", },
        12: { descr: "Київська обл.", },
        13: { descr: "Кіровоградська обл.", },
        14: { descr: "Луганська обл.", },
        15: { descr: "Львівська обл.", },
        16: { descr: "Миколаївська обл.", },
        17: { descr: "Одеська обл.", },
        18: { descr: "Полтавська обл.", },
        19: { descr: "Рівненська обл.", },
        20: { descr: "Сумська обл.", },
        21: { descr: "Тернопільська обл.", },
        22: { descr: "Харківська обл.", },
        23: { descr: "Херсонська обл.", },
        24: { descr: "Хмельницька обл.", },
        25: { descr: "Черкаська обл.", },
        26: { descr: "Чернівецька обл.", },
        27: { descr: "Чернігівська обл.", },
      },
    };
    if (Object.freeze())
      Object.freeze(service);
    return service;
  }
})();