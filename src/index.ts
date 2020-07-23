/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable prefer-rest-params */
import verify from './utils/verify';
import test from './utils/test';
import random from './utils/random';
import objectHelper from './utils/objectHelper';
import image from './utils/image';

/**
 * JS获取url参数
 * @param name 查询location的参数名
 * @returns 参数值都是字符串.
 */
function getQueryParam(name: string): string {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (pair[0] === name) {
            return pair[1];
        }
    }
    return '';
}

/**
 * 计算倒计时剩余时间⏰
 * @param startTimestamp 开始时间戳
 * @param endTimestamp 结束时间戳
 * @returns object { days: number; hours: number; minutes: number; seconds: number }
 */
function timeDifference(startTimestamp: number, endTimestamp: number): { days: number; hours: number; minutes: number; seconds: number } {
    const distanceTimestamp = endTimestamp - startTimestamp;
    // Time calculations for days, hours, minutes and seconds
    // const days = Math.floor(distanceTimestamp / (1000 * 60 * 60 * 24));
    // const hours = Math.floor((distanceTimestamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // const minutes = Math.floor((distanceTimestamp % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((distanceTimestamp % (1000 * 60)) / 1000);
    //console.log(days, startTimestamp, endTimestamp);
    const seconds = Math.floor((distanceTimestamp / 1000) % 60);
    const minutes = Math.floor((distanceTimestamp / 1000 / 60) % 60);
    const hours = Math.floor((distanceTimestamp / 1000 / 60 / 60) % 24);
    const days = Math.floor(distanceTimestamp / 1000 / 60 / 60 / 24);
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
    let timeoutId: NodeJS.Timeout | null;
    let isFirst = immediate;
    const debounced = function(this: any) {
        const context = this;
        const args = arguments;
        //关键就是这个每次都清除定时器
        timeoutId && clearTimeout(timeoutId);
        if (!timeoutId && isFirst) {
            // @ts-ignore
            func.apply(context, args);
            isFirst = false;
        } else {
            timeoutId = setTimeout(function() {
                // @ts-ignore
                func.apply(context, args);
            }, delay);
        }
    };

    debounced.cancel = function() {
        clearTimeout(timeoutId as NodeJS.Timeout);
        timeoutId = null;
        isFirst = immediate;
    };
    return debounced;
}

/**
 * throttle function
 * @param func 需要节流的函数
 * @param interval 函数执行的固定时间间隔
 * @returns Returns the new throttle function.
 */
function throttle(func: Function, interval: number): () => any {
    let timeoutId: NodeJS.Timeout | null;
    const throttled = function(this: any) {
        const context = this;
        const args = arguments;

        if (!timeoutId) {
            timeoutId = setTimeout(function() {
                timeoutId = null;
                func.apply(context, args);
            }, interval);
        }
    };

    throttled.cancel = function() {
        clearTimeout(timeoutId as NodeJS.Timeout);
        timeoutId = null;
    };
    return throttled;
}

export { verify, test, random, objectHelper, image, timeDifference, getQueryParam, debounce, throttle };
