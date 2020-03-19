declare const _default: {
    /**
     * 返回指定范围随机整数
     * @param {number} min
     * @param {number} max
     * @returns {Number} 随机数 between[min,max]
     */
    integer: (min: number, max: number) => number;
    /**
     * 随机洗牌数组内容
     * @param {Array} originArr 需要随机洗牌的数组
     * @returns {Array} 返回随机洗牌后的新数组
     */
    shuffle: (originArr: (string | number)[]) => (string | number)[];
};
export default _default;
