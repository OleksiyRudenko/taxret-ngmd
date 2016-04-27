(function(){
  'use strict';

  angular.module('users')
         .factory('userService', UserService);
  UserService.$inject=['$q', '$rootScope'];

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
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
        1 : { descr : "Податковий орган", isnatpers : false, },
        2 : { descr : "Юридична особа",   isnatpers : false, },
        3 : { descr : "Фізична особа",    isnatpers : true, },
        4 : { descr : "ФО - підприємець", isnatpers : true, },
        5 : { descr : "Самозайнята особа", isnatpers : true, },
      },
    };
    if (Object.freeze())
      Object.freeze(ePersonStatusEnum);
    var ePersonAptTypeEnum = {
      APT     : 1,
      OFFICE  : 2,
      properties : {
        1 : { descr : "кв.", },
        2 : { descr : "оф.",   },
      },
    };
    if (Object.freeze())
      Object.freeze(ePersonAptTypeEnum);

    var users = [
      /* {
        nameLast: 'Lugo',
        nameFirst: 'Lia',
        namePat: 'Petro',
        avatarid: 'svg-1',
        comment: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },
      {
        nameLast: 'Петренко',
        nameFirst: 'Ірина',
        namePat: 'Віталіївна',
        avatarid: 'svg-2',
        comment: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
      },
      {
        nameLast: 'Delosreyes',
        nameFirst:   'Gener',
        avatarid: 'svg-3',
        comment: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
      },
      {
        nameLast:  'Ray',
        nameFirst:  'Lawrence',
        avatarid: 'svg-4',
        comment: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
      },
      {
        nameLast: 'Urbina',
        nameFirst: 'Ernesto',
        avatarid: 'svg-5',
        comment: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
      },
      {
        nameLast: 'Ferrer',
        nameFirst: 'Gani',
        avatarid: 'svg-10',
        comment: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
      }, */
      new ePerson("Руденко", "Олексій", "Анатолійович", true, ePersonStatusEnum.NATPERS, "CH788108", "2694204152", "",
                  "Україна", "м.Київ", "", "02031", "м.Київ", "ДПІ у Шевченківському р-ні",
                  "Кудрявський узвіз", 10, "", 1, ePersonAptTypeEnum.APT,
                  "+380501112233", "oleksiy.rudenko@gmailx.com", 'svg-2', "Principal"
      ),
      new ePerson("Петренко", "Петро", "Петрович", true, ePersonStatusEnum.NATPERS, "CM888222", "2694203333", "",
          "Україна", "м.Київ", "", "03033", "м.Київ", "ДПІ у Голосіївському р-ні",
          "вул.Васильківська", 30, "", 3, ePersonAptTypeEnum.APT,
          "+380503334455", "petro.petrenko@gmailx.com", 'svg-1', ""
      )
    ];
    var declarantCurrent = { user: users[0] };

    // Promise-based API
    return {
      loadAllUsers : loadAllUsers,
      getDeclarantCurrent : getDeclarantCurrent,
      setDeclarantCurrent : setDeclarantCurrent,
      ePersonStatusEnum   : ePersonStatusEnum,
      ePersonAptTypeEnum  : ePersonAptTypeEnum,
    };

    function loadAllUsers() {
      // Simulate async nature of real remote calls
      return $q.when(users);
    };
    function getDeclarantCurrent() {
      return declarantCurrent.user;
    };
    function setDeclarantCurrent(user) {
      declarantCurrent.user = user;
      $rootScope.$applyAsync();
    };




  }

  // ==================================================================================================

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
    this.id         =   0;
    this.isActive   =   true;

    this.nameLast	=	nameLast;
    this.nameFirst	=	nameFirst;
    this.namePat	=	namePat;
    this.isUAresident	=	isUAresident;
    this.status	=	status;
    this.passportNr	=	passportNr;
    this.idUAtaxCode	=	idUAtaxCode;
    this.idCodeSubst	=	idCodeSubst;
    this.addrCountry	=	addrCountry;
    this.addrRegion	=	addrRegion;
    this.addrDistrict	=	addrDistrict;
    this.addrPO	=	addrPO;
    this.addrCity	=	addrCity;
    this.addrCityDistrict	=	addrCityDistrict;
    this.addrStreet	=	addrStreet;
    this.addrBuilding	=	addrBuilding;
    this.addrSubBuilding	=	addrSubBuilding;
    this.addrApt	=	addrApt;
    this.addrAptType	=	addrAptType;
    this.telNr	=	telNr;
    this.email	=	email;
    this.avatarid = avatarid;
    this.comment = comment;
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
