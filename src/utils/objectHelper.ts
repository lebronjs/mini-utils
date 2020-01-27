/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
interface Target {
    [index: string]: any;
}

export default class ObjectHelper {
    /**
     * Deep copy function for TypeScript.
     * @param T Generic type of target/copied value.
     * @param target Target value to be copied.
     */
    public static clone<T = object>(target: T, weakmap = new WeakMap()): T {
        if (typeof target === 'object') {
            let cloneTarget: any;
            let keys = Object.keys(target);
            // circular reference
            // if (weakmap.get(target)) {
            //     return target;
            // }
            if (target === null) {
                return target;
            }
            if (target instanceof Date) {
                return new Date(target.getTime()) as any;
            }
            if (Object.prototype.toString.apply(target) === '[object Map]') {
                cloneTarget = new Map();
                (target as any).forEach((element, index) => {
                    cloneTarget.set(index, ObjectHelper.clone(element));
                });
                return cloneTarget;
            }
            // if (typeof (target as Target)[Symbol.iterator] === 'function') {
            // }
            /**对象或数组*/
            cloneTarget = Array.isArray(target) ? [] : {};
            // weakmap.set(target, cloneTarget);
            for (const key of keys) {
                (cloneTarget as Target)[key] = ObjectHelper.clone((target as Target)[key]);
            }
            return cloneTarget as T;
        } else {
            return target;
        }
    }
}
