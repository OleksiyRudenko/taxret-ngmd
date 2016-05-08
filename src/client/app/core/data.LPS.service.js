(function(){
  'use strict';

  angular.module('app.users')
         .factory('userService', UserService);
  UserService.$inject=['$q', '$rootScope'];

  /**
   * @name Users DataService
   * @desc Uses embedded, hard-coded data model; acts asynchronously to simulate
   * @desc remote data service call(s).
   * @param $q
   * @param $rootScope
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q, $rootScope){
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

    var users = [
      new ePerson("Руденко",  "Олексій",  "Анатолійович", true,     ePersonStatusEnum.NATPERS,    "CH788108", "2694204152", "",
                  "Україна",  "м.Київ",   "", "02031",    "м.Київ", "ДПІ у Шевченківському р-ні",
                  "Кудрявський узвіз",    10, "", 1,      ePersonAptTypeEnum.APT,
                  "+380501112233",        "oleksiy.rudenko@gmailx.com",     'svg-2',  "Principal"
      ),
      new ePerson("Петренко", "Петро",    "Петрович",     true,     ePersonStatusEnum.NATPERS,    "CM888222", "2694203333", "",
                  "Україна",  "м.Київ",   "", "03033",    "м.Київ", "ДПІ у Голосіївському р-ні",
                  "вул.Васильківська",    30, "", 3,      ePersonAptTypeEnum.APT,
                  "+380503334455",        "petro.petrenko@gmailx.com",      'svg-1',  ""
      )
    ];
    var declarantCurrent = { user: users[0] };

    // Promise-based API
    var service = {
      loadAllUsers        : loadAllUsers,
      getDeclarantCurrent : getDeclarantCurrent,
      setDeclarantCurrent : setDeclarantCurrent,
      ePersonStatusEnum   : ePersonStatusEnum,
      ePersonAptTypeEnum  : ePersonAptTypeEnum,
    };

    return service;

    /**
     * @name loadAllUsers
     * @desc Loads all users
     * @returns {Array}
     */
    function loadAllUsers() {
      // Simulate async nature of real remote calls
      return $q.when(users);
    };

    /**
     * @name getDeclarantCurrent
     * @desc Returns current decalarant (user selected or default)
     * @returns {Object}
     */
    function getDeclarantCurrent() {
      return declarantCurrent.user;
    };
    /**
     * @name setDeclarantCurrent
     * @desc Sets user as current declarant
     * @param user
     */
    function setDeclarantCurrent(user) {
      declarantCurrent.user = user;
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
