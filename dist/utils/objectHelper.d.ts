export default class ObjectHelper {
    static clone<T = object>(target: T, weakmap?: WeakMap<object, any>): T;
    static debounce(func: Function, delay: number, immediate?: boolean): Function;
    static throttle(func: Function, delay: number): Function;
}
