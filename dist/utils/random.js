"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    integer: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    shuffle: function (originArr) {
        var _a;
        var arr = originArr.slice(0);
        for (var index = arr.length - 1; index >= 0; index--) {
            var randomIndex = Math.floor(Math.random() * (index + 1));
            _a = [arr[randomIndex], arr[index]], arr[index] = _a[0], arr[randomIndex] = _a[1];
        }
        return arr;
    }
};
