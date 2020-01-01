export default {
    /**
     * 判断是不是数组
     */
    isArrayLike: (param: any): boolean => {
        return {}.toString.apply(param).slice(8, -1) === 'Array';
    }
};
