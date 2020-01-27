export default class ObjectHelper {
    static clone<T = object>(target: T, weakmap?: WeakMap<object, any>): T;
}
