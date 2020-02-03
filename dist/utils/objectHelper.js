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
    ObjectHelper.debounce = function (func, delay, immediate) {
        var timeoutId;
        var isFirst = true;
        return function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            console.log(isFirst);
            if (immediate && isFirst) {
                func.apply(this, args);
                isFirst = false;
            }
            else {
                timeoutId = setTimeout(function () {
                    func.apply(_this, args);
                    timeoutId = void 0;
                }, delay);
            }
        };
    };
    ObjectHelper.throttle = function (func, delay) {
        var timeoutId;
        return function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!timeoutId) {
                timeoutId = setTimeout(function () {
                    func.apply(_this, args);
                    timeoutId = void 0;
                }, delay);
            }
        };
    };
    return ObjectHelper;
}());
exports.default = ObjectHelper;
