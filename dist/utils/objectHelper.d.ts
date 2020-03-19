export default class ObjectHelper {
    /**
     * Deep copy function for TypeScript.
     * @param T Generic type of target/copied value.
     * @param target Target value to be copied.
     */
    static clone<T = object>(target: T, weakmap?: WeakMap<object, any>): T;
}
