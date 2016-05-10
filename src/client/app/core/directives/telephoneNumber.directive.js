/**
 * Created by oleksiy.rudenko on 2016-05-10.
 */

(function(){
  /**
   * @desc Directive that converts +000000000 model into formatted human-readable view. uses telephone* filters
   * @example <input data-telephone-number ng-model="telNumber" />
   */
  angular
    .module('app.core')
    .directive('telephoneNumber', TelephoneNumberDirective);

  TelephoneNumberDirective.$inject=['$filter'];

  /**
   * @name TelephoneNumberDirective
   * @desc Converts +000000000 model into formatted human-readable view. uses telephone* filters
   * @param $filter
   * @returns function link
   * @constructor
   */

  function TelephoneNumberDirective($filter) {
    var directive = {
      restrict: 'EA',
      require:  'ngModel',
      link:     link,
      // templateUrl: '/template/is/located/here.html',
    };

    return directive;

    function link(scope, element, attrs, ngModelController) {
        ngModelController.$parsers.push(function (inputValue) {
          //convert inputValue from view format to model format
          inputValue=$filter('telephoneSanitize')(inputValue);
          return inputValue; //converted
        });

        ngModelController.$formatters.push(function (inputValue) {
          //convert inputValue from model format to view format
          inputValue=$filter('telephone')(inputValue);
          return inputValue; //converted
        });
      }
  }
})();