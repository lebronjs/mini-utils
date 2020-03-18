declare namespace miniUtilsTs {
    interface Random {
        /**
         * 返回指定范围随机整数
         * @param {number} min
         * @param {number} max
         * @returns {Number} 随机整数 between[min,max]
         */
        integer(min: number, max: number): number;
    }

    class Utils {
        random: Random;
    }
}

declare module 'mini-utils-ts' {
    export default miniUtilsTs.Utils;
}
