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
    // service to return
    this.$get = LocalDBservice;

    // configuration setting methods
    this.setDB                = setDB;
    this.setDBconfigBasePath  = setDBconfigBasePath;
    this.setDBname            = setDBname;
    this.setDBversion         = setDBversion;

    // private configurable variables with defaults
    var privateDBconfigBasePath = './';
    var privateDBname           = 'test';
    var privateDBversion        = 1;

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
      privateDBconfigBasePath = dbConfigBasePath;
    }

    function setDBname(dbName) {
      privateDBname = dbName;
    }

    function setDBversion(dbVersion) {
      dbVersion = parseInt(0 + dbVersion);
      privateDBversion = (dbVersion<1) ? 1 : dbVersion;
    }

    // MAIN SERVICE
    function LocalDBservice() {
      var service = {
        DBconfigBasePath  : privateDBconfigBasePath,
        DBname            : privateDBname,
        DBversion         : privateDBversion,
      };

      return service;

      // PUBLIC SERVICE METHODS

      // PRIVTAE SERVICE METHODS
      function configPathBuild(version) {
        return this.DBconfigBasePath + ('000' + this.DBversion).slice(-3) + '/';
      }

      function loadDBschema(version) {
        if (!!version)
          version = this.DBversion;

      }

      function loadDBupgrade(version) {
        if (!!version)
          version = this.DBversion;

      }


    }

  }
})();