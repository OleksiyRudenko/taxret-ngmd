(function(){
  'use strict';

  angular.module('app.core')
    .factory('enumBase', EnumBaseService);
  
  EnumBaseService.$inject=[
    // '$q',
    // '$rootScope'
  ];

  /**
   * @name EnumBaseService
   * @desc Provides public interface for enumerations. Used by enum.*.service
   * @ param $q
   * @returns enumeration
   * @constructor
   */
  function EnumBaseService(
    // $q
    // $rootScope
  ){
    var enumBase = {
      _constructor : function () {
        this.properties = this.properties || {}; // create unless exists
        this.selectOptions = SelectOptions;
      }
    };

    if (Object.freeze())
      Object.freeze(service);
    return enumBase;
    
    // Private methods

    /*
     * @name SelectOptions
     * @desc Generates array to generate <SELECT> options
     * @returns Array of objects { value: , label: }
     */
    function SelectOptions() {
      var props = this.properties;
      var options = [];
      for (var attr in props) {
        if (props.hasOwnProperty(attr))
          options.push({value: attr, label: props[attr].descr});
      }
      return options;
    }
  }
})();