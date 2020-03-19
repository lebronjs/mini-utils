import verify from './utils/verify';
import test from './utils/test';
import random from './utils/random';
import objectHelper from './utils/objectHelper';
import image from './utils/image';
/**
 * 计算倒计时剩余时间⏰
 * @param startTimestamp 开始时间戳
 * @param endTimestamp 结束时间戳
 * @returns Returns the new debounced function.
 */
declare function timeDifference(startTimestamp: number, endTimestamp: number): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};
/**
 * debounce function
 * @param func 需要防抖的函数
 * @param delay 延迟的毫秒数
 * @param immediate 第一次是否执行开关
 * @returns Returns the new debounced function.
 */
declare function debounce(func: () => {}, delay: number, immediate?: boolean): () => any;
/**
 * throttle function
 * @param func 需要节流的函数
 * @param delay 延迟的毫秒数
 * @returns Returns the new throttle function.
 */
declare function throttle(func: Function, delay: number): () => any;
export { verify, test, random, objectHelper, image, timeDifference, debounce, throttle };
