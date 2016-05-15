/**
 * Created by Oleksiy Rudenko on 2016-05-14.
 */
(function () {
  'use strict';

  // instantiate basic entities if db is inexitent or empty
  angular
    .module('app')
    .run(DatabaseCreate);

  DatabaseCreate.$inject = [
    'lovefield',
    '$log',
  ];

  function DatabaseCreate(lovefield, $log) {
    // $log.debug(lovefiled.toSource());
    lovefield.getDB().then(function (db) {
      var ePerson = db.getSchema().table('ePerson');

      $log.debug('-- We are in');
      // $log.debug('lovefield.fn.count: ' + lf.fn.count.toSource());
      db.select(lf.fn.count(ePerson.id))
        .from(ePerson)
        .exec()
        .then(function(results) {
          if (results[0]['COUNT(id)']==0) {
            $log.debug('--- Create admin record');
            // create admin's record
            var row = ePerson.createRow({
              'id'	:	1	,
              'isActive'	:	true	,
              'isNatPers'	:	true	,
              'isAdmin'	:	true	,
              'isDeclarant'	:	true	,
              'isHirer'	:	false	,
              'isTaxAgent'	:	false	,
              'isTaxAuthority'	:	false	,
              'avatarid'	:	'svg-2'	,
              'comment'	:	'Це - запис адміністратора. Його не можна деактивувати.'	,
              'nameLast'	:	'Замінити'	,
              'nameFirst'	:	'Замінити'	,
              'namePat'	:	'Замінити'	,
              'isUAresident'	:	true	,
              'passportNr'	:	''	,
              'idUAtaxCode'	:	'0000000000'	,
              'addrCountry'	:	'Україна'	,
              'addrRegion'	:	1	,
              'addrDistrict'	:	''	,
              'addrPO'	:	''	,
              'addrCity'	:	''	,
              'addrCityDistrict'	:	''	,
              'addrStreet'	:	''	,
              'addrBuilding'	:	''	,
              'addrSubBuilding'	:	''	,
              'addrApt'	:	''	,
              'addrAptType'	:	1	,
              'telNr'	:	''	,
              'email'	:	''	,
              'taxAuthName'	:	''	,
  
            });

            // $log.debug("--- ePerson: " + ePerson.toSource());

            db.insertOrReplace().into(ePerson).values([row]).exec()
              .then(function(response){
                $log.debug("--- Response: " + response.toSource());
              });

          } else {
            $log.debug('--- There are already records in ePerson');
          }
        });
    });

    // lovefield.clearDB(); // removes contents from all tables
  }
})();