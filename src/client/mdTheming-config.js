(function(){
  'use strict';

  // configuration for mdTheming and mdIcon 
  angular
    .module('taxretApp')
      .config(function($mdThemingProvider, $mdIconProvider){
  
        $mdIconProvider
          .defaultIconSet(     "./assets/svg/avatars.svg", 128)
          .icon("menu"       , "./assets/svg/menu.svg"        , 24)
          .icon("share"      , "./assets/svg/share.svg"       , 24)
          .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
          .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
          .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
          .icon("phone"      , "./assets/svg/phone.svg"       , 512)
          .iconSet("avatarGrid", './assets/svg/avatars.svg', 128); // for UserAvaGridController */
  
        $mdThemingProvider.theme('default')
          .primaryPalette('indigo')
          .accentPalette('light-blue')
          .warnPalette('deep-orange');
        $mdThemingProvider.theme('form-shaded')
          .primaryPalette('orange')
          .accentPalette('yellow')
          .warnPalette('deep-orange')
          //.backgroundPalette('grey')
          .dark();
      });

})();