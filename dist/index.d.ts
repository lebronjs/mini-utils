import verify from './utils/verify';
import test from './utils/test';
import random from './utils/random';
import objectHelper from './utils/objectHelper';
/**
 * JS获取url参数
 * @param name 查询location的参数名
 * @returns 参数值都是字符串.
 */
declare function getQueryParam(name: string): string;
/**
 * 计算倒计时剩余时间⏰
 * @param startTimestamp 开始时间戳
 * @param endTimestamp 结束时间戳
 * @returns object { days: number; hours: number; minutes: number; seconds: number }
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
 * @param interval 函数执行的固定时间间隔
 * @returns Returns the new throttle function.
 */
declare function throttle(func: Function, interval: number): () => any;
export { verify, test, random, objectHelper, timeDifference, getQueryParam, debounce, throttle };
