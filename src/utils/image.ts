/* eslint-disable @typescript-eslint/no-var-requires */
const tinify = require('tinify');
const fs = require('fs');
const exec = require('child_process').exec;

tinify.key = 'vJfXH7MwHynw2ZXFNQ9pPKbBng4FrmrD';

export default {
    /**
     * 压缩jpg、png、jpeg
     * @param {number} srcFolder
     * @param {number} destFolder
     */
    compress: (srcFolder: string, destFolder: string): void => {
        fs.readdir(srcFolder, (err, files) => {
            if (err) {
                console.error(err);
                return;
            }

            files.forEach((file) => {
                const fileName = `${srcFolder}${file}`;
                const compressedFile = `${destFolder}${file}`;
                if (fileName.includes('.jpg') || fileName.includes('.png') || fileName.includes('.jpeg')) {
                    const source = tinify.fromFile(fileName);
                    source.toFile(compressedFile);
                }
            });
        });
        exec('echo  "\\033[32m compress success（tinify的toFile 和 readdir是异步的） !!! \\033[0m" ', function(error, stdout, stderr) {
            if (error) {
                console.error(error);
            } else {
                console.log(stdout);
            }
        });
    }
};
