"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    isArrayLike: function (param) {
        return {}.toString.apply(param).slice(8, -1) === 'Array';
    }
};
