/**
 * 数组求和
 */
const total = [0, 1, 2, 3].reduce((pre, cur) => {
    return pre + cur;
}, 10);
console.log(total);

/**
 * 二维转一维
 */
const array = [
    [1, 2],
    [3, 4],
    [5, 6]
].reduce((pre, cur) => {
    return pre.concat(cur);
}, []);
console.log(array);

/**
 * 计算数组中每个元素出现的次数(一)
 */

const names = ['tom', 'jim', 'jack', 'tom', 'jack'];
const countNames = names.reduce((allNames, curName) => {
    if (curName in allNames) {
        allNames[curName]++;
    } else {
        allNames[curName] = 1;
    }
    return allNames;
}, {});
console.log(countNames);

/**
 * 计算数组中每个元素出现的次数(二)
 */

const elementCount = (arr, val) =>
    arr.reduce((count, cur) => {
        return cur === val ? count + 1 : count + 0;
    }, 0);
console.log(elementCount(['tom', 'jim', 'jack', 'tom', 'jack'], 'tom'));

/**
 * 数组去重（一）
 */
const duplicatArr = ['tom', 'jim', 'jack', 'tom', 'jack'];
const result = duplicatArr.sort().reduce((init, cur) => {
    if (init.length < 1 || init[init.length - 1] !== cur) {
        init.push(cur);
    }
    return init;
}, []);
console.log(result);

/**
 * 数组去重（二）
 */

console.log([...new Set([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6])]);
console.log(Array.from(new Set([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6])));
