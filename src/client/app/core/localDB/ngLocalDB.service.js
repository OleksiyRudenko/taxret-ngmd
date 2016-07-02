/**
 * Created by Oleksiy Rudenko on 21/06/2016.
 */

(function(){
  'use strict';

  angular.module('ngLocalDB')
    .provider('LocalDB', LocalDB);

  /* LocalDBservice.$inject = [
    'lovefield',
    '$rootScope',
    '$q',
    '$log',
  ]; */

  function LocalDB() { // lovefield, $rootScope, $q, $log) {
    // provider
    var provider = {};
    var config   = {};

    // service to return
    provider.$get = [ 'lovefield', '$rootScope', '$q', '$log', LocalDBservice ];

    // configuration setting methods
    provider.setDB                = setDB;
    provider.setDBconfigBasePath  = setDBconfigBasePath;
    provider.setDBname            = setDBname;
    provider.setDBversion         = setDBversion;

    // private configurable variables with defaults
    config.DBconfigBasePath = './';
    config.DBname           = 'test';
    config.DBversion        = 1;

    // return provider
    return provider;

    // ====================== code =================================
    // configuration setting methods
    function setDB(dbConfigBasePath, dbName, dbVersion) {
      setDBconfigBasePath(dbConfigBasePath);
      setDBname(dbName);
      setDBversion(dbVersion);
    }

    function setDBconfigBasePath(dbConfigBasePath) {
      if (dbConfigBasePath.length==0)
        dbConfigBasePath = './';                // set current working directory
      else
        if (dbConfigBasePath.slice(-1)!=='/')
          dbConfigBasePath += '/';              // add trailing slash
      config.DBconfigBasePath = dbConfigBasePath;
    }

    function setDBname(dbName) {
      config.DBname = dbName;
    }

    function setDBversion(dbVersion) {
      dbVersion = parseInt(0 + dbVersion);
      config.DBversion = (dbVersion<1) ? 1 : dbVersion;
    }

    // MAIN SERVICE
    function LocalDBservice( lovefield, $rootScope, $q, $log ) {
      var service = {
        config  : config,
      };

      return service;

      // PUBLIC SERVICE METHODS

      // PRIVATE SERVICE METHODS
      function configPathBuild(version) {
        return service.config.DBconfigBasePath + ('000' + service.config.DBversion).slice(-3) + '/';
      }

      function loadDBschema(version) {
        if (!!version)
          version = service.config.DBversion;

      }

      function loadDBupgrade(version) {
        if (!!version)
          version = service.config.DBversion;
      }


    }

  }
})();