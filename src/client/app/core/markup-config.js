(function(){
  'use strict';

  // configuration for database support
  angular
    .module('app')
      .config( configure );
  
  configure.$inject = [
    'markedProvider',
  ];
  
  function configure(markedProvider) {
          markedProvider.setOptions({gfm: true, tables: true, });
          markedProvider.setRenderer({
            link: function (href, title, text) {
              return "<a href='" + href + "'" + (title ? " title='" + title + "'" : '') + " target='_blank'>" + text + "</a>";
            }
          });
      };
  
})();