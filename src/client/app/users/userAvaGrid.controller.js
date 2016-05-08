/**
 * Created by Rudenko on 08/04/2016.
 * TODO: rename file: dot notation
 */
(function(){

    angular
      .module('app.users')
      .controller('UserAvaGridCtrl', UserAvaGridController);

  UserAvaGridController.$inject=['$scope', 'dataLPSservice', '$mdDialog'];

  // var mod = angular.module('src');
  // console.log(var_dump(mod._invokeQueue));
  // console.log(mod._invokeQueue.toString());

  /**
   * @name UserAvaGridController
   * @desc User Avatars Controller for the TaxRet App
   * @param $scope
   * @param dataLPSservice
   * @param $mdDialog
   * @constructor
   */
  function UserAvaGridController($scope,dataLPSservice,$mdDialog) {
        // console.log('UserAvaGridController has been invoked');
        /* jshint validthis: true */
        var vm = this;
        vm.tiles = buildGridModel({
          icon : "avatarGrid:svg-",
          title: "svg-",
          background: ""
        });

        $scope.avaSelect = avaSelect;

        /**
         * @name avaSelect
         * @desc Assigns avatar to current declarant
         * @param avataridSelected
         */
        function avaSelect(avataridSelected) {
          // alert("Received " + avataridSelected + ". Current declarant " + dataLPSservice.getDeclarantCurrent().avatarid);
            dataLPSservice.getDeclarantCurrent().avatarid = avataridSelected;
          $mdDialog.hide();
        };

        /**
         * @name buildGridModel
         * @desc Build Grid Model using template
         * @param tileTmpl
         * @returns {Array} results - styled tiles
         */
        function buildGridModel(tileTmpl){
          var it, results = [ ];
          for (var j=0; j<11; j++) {
            it = angular.extend({},tileTmpl);
            it.icon  = it.icon + (j+1);
            it.title = it.title + (j+1);
            it.span  = { row : 1, col : 1 };
            switch(j+1) {
              case  1:
                  it.background = "red";
                  it.span.row = it.span.col = 2;
                  break;
              case  2: it.background = "green";         break;
              case  3: it.background = "darkBlue";      break;
              case  4:
                  it.background = "blue";
                  it.span.col = 2;
                  break;
              case  5:
                  it.background = "yellow";
                  it.span.row = it.span.col = 2;
                  break;
              case  6: it.background = "pink";          break;
              case  7: it.background = "darkBlue";      break;
              case  8: it.background = "purple";        break;
              case  9: it.background = "deepBlue";      break;
              case 10: it.background = "lightPurple";   break;
              case 11: it.background = "yellow";        break;
            }
            results.push(it);
          }
          return results;
        }
      };

})();