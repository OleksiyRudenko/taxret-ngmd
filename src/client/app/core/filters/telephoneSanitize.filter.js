/**
 * Created by oleksiy.rudenko on 2016-05-09.
 */
(function(){

  angular
    .module('app.core')
    .filter('telephoneSanitize', TelephoneSanitizeFilter);

  TelephoneSanitizeFilter.$inject=[
    '$log',
  ];

  /**
   * @name TelephoneSanitizeFilter
   * @desc Sanitizes telephone number -> database storable
   * @constructor
   */
  function TelephoneSanitizeFilter(
    $log
  ) {
    return telephoneSanitizeFilter;

    /**
     * @name telephoneSanitizeFilter
     * @desc Sanitizes telephone number
     * @ param input
     * @ param country : default = UA
     * @constructor
     */
    function telephoneSanitizeFilter(input, country) {
      // country defaulted to UA
      country = 'UA';

      if (angular.isNumber(input)) {
        if (isNaN(input)) input = 0;
        if (!isFinite(input)) input = 0;
        input = input.toString();
      }

      if (typeof input != 'string') return input;

      // remove everything but digits
      var output = input.replace(/\D/g,'');

      // settings
      var settings = {
        UA : { prefix : '38044', len : [12, 18], }, // prefix: mandatory; len:[min,max]
      };

      var   prefix = settings[country].prefix,
            len = settings[country].len;

      // $log.debug('====================\nSanitize: ' + output);

      // if input shorter than len[0] then prepend with part of prefix (number is prioritized) and append with 0's so, the result.length==len[0]
      var lenActual = output.length;
      if (lenActual<len[0]) {
        output = prefix.substring(0,len[0]-lenActual) + output;
        // pad right with 0's
        while (output.length<len[0])
         output+='0';
        // $log.debug('Padded output == ' + output + '(' + output.length + ')');
      }

      // check if output is longer than len[1]
      if (output.length>len[1])
        output=output.substring(0,len[1]);
      
      // prepend with '+'
      output = '+' + output;

      return output;
    }
  }

})();