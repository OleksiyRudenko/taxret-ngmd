(function(){
  'use strict';

  angular.module('app.core')
    .factory('enumBase', EnumBaseService);
  
  EnumBaseService.$inject=[
    '$log',
    // '$rootScope'
  ];

  /**
   * @name EnumBaseService
   * @desc Provides public interface for enumerations. Used by enum.*.service
   * @param $log
   * @returns interface
   * @constructor
   */
  function EnumBaseService(
    $log
    // $rootScope
  ){
    var enumBase = {
      // properties : ...,  // maps principal properties' values to anything else, e.g. human readable descriptions or
                            // those multilingual;
                            // auto-constructed unless defined by child object;
                            // auto-construction converts principal_property:value => .properties.value={descr:"principal_property"}
      // derivatives : {},      // populated by helper functions based on main properties or .properties
                            // normally, contains private secondary structures
      _constructor : function () {
        this.derivatives = this.properties || {}; //  BuildProperties : BuildProperties, };
        this.properties = this.properties || {}; // create unless exists
        if (Object.keys(this.properties).length == 0) {
          // build .properties
          $log.debug("Building .properties:");
          // this.derivatives.
          BuildProperties.call(this);
        }
        this.selectOptions = SelectOptions;
      }
    };

    if (Object.freeze())
      Object.freeze(service);
    return enumBase;
    
    // Private methods

    /*
     * @name SelectOptions
     * @desc Generates array to generate <SELECT> options => .derivatives.selectOptions if inexistent or forced
     * @param forceRebuild optional
     * @returns Array .derivatives.selectOptions
     */
    function SelectOptions(forceRebuild) {
      if (typeof this.derivatives.selectOptions == 'undefined' || forceRebuild) {
        // populate .derivatives.selectOptions
        var props = this.properties;
        this.derivatives.selectOptions = [];
        for (var attr in props) {
          if (props.hasOwnProperty(attr))
            this.derivatives.selectOptions.push({value: attr, label: props[attr].descr});
        }
      }
      return this.derivatives['selectOptions'];
    }

    /*
     * @name BuildProperties
     * @desc Generates .properties if empty or inexistent
     */
    function BuildProperties() {
      var self = this;
      for (var attr in self) {
        if (self.hasOwnProperty(attr) && attr!='properties' && attr!='derivatives')
          self.properties[self[attr]] = { descr : attr };
      }
      // $log.debug(this.properties.toSource());
    }
  }
})();