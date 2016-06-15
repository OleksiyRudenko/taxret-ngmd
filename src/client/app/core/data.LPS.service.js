/* LPS = Local Persistent Storage */
(function(){
  'use strict';

  angular.module('app.core')
         .factory('dataLPSservice', DataLPSservice);
  DataLPSservice.$inject=[
    '$q',
    '$rootScope',
    'lovefield',
    'enumPersonStatus',
    'enumCountryUARegionService',
    'enumAptType',
    '$log',
  ];

  /**
   * @name DataLPSservice
   * @desc Uses Local Persistent Storage (LPS) based on IndexedDB; acts asynchronously
   * @param $q
   * @param $rootScope
   * @param lovefield
   * @param enumPersonStatus
   * @param enumCountryUARegionService
   * @param enumAptType
   * @param $log
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function DataLPSservice(
      $q, 
      $rootScope,
      lovefield,
      enumPersonStatus,
      enumCountryUARegionService,
      enumAptType,
      $log
  ){
    var persons = [
      new ePerson("Руденко",  "Олексій",  "Анатолійович", true,     enumPersonStatus.NPemp,    "СН788108", "2694204152", "",
                  "Україна",  1,          "", "02031",    "м.Київ", "",
                  "Кудрявський узвіз",    10, "", 1,      enumAptType.APT,     "ДПІ у Шевченківському р-ні",
                  "+380501112233",        "oleksiy.rudenko@gmailx.com",     'svg-2',  "Principal"
      ),
      new ePerson("Петренко", "Петро",    "Петрович",     true,     enumPersonStatus.NPemp,    "СМ888222", "2694203333", "",
                  "Україна",  1,          "", "03033",    "м.Київ", "",
                  "вул.Васильківська",    30, "", 3,      enumAptType.APT,     "ДПІ у Голосіївському р-ні",
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
        ePersonStatus     : enumPersonStatus,
        ePersonAptType    : enumAptType,
        AddressRegion     : enumCountryUARegionService,
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

      lovefield.getDB().then(function (db) {
        var ePerson = db.getSchema().table('ePerson');

        $log.debug('-- With love from dataLPSservice');
        db.select()
          .from(ePerson)
          .where(lf.op.and(
            ePerson.isNatPers.eq(true),
            ePerson.isDeclarant.eq(true)))
          .exec()
          .then(function (results) {
            $log.debug("--- SELECT * FROM ePerson = " + angular.toJson(results,true));
          });
      });

      return $q.resolve(persons);
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
  function ePerson(
                   nameLast,    // for legal entities: principal name
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
                   taxAuthName,
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
    this.taxAuthName  = taxAuthName;
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
      return (((typeof this.nameFirst!=="undefined") && this.nameFirst.length>0) ? this.nameFirst.charAt(0) : '');
    };
    this.namePatInitial = function() {
      return (((typeof this.namePat!=="undefined") && this.namePat.length>0) ? this.namePat.charAt(0) : '');
    };
    this.nameInitials = function() {
      return ((this.nameFirstInitial().length>0)
          ? (this.nameFirstInitial() + '.')
          : '' ) +
        ((this.namePatInitial().length>0)
          ? this.namePatInitial() + '.'
          : '' );
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
