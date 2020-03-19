"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
var tinify = require('tinify');
var fs = require('fs');
var exec = require('child_process').exec;
tinify.key = 'vJfXH7MwHynw2ZXFNQ9pPKbBng4FrmrD';
exports.default = {
    /**
     * 压缩jpg、png、jpeg
     * @param {number} srcFolder
     * @param {number} destFolder
     */
    compress: function (srcFolder, destFolder) {
        fs.readdir(srcFolder, function (err, files) {
            if (err) {
                console.error(err);
                return;
            }
            files.forEach(function (file) {
                var fileName = "" + srcFolder + file;
                var compressedFile = "" + destFolder + file;
                if (fileName.includes('.jpg') || fileName.includes('.png') || fileName.includes('.jpeg')) {
                    var source = tinify.fromFile(fileName);
                    source.toFile(compressedFile);
                }
            });
        });
        exec('echo  "\\033[32m compress success（tinify的toFile 和 readdir是异步的） !!! \\033[0m" ', function (error, stdout, stderr) {
            if (error) {
                console.error(error);
            }
            else {
                console.log(stdout);
            }
        });
    }
};
