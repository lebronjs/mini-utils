var ObjectHelper = /** @class */ (function () {
    function ObjectHelper() {
    }
    /**
     * Deep copy function for TypeScript.
     * @param T Generic type of target/copied value.
     * @param target Target value to be copied.
     */
    ObjectHelper.clone = function (target, weakmap) {
        if (weakmap === void 0) { weakmap = new WeakMap(); }
        if (typeof target === 'object') {
            var cloneTarget_1;
            var keys = Object.keys(target);
            // circular reference
            // if (weakmap.get(target)) {
            //     return target;
            // }
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
            // if (typeof (target as Target)[Symbol.iterator] === 'function') {
            // }
            /**对象或数组*/
            cloneTarget_1 = Array.isArray(target) ? [] : {};
            // weakmap.set(target, cloneTarget);
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
export default ObjectHelper;
