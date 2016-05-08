(function(){
  'use strict';

  // configuration for mdTheming and mdIcon 
  angular
    .module('app')
      .config(function($mdThemingProvider, $mdIconProvider){
  
        $mdIconProvider
          .defaultIconSet(     "./content/svg/avatars.svg", 128)
          .icon("menu"       , "./content/svg/menu.svg"        , 24)
          .icon("share"      , "./content/svg/share.svg"       , 24)
          .icon("google_plus", "./content/svg/google_plus.svg" , 512)
          .icon("hangouts"   , "./content/svg/hangouts.svg"    , 512)
          .icon("twitter"    , "./content/svg/twitter.svg"     , 512)
          .icon("phone"      , "./content/svg/phone.svg"       , 512)
          .iconSet("avatarGrid", './content/svg/avatars.svg', 128); // for PersonAvatarGridController */
  
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