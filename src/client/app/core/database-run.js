/**
 * Created by Oleksiy Rudenko on 2016-05-14.
 */
(function() {
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
        lovefield.getDB().then(function(db) {
        
        });
    }
})();