'use strict';

(function (define){
    define(function () {
        function strict(types, fn) {
            var obj
              , propName
              , propRenamed;
            
            if(typeof types === 'string') {
                obj = {};
                
                obj[types] = function() { this.apply(null, arguments); };
                
                return strict(obj, fn);
            }
            
            for(propName in types) {
                propRenamed = propName.replace(/\s+/g, '');
                
                if(propName !== propRenamed) {
                    types[propRenamed] = types[propName];
                    
                    delete types[propName];
                }
            }
            
            return function() {
                var i
                  , j
                  , fx
                  , args
                  , type
                  , typeName
                  , typeArgs = [];
                
                for(i = 0, j = arguments.length; i < j; i++) {
                    typeName = Object.prototype.toString.call(arguments[i]);
                    
                    typeArgs.push(typeName.substring(8, typeName.length - 1));
                }
                
                typeName = typeArgs.join(',');
                
                if(typeName in types) {
                    type = types[typeName];
                    
                    fx = function() {
                        args = arguments;
                    };

                    fx.scope = this;

                    type.apply(fx, arguments);
                    
                    return fn.apply(this, args);
                } else {
                    throw 'Wrong arguments types applied (' + typeName + ').';
                }
            };
        }

        return strict;
    });
}(typeof define == 'function' && define.amd ? define : function (factory) {
    module.exports = factory(require, exports, module) || exports;
}));