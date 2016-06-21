/**
 * Created by Oleksiy Rudenko on 2016-04-28.
 */
(function() {
  'use strict';

  angular
    .module('app')
      .run(runRoutine);

  runRoutine.$inject = [
    '$state',
  ];

  function runRoutine($state) { // force $state due to ui-view includes
    // itentionally left blank!
  }
})();