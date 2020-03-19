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
function timeDifference(startTimestamp: number, endTimestamp: number): { days: number; hours: number; minutes: number; seconds: number } {
    const distanceTimestamp = endTimestamp - startTimestamp;
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distanceTimestamp / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanceTimestamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distanceTimestamp % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanceTimestamp % (1000 * 60)) / 1000);
    //console.log(days, startTimestamp, endTimestamp);
    return distanceTimestamp < 0 ? { days: 0, hours: 0, minutes: 0, seconds: 0 } : { days, hours, minutes, seconds };
}

/**
 * debounce function
 * @param func 需要防抖的函数
 * @param delay 延迟的毫秒数
 * @param immediate 第一次是否执行开关
 * @returns Returns the new debounced function.
 */
function debounce(func: () => {}, delay: number, immediate?: boolean): () => any {
    let timeoutId: NodeJS.Timeout | undefined;
    let isFirst = true;

    return function(this, ...args): void {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        console.log(isFirst);
        if (immediate && isFirst) {
            func.apply(this, args);
            isFirst = false;
        } else {
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                timeoutId = void 0;
            }, delay);
        }
    };
}

/**
 * throttle function
 * @param func 需要节流的函数
 * @param delay 延迟的毫秒数
 * @returns Returns the new throttle function.
 */
function throttle(func: Function, delay: number): () => any {
    let timeoutId: NodeJS.Timeout | undefined;

    return function(this, ...args): void {
        if (!timeoutId) {
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                timeoutId = void 0;
            }, delay);
        }
    };
}

export { verify, test, random, objectHelper, image, timeDifference, debounce, throttle };
