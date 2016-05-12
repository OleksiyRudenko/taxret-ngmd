(function(){
  'use strict';

  angular.module('app.core')
    .factory('enumPersonStatus', EnumPersonStatusService);
  EnumPersonStatusService.$inject=[
    '$q',
    // '$rootScope'
  ];

  /**
   * @name EnumPersonStatusService
   * @desc Provides static enumeration on Person Status
   * @param $q
   * @ param $rootScope
   * @returns enumeration
   * @constructor
   */
  function EnumPersonStatusService(
    $q
    // $rootScope
  ){
    var service = {
      // bits
      NPemp   :	0x0001,
      NPpeg	  :	0x0002,
      NPpeu	  :	0x0004,
      NPflx	  :	0x0008,
      RLADM	  :	0x0010,
      RLDEC	  :	0x0020,
      RLREP	  :	0x0040,
      RLres0	:	0x0080,
      LEcgn   :	0x0100,
      LEcu0	  :	0x0200,
      LEcu1	  :	0x0400,
      LEcu2	  :	0x0800,
      LEgvt	  :	0x1000,
      LEgvx	  :	0x2000,
      LEngo	  :	0x4000,
      LEres0	:	0x8000,
      // entity mask
      isNATPERS : 0x000F,
      isLEGENT  : 0xFF00,
      isLEcomm  : 0x0F00,
      // extension properties
      properties : {
        0x0001	: {	descr :	"ФО - найманий працівник",		},
        0x0002	: {	descr :	"ФОП на загальній системі",		},
        0x0004	: {	descr :	"ФОП на єдиному податку",		},
        0x0008	: {	descr :	"Самозайнята особа",		},
        0x0010	: {	descr :	"Адміністратор",		},
        0x0020	: {	descr :	"Декларант",		},
        0x0040	: {	descr :	"Представник",		},
        0x0080	: {	descr :	"--- Зарезервовано ---",		},
        0x0100	: {	descr :	"Підприємство (загальне оподаткування)",		},
        0x0200	: {	descr :	"Підприємство (ЄП1)",		},
        0x0400	: {	descr :	"Підприємство (ЄП2)",		},
        0x0800	: {	descr :	"Підприємство (ЄП3)",		},
        0x1000	: {	descr :	"Податкова установа",		},
        0x2000	: {	descr :	"Інший державний орган",		},
        0x4000	: {	descr :	"Недержавна некомерційна організація",		},
        0x8000	: {	descr :	"--- Зарезервовано ---",		},
      },
    };
    if (Object.freeze())
      Object.freeze(service);
    return service;
  }
})();
