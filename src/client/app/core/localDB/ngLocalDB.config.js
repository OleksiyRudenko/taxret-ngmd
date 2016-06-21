/**
 * Created by Oleksiy Rudenko on 21/06/2016.
 */

(function(){
  'use strict';

  // configuration for localDB
  angular
    .module('app')
      .config( configure );

  configure.$inject = [
    'LocalDBProvider',
  ];

  function configure(LocalDBProvider) {
    LocalDBProvider.setDB(
      './app/core/data-model/',           // where subfolders per DB versions located 
      'taxret',                           // database name
      1                                   // database version
    );
  }

})();