"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectHelper = (function () {
    function ObjectHelper() {
    }
    ObjectHelper.clone = function (target, weakmap) {
        if (weakmap === void 0) { weakmap = new WeakMap(); }
        if (typeof target === 'object') {
            var cloneTarget_1;
            var keys = Object.keys(target);
            if (target === null) {
                return target;
            }
            if (target instanceof Date) {
                return new Date(target.getTime());
            }
            if (Object.prototype.toString.apply(target) === '[object Map]') {
                cloneTarget_1 = new Map();
                target.forEach(function (element, index) {
                    cloneTarget_1.set(index, ObjectHelper.clone(element));
                });
                return cloneTarget_1;
            }
            cloneTarget_1 = Array.isArray(target) ? [] : {};
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                cloneTarget_1[key] = ObjectHelper.clone(target[key]);
            }
            return cloneTarget_1;
        }
        else {
            return target;
        }
    };
    return ObjectHelper;
}());
exports.default = ObjectHelper;
