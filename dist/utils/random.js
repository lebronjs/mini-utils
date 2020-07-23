/* eslint-disable prefer-const */
export default {
    /**
     * 返回指定范围随机整数
     * @param {number} min
     * @param {number} max
     * @returns {Number} 随机数 between[min,max]
     */
    integer: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    /**
     * 随机洗牌数组内容
     * @param {Array} originArr 需要随机洗牌的数组
     * @returns {Array} 返回随机洗牌后的新数组
     */
    shuffle: function (originArr) {
        var _a;
        //let arr = [...originArr];
        var arr = originArr.slice(0);
        for (var index = arr.length - 1; index >= 0; index--) {
            var randomIndex = Math.floor(Math.random() * (index + 1));
            //let lastElement = arr[index];
            //let randomElement = arr[randomIndex];
            //[lastElement, randomElement] = [randomElement, lastElement];
            // arr[index] = randomElement;
            // arr[randomIndex] = lastElement;
            _a = [arr[randomIndex], arr[index]], arr[index] = _a[0], arr[randomIndex] = _a[1];
        }
        return arr;
    }
};
