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
   * @returns {Object}
   */
  function EnumBaseService(
    $log
    // $rootScope
  ){
    /**
     * @desc Base type for enums. Provides interfaces.
     * @typedef enumBase
     * @type {{_constructor: enumBase._constructor}}
     * @property {Object} [properties]
     * @property {Object} derivatives - Container for secondary/derivative properties
     * @property {Function} selectOptions - Generates .derivatives.selectOptions[]
     * @example
     * // minimum
     * var CountryEnum = { UA :1, US :2 };
     * enumBase._constructor.apply(CountryEnum);
     * // CountryEnum is now supplemented with additional properties
     * //   properties: { 1: { descr: 'UA' }, 2: { descr: 'US' } }
     * //   derivatives: {}
     * //   selectOptions : Function
     * CountryEnum.selectOptions();
     * // CountryEnum.derivatives gets supplemented
     * //   derivatives : { selectOptions: [ { value: 1, label: 'UA'}, { value:2, label: 'US'} ]}
     * // .selectOptions() returns .derivatives.selectOptions[]
     * // .selectOptions(true) forces rebuild of .derivatives.selectOptions[]
     * @example
     * // properties preset
     * var CountryEnum = {
     *    UA: 1, US: 2,
     *    properties: { 1: { descr: 'Ukraine' }, 2: { descr: 'US' } }
     *   };
     * enumBase._constructor.apply(CountryEnum); // this time .properties is not built since it's already exist
     * CountryEnum.selectOptions(); // builds .derivatives.selectOptions[] using properties.<key>.descr
     */
    var enumBase = {
      // properties : ...,  // maps principal properties' values to anything else, e.g. human readable descriptions or
                            // those multilingual;
                            // auto-constructed unless defined by child object;
                            // auto-construction converts principal_property:value => .properties.value={descr:"principal_property"}
      // derivatives : {},      // populated by helper functions based on main properties or .properties
                            // normally, contains private secondary structures
      _constructor : function () {
        this.derivatives = this.derivatives || {}; //  BuildProperties : BuildProperties, };
        this.properties = this.properties || {}; // create unless exists
        if (Object.keys(this.properties).length == 0) {
          // build .properties
          $log.debug("Building .properties:");
          // this.derivatives.
          BuildProperties.call(this);
        }
        /** @method */
        this.selectOptions = SelectOptions;
      }
    };

    if (Object.freeze())
      Object.freeze(service);
    return enumBase;
    
    // Private methods

    /*
     * @name SelectOptions
     * @desc Generates array to build <SELECT> options if inexistent or returns existent
     * @param {boolean} [forceRebuild=false] - Force rebuild .derivative.selectOptions
     * @returns {Array} - .derivatives.selectOptions
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
     * @private
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