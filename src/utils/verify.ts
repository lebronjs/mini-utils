export default {
    isArrayLike: (param: any): boolean => {
        return {}.toString.apply(param).slice(8, -1) === 'Array';
    }
};
