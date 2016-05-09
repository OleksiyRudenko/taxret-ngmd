/* LPS = Local Persistent Storage */
(function(){
  'use strict';

  angular.module('app.core')
         .factory('dataLPSservice', DataLPSservice);
  DataLPSservice.$inject=['$q', '$rootScope'];

  /**
   * @name DataLPSservice
   * @desc Uses Local Persistent Storage (LPS) based on IndexedDB; acts asynchronously
   * @param $q
   * @param $rootScope
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function DataLPSservice($q, $rootScope){
    var ePersonStatusEnum = {
      TAXAUTH   : 1,
      LEGALP    : 2,
      NATPERS   : 3,
      PENTREP   : 4,
      FREELANCE : 5,
      properties : {
        1 : { descr : "Податковий орган",  isnatpers : false, },
        2 : { descr : "Юридична особа",    isnatpers : false, },
        3 : { descr : "Фізична особа",     isnatpers : true,  },
        4 : { descr : "ФО - підприємець",  isnatpers : true,  },
        5 : { descr : "Самозайнята особа", isnatpers : true,  },
      },
    };
    if (Object.freeze())
      Object.freeze(ePersonStatusEnum);

    var ePersonAptTypeEnum = {
      APT     : 1,
      OFFICE  : 2,
      properties : {
        1 : { descr : "кв.", },
        2 : { descr : "оф.", },
      },
    };
    if (Object.freeze())
      Object.freeze(ePersonAptTypeEnum);

    var AddressRegionEnum = {
      0: "?",
      1: "Київ",
      2: "Севастополь",
      3: "АРК",
      4: "Вінницька обл.",
      5: "Волинська обл.",
      6: "Дніпропетровська обл.",
      7: "Донецька обл.",
      8: "Житомирська обл.",
      9: "Закарпатська обл.",
      10: "Запорізька обл.",
      11: "Івано-Франківська обл.",
      12: "Київська обл.",
      13: "Кіровоградська обл.",
      14: "Луганська обл.",
      15: "Львівська обл.",
      16: "Миколаївська обл.",
      17: "Одеська обл.",
      18: "Полтавська обл.",
      19: "Рівненська обл.",
      20: "Сумська обл.",
      21: "Тернопільська обл.",
      22: "Харківська обл.",
      23: "Херсонська обл.",
      24: "Хмельницька обл.",
      25: "Черкаська обл.",
      26: "Чернівецька обл.",
      27: "Чернігівська обл.",
    };
    if (Object.freeze())
      Object.freeze(AddressRegionEnum);

    var persons = [
      new ePerson("Руденко",  "Олексій",  "Анатолійович", true,     ePersonStatusEnum.NATPERS,    "CH788108", "2694204152", "",
                  "Україна",  1,          "", "02031",    "м.Київ", "ДПІ у Шевченківському р-ні",
                  "Кудрявський узвіз",    10, "", 1,      ePersonAptTypeEnum.APT,
                  "+380501112233",        "oleksiy.rudenko@gmailx.com",     'svg-2',  "Principal"
      ),
      new ePerson("Петренко", "Петро",    "Петрович",     true,     ePersonStatusEnum.NATPERS,    "CM888222", "2694203333", "",
                  "Україна",  1,          "", "03033",    "м.Київ", "ДПІ у Голосіївському р-ні",
                  "вул.Васильківська",    30, "", 3,      ePersonAptTypeEnum.APT,
                  "+380503334455",        "petro.petrenko@gmailx.com",      'svg-1',  ""
      )
    ];

    // session lifespan private vars
    var session = {
      declarantCurrent: persons[0],
    };

    // Promise-based API
    // Service interface
    var service = {
      enums : {
        ePersonStatus     : ePersonStatusEnum,
        ePersonAptType    : ePersonAptTypeEnum,
        AddressRegion     : AddressRegionEnum,
      },
      declarants : {
        loadAll     : declarantsLoadAll,
        getCurrent  : declarantsGetCurrent,
        setCurrent  : declarantsSetCurrent,
      },
    };

    return service;

    /**
     * @name declarantsLoadAll
     * @desc Loads all persons
     * @returns {Array}
     */
    function declarantsLoadAll() {
      // Simulate async nature of real remote calls
      return $q.when(persons);
    };

    /**
     * @name declarantsGetCurrent
     * @desc Returns current decalarant (declarantCurrent selected or default)
     * @returns {Object}
     */
    function declarantsGetCurrent() {
      return session.declarantCurrent;
    };
    /**
     * @name declarantsSetCurrent
     * @desc Sets declarantCurrent as current declarant
     * @param entity
     */
    function declarantsSetCurrent(entity) {
      session.declarantCurrent = entity;
      $rootScope.$applyAsync();
    };

  }

  // ==================================================================================================
  /**
   * @name ePerson
   * @desc Person Entity object constructor
   * @param *
   * @returns {Object}
   * @constructor
   */
  function ePerson(nameLast,    // for legal entities: principal name
                   nameFirst,   // for legal entities: abbreviated principal name
                   namePat,     // for legal entities: incorporation form (Ltd, Inc. etc)
                   isUAresident,
                   status,
                   passportNr,
                   idUAtaxCode,
                   idCodeSubst,
                   addrCountry,
                   addrRegion,
                   addrDistrict,
                   addrPO,
                   addrCity,
                   addrCityDistrict,
                   addrStreet,
                   addrBuilding,
                   addrSubBuilding,
                   addrApt,
                   addrAptType,
                   telNr,
                   email,
                   avatarid,
                   comment
    ) {
    this.id           = 0;
    this.isActive     = true;

    this.nameLast	    =	nameLast;
    this.nameFirst	  =	nameFirst;
    this.namePat	    =	namePat;
    this.isUAresident	=	isUAresident;
    this.status	      =	status;
    this.passportNr	  =	passportNr;
    this.idUAtaxCode	=	idUAtaxCode;
    this.idCodeSubst	=	idCodeSubst;
    this.addrCountry	=	addrCountry;
    this.addrRegion	  =	addrRegion;
    this.addrDistrict	=	addrDistrict;
    this.addrPO	      =	addrPO;
    this.addrCity	    =	addrCity;
    this.addrCityDistrict	=	addrCityDistrict;
    this.addrStreet	  =	addrStreet;
    this.addrBuilding	=	addrBuilding;
    this.addrSubBuilding	=	addrSubBuilding;
    this.addrApt	    =	addrApt;
    this.addrAptType	=	addrAptType;
    this.telNr	      =	telNr;
    this.email	      =	email;
    this.avatarid     = avatarid;
    this.comment      = comment;

    this.nameFull = function() {
      return this.nameLast + ' ' + this.nameFirst + ' ' + this.namePat;
    };
    this.nameShort = function() {
      return this.nameFirst + ' ' + this.nameLast;
    };
    this.nameFirstInitial = function() {
      return this.nameFirst.charAt(0);
    };
    this.namePatInitial = function() {
      return this.namePat.charAt(0);
    };
    this.nameInitials = function() {
      return this.nameFirstInitial() + '.' + this.namePatInitial() +'.';
    };
    this.nameLastInitials = function() {
      return this.nameLast + ' ' + this.nameInitials();
    };

    this.nameFullCorp = function() {
      return this.nameLast + ', ' + this.namePat;
    };
    this.nameShortCorp = function() {
      return this.nameFirst + ', ' + this.namePat;
    };
  }

})();
