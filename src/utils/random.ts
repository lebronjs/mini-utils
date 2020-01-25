/* eslint-disable prefer-const */
export default {
    /**
     * 返回指定范围随机整数
     * @param {number} min
     * @param {number} max
     * @returns {Number} 随机数 between[min,max]
     */
    integer: (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * 随机洗牌数组内容
     * @param {Array} originArr 需要随机洗牌的数组
     * @returns {Array} 返回随机洗牌后的新数组
     */
    shuffle: (originArr: []): Array<number | string> => {
        //let arr = [...originArr];
        const arr = originArr.slice(0);
        for (let index = arr.length - 1; index >= 0; index--) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            //let lastElement = arr[index];
            //let randomElement = arr[randomIndex];
            //[lastElement, randomElement] = [randomElement, lastElement];
            // arr[index] = randomElement;
            // arr[randomIndex] = lastElement;
            [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
        }
        return arr;
    }
};
