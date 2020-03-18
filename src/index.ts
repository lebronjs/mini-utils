import verify from './utils/verify';
import test from './utils/test';
import random from './utils/random';
import objectHelper from './utils/objectHelper';
import image from './utils/image';

/**
 * 计算倒计时剩余时间⏰
 * @param startTimestamp 开始时间戳
 * @param endTimestamp 结束时间戳
 */
function timeDifference(startTimestamp: number, endTimestamp: number): { days: number; hours: number; minutes: number; seconds: number } {
    const distanceTimestamp = startTimestamp - endTimestamp;
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distanceTimestamp / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanceTimestamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distanceTimestamp % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanceTimestamp % (1000 * 60)) / 1000);
    //console.log(days, startTimestamp, endTimestamp);
    return distanceTimestamp < 0 ? { days: 0, hours: 0, minutes: 0, seconds: 0 } : { days, hours, minutes, seconds };
}

export { verify, test, random, objectHelper, image, timeDifference };
