export default {
    /**
     * 判断是不是数组
     */
    isArrayLike: function (param) {
        return {}.toString.apply(param).slice(8, -1) === 'Array';
    }
};
