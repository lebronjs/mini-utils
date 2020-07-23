/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable prefer-rest-params */
import verify from './utils/verify';
import test from './utils/test';
import random from './utils/random';
import objectHelper from './utils/objectHelper';
/**
 * JS获取url参数
 * @param name 查询location的参数名
 * @returns 参数值都是字符串.
 */
function getQueryParam(name) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
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
function timeDifference(startTimestamp, endTimestamp) {
    var distanceTimestamp = endTimestamp - startTimestamp;
    // Time calculations for days, hours, minutes and seconds
    // const days = Math.floor(distanceTimestamp / (1000 * 60 * 60 * 24));
    // const hours = Math.floor((distanceTimestamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // const minutes = Math.floor((distanceTimestamp % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((distanceTimestamp % (1000 * 60)) / 1000);
    //console.log(days, startTimestamp, endTimestamp);
    var seconds = Math.floor((distanceTimestamp / 1000) % 60);
    var minutes = Math.floor((distanceTimestamp / 1000 / 60) % 60);
    var hours = Math.floor((distanceTimestamp / 1000 / 60 / 60) % 24);
    var days = Math.floor(distanceTimestamp / 1000 / 60 / 60 / 24);
    return distanceTimestamp < 0 ? { days: 0, hours: 0, minutes: 0, seconds: 0 } : { days: days, hours: hours, minutes: minutes, seconds: seconds };
}
/**
 * debounce function
 * @param func 需要防抖的函数
 * @param delay 延迟的毫秒数
 * @param immediate 第一次是否执行开关
 * @returns Returns the new debounced function.
 */
function debounce(func, delay, immediate) {
    var timeoutId;
    var isFirst = immediate;
    var debounced = function () {
        var context = this;
        var args = arguments;
        //关键就是这个每次都清除定时器
        timeoutId && clearTimeout(timeoutId);
        if (!timeoutId && isFirst) {
            // @ts-ignore
            func.apply(context, args);
            isFirst = false;
        }
        else {
            timeoutId = setTimeout(function () {
                // @ts-ignore
                func.apply(context, args);
            }, delay);
        }
    };
    debounced.cancel = function () {
        clearTimeout(timeoutId);
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
function throttle(func, interval) {
    var timeoutId;
    var throttled = function () {
        var context = this;
        var args = arguments;
        if (!timeoutId) {
            timeoutId = setTimeout(function () {
                timeoutId = null;
                func.apply(context, args);
            }, interval);
        }
    };
    throttled.cancel = function () {
        clearTimeout(timeoutId);
        timeoutId = null;
    };
    return throttled;
}
export { verify, test, random, objectHelper, timeDifference, getQueryParam, debounce, throttle };
