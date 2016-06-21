(function(){
  'use strict';

  // configuration for database support
  angular
    .module('app')
      .config( configure );
  
  configure.$inject = [
    'lovefieldProvider',
  ];
  
  function configure(lovefieldProvider) {
            var schemaBuilder = lovefieldProvider.create('taxret', 1); // DataBase

            schemaBuilder.createTable('ePerson')
              .addColumn('id', lovefieldProvider.Type.INTEGER)
              .addColumn('isActive', lovefieldProvider.Type.BOOLEAN)
              .addColumn('isNatPers', lovefieldProvider.Type.BOOLEAN)
              .addColumn('isAdmin', lovefieldProvider.Type.BOOLEAN)
              .addColumn('isDeclarant', lovefieldProvider.Type.BOOLEAN)
              .addColumn('isHirer', lovefieldProvider.Type.BOOLEAN)
              .addColumn('isTaxAgent', lovefieldProvider.Type.BOOLEAN)
              .addColumn('isTaxAuthority', lovefieldProvider.Type.BOOLEAN)
              .addColumn('avatarid', lovefieldProvider.Type.STRING)
              .addColumn('comment', lovefieldProvider.Type.STRING)
              .addColumn('nameLast', lovefieldProvider.Type.STRING)
              .addColumn('nameFirst', lovefieldProvider.Type.STRING)
              .addColumn('namePat', lovefieldProvider.Type.STRING)
              .addColumn('isUAresident', lovefieldProvider.Type.BOOLEAN)
              .addColumn('passportNr', lovefieldProvider.Type.STRING)
              .addColumn('idUAtaxCode', lovefieldProvider.Type.STRING)
              .addColumn('addrCountry', lovefieldProvider.Type.STRING)
              .addColumn('addrRegion', lovefieldProvider.Type.INTEGER)
              .addColumn('addrDistrict', lovefieldProvider.Type.STRING)
              .addColumn('addrPO', lovefieldProvider.Type.STRING)
              .addColumn('addrCity', lovefieldProvider.Type.STRING)
              .addColumn('addrCityDistrict', lovefieldProvider.Type.STRING)
              .addColumn('addrStreet', lovefieldProvider.Type.STRING)
              .addColumn('addrBuilding', lovefieldProvider.Type.STRING)
              .addColumn('addrSubBuilding', lovefieldProvider.Type.STRING)
              .addColumn('addrApt', lovefieldProvider.Type.STRING)
              .addColumn('addrAptType', lovefieldProvider.Type.INTEGER)
              .addColumn('telNr', lovefieldProvider.Type.STRING)
              .addColumn('email', lovefieldProvider.Type.STRING)
              .addColumn('taxAuthName', lovefieldProvider.Type.STRING)
              .addPrimaryKey(['id']);
        }

})();