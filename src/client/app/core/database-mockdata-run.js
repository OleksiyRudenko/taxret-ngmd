/**
 * Created by Oleksiy Rudenko on 2016-05-14.
 */
(function () {
  'use strict';
  
  // instantiate basic entities if db is inexitent or empty
  angular
    .module('app')
    .run(DatabaseMockDataCreate);
  
  DatabaseMockDataCreate.$inject = [
    'lovefield',
    '$log',
  ];
  
  function DatabaseMockDataCreate(lovefield, $log) {
    // $log.debug(lovefiled.toSource());
    lovefield.getDB().then(function (db) {
      var ePerson = db.getSchema().table('ePerson');
      
      $log.debug('-- We are in for mock data');
      // $log.debug('lovefield.fn.count: ' + lf.fn.count.toSource());
      db.select(lf.fn.count(ePerson.id))
        .from(ePerson)
        .exec()
        .then(function(results) {
          if (results[0]['COUNT(id)']==1) {
            $log.debug('--- Create two mock declarants record');
            // create admin's record
            var row1 = ePerson.createRow({
              'id'        : 0, // whatever for autoincrement
              'isActive'	:	true	,
              'status'	  :	0x21	, // declarant + employee
              'avatarid'	:	'svg-1'	,
              'comment'	  :	''	,
              'nameLast'	:	'Сидоренко'	,
              'nameFirst'	:	'Сидор'	,
              'namePat'	  :	'Сидорович'	,
              'isUAresident'	:	true	,
              'passportNr'	  :	'СН788108'	,
              'idUAtaxCode'	  :	'2694202152'	,
              'addrCountry'	  :	'Україна'	,
              'addrRegion'	  :	1	,
              'addrDistrict'	:	''	,
              'addrPO'	      :	'02031'	,
              'addrCity'	    :	'м.Київ'	,
              'addrCityDistrict'	:	'Шевченківський'	,
              'addrStreet'	  :	'Кудрявський узвіз'	,
              'addrBuilding'	:	'10'	,
              'addrSubBuilding'	:	''	,
              'addrApt'	    :	'1'	,
              'addrAptType'	:	1	,
              'telNr'	      :	'+380501112233'	,
              'email'	      :	'sydor.sydorenko@gmailx.com'	,
              'taxAuthName'	:	'ДПІ у Шевченківському р-ні'	,
            });
            var row2 = ePerson.createRow({
              'id'        : 0, // whatever for autoincrement
              'isActive'	:	true	,
              'status'	  :	0x21	, // declarant + employee
              'avatarid'	:	'svg-4'	,
              'comment'	  :	''	,
              'nameLast'	:	'Петренко'	,
              'nameFirst'	:	'Петро'	,
              'namePat'	  :	'Петрович'	,
              'isUAresident'	:	true	,
              'passportNr'	  :	'СМ888222'	,
              'idUAtaxCode'	  :	'2694203333'	,
              'addrCountry'	  :	'Україна'	,
              'addrRegion'	  :	1	,
              'addrDistrict'	:	''	,
              'addrPO'	      :	'03033'	,
              'addrCity'	    :	'м.Київ'	,
              'addrCityDistrict'	:	'Голосіївський'	,
              'addrStreet'	  :	'вул.Васильківська'	,
              'addrBuilding'	:	'30'	,
              'addrSubBuilding'	:	''	,
              'addrApt'	    :	'3'	,
              'addrAptType'	:	1	,
              'telNr'	      :	'+380503334455'	,
              'email'	      :	'petro.petrenko@gmailx.com'	,
              'taxAuthName'	:	'ДПІ у Голосіївському р-ні'	,
            });
            // $log.debug("--- ePerson: " + ePerson.toSource());
            
            db.insertOrReplace().into(ePerson).values([row1,row2]).exec()
              .then(function(response){
                $log.debug("--- Response: " + response.toSource());
              });
            
          } else {
            $log.debug('--- There is already mock data in ePerson');
          }
        });
    });
    
    // lovefield.clearDB(); // removes contents from all tables
  }
})();