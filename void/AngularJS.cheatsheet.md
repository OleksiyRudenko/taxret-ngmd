# AngularJS cheatsheet

based on: [cheatsheet by ProLoser[2012-08-09]](https://www.cheatography.com/proloser/cheat-sheets/angularjs/)

## Global Functions

`angular.` is a prefix for every function below 

Function | Description
:--- | :---
`bind(self,fn,args)` | Returns a function which calls function `fn` bound to `self` (`self` becomes the `this` for `fn`).
`bootstrap(element[,modules])` | Start up angular application manually.
`copy(source,destination)` | Deep copy of an `Array` or `Object`
`element(element)` | Wraps a raw DOM element or HTML string as jQuery element
`equals(o1,o2)` | Are `o1` and `o2` equivalent. Both are `Object` or `scalar`
`extend(dst,src)` | Extends `dst` `Object` copying all properties from `src` `Object(s)`
`forEach(obj,iterator[,context])` | Invokes `iterator` fn once for each item in `obj` collection, which is `Object` or `Array`
`fromJson(json)` | Deserializes a JSON string
`identity()` | Returns its 1st arg. Useful when writing code in functional style
`injector(modules)` | Creates an injector function that can be used for retrieving services as well as for dependency injection.
`isArray(v)` | Is `v` an `Array`?
`isDate(v)` | Is `v` a `Date`?
`isDefined(v)` | Is `v` `defined`?
`isElement(v)` | Is `v` a DOM element or wrapped jQuery element?
`isFunction(v)` | Is `v` a `Function`?
`isNumber(v)` | Is `v` a `Number`?
`isObject(v)` | Is `v` an `Object`?
`isString(v)` | Is `v` a `String`?
`isUndefined(v)` | Is `v` undefined?
`lowercase(s)` | Lowercases the `String`
`mock` | Namespace from `angular-mocks.js` which contains testing related code.
`module(name[,requires],configFn)` | The `angular.module` is a global place for creating and registering Angular modules. `Requires` argument always creates a new module.
`noop()` | Performs no operation
`toJson(obj[,pretty])` | Serializes `obj` into a JSON string. If `pretty` then result is prettyfied.
`uppercase(s)` | Uppercases the `String`
`version` | Object contains info on AngularJS version

