/**
 * Created by oleksiy.rudenko on 2016-05-09.
 */
(function(){

  angular
    .module('app.core')
    .filter('telephoneSanitize', TelephoneSanitizeFilter);

  TelephoneSanitizeFilter.$inject=[
  ];

  /**
   * @name TelephoneSanitizeFilter
   * @desc Sanitizes telephone number -> database storable
   * @constructor
   */
  function TelephoneSanitizeFilter(
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

      if (isNumber(input))
        input=input.toString();

      if (typeof input != 'string') return input;

      // remove everything but digits
      var output = input.replace(/\D/g,'');

      // settings
      var settings = {
        UA : { prefix : '380', len : [12, 18], }, // prefix: mandatory; len:[min,max]
      };

      // if input shorter than len[0] then prepend with prefix and append with 0's so, the result.length==len[0]
      var lenActual = output.length;
      if (lenActual<settings.len[0]) {
        var start=0;
        if (lenActual>settings.len[0]-settings.prefix.length) // strip off initial digits
           start =  lenActual - (settings.len[0]-settings.prefix.length) + 1;
        output=settings.prefix + output.substring(start);
        // pad right with 0's
        while (output.length<settings.len[0])
         output+='0';
      }
      
      // check if output is longer than len[1]
      if (output.length>settings.len[1])
        output=output.substring(0,settings.len[1]);
      
      // prepend with '+'
      output='+' + output;

      return output;
    }
  }

})();