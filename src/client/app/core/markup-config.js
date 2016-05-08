(function(){
  'use strict';

  // configuration for database support
  angular
    .module('app')
      .config(['markedProvider', function (markedProvider) {
          markedProvider.setOptions({gfm: true, tables: true, });
          markedProvider.setRenderer({
            link: function (href, title, text) {
              return "<a href='" + href + "'" + (title ? " title='" + title + "'" : '') + " target='_blank'>" + text + "</a>";
            }
          });
      }]);
})();