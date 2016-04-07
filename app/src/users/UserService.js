(function(){
  'use strict';

  angular.module('users')
         .factory('userService', ['$q', '$rootScope', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q, $rootScope){
    var users = [
      {
        nameFull: 'Lia Lugo',
        nameShort: 'Lia Lugo',
        avatarid: 'svg-1',
        comment: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },
      {
        nameFull: 'George Duke',
        nameShort: 'George Duke',
        avatarid: 'svg-2',
        comment: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
      },
      {
        nameFull: 'Gener Delosreyes',
        nameShort:   'Gener Delosreyes',
        avatarid: 'svg-3',
        comment: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
      },
      {
        nameFull:  'Lawrence Ray',
        nameShort:  'Lawrence Ray',
        avatarid: 'svg-4',
        comment: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
      },
      {
        nameFull: 'Ernesto Urbina',
        nameShort: 'Ernesto Urbina',
        avatarid: 'svg-5',
        comment: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
      },
      {
        nameFull: 'Gani Ferrer',
        nameShort: 'Gani Ferrer',
        avatarid: 'svg-10',
        comment: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
      },
      new ePerson("Руденко Олексій", "Руденко Олексій Анатолійович", true, ePersonStatusEnum.NATPERS, "СН648208", "2695204236", "",
                  "Україна", "(Київ)", "", "01021", "Київ", "Печерський р-н", "Кловський узвіз", 20, "", 4, ePersonAptTypeEnum.APT,
                  "+380504405758", "oleksiy.rudenko@gmail.com", 'svg-11', "No comment"
      )
    ];
    var declarantCurrent = { user: users[1] };

    // Promise-based API
    return {
      loadAllUsers : loadAllUsers,
      getDeclarantCurrent : getDeclarantCurrent,
      setDeclarantCurrent : setDeclarantCurrent
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

  function ePerson(nameShort,
                   nameFull,
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
    this.nameShort	=	nameShort;
    this.nameFull	=	nameFull;
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
  }

})();
