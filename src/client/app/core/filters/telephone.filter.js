/**
 * Created by oleksiy.rudenko on 2016-05-09.
 */
(function(){

  angular
    .module('app.core')
    .filter('telephone', TelephoneFilter);

  TelephoneFilter.$inject=[
  ];

  /**
   * @name TelephoneFilter
   * @desc Formats telephone number -> human readable
   * @constructor
   */
  function TelephoneFilter(
    ) {
    return telephoneFilter;

    /**
     * @name telephoneFilter
     * @desc Formats telephone number
     * @ param input
     * @ param country : default = UA
     * @constructor
     */
    function telephoneFilter(input, country) {
      // country defaulted to UA
      country = 'UA';

      if (isNumber(input))
        input=input.toString();

      if (typeof input != 'string') return input;

      // remove everything but digits
      var output = input.replace(/\D/g,'');

      // get settings
      var settings = {
        UA : { prefix : '38044', groups : [3, 2, 3, 4], },
      };
      var groups = settings[country].groups;
      var len=0;
      for (var i=groups.length; i--;) {
        len+=groups[i];
      }

      // prepend with prefix sequence so total digits will make
      var prefix = settings[country].prefix.substring(0,len-output.length);
      output+=prefix;

      // insert spaces
      var split = [];
      for (var i=0, n=groups.length, start=0; i<n; start+=groups[i++]) {
        split.push(output.substring(start,groups[i]));
      }
      if (output.length>len) // push remainder
        split.push(output.substring(start,output.length));
      output=split.join(' ');

      // prepend with '+'
      output='+' + output;

      return output;
    }
  }

})();