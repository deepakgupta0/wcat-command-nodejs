let fs = require('fs');
let currentWorkingDirectory = process.cwd();
let path = require('path');
let putContents = require('./putContents')

function minusS(fileNameArray) {
    // console.log("minusS");
    console.log(fileNameArray);


    let finalString = "";
    let fileplusdir = "";
    let src ="";
    let dest ="";

    if (!fileNameArray[1].includes('>')) {
        fileplusdir = path.join(currentWorkingDirectory, fileNameArray[1]);
        fs.readFileSync(fileplusdir, 'utf-8').split("\r\n").forEach(function (line) {
            if (line.length != 0) {
                finalString = finalString +line+"\r\n";
                if (!fileNameArray[1].includes(">")) {
                    console.log(line);
                }
            }
        });
    }
    else {
        let srccommadest = fileNameArray[1].split(">");
        // source to copy content
         src = path.join(currentWorkingDirectory, srccommadest[0].trim());
        // destination for copied content
         dest = srccommadest[1].trim();

         fs.readFileSync(src, 'utf-8').split("\r\n").forEach(function (line) {
            if (line.length != 0) {
                finalString = finalString+  line + "\r\n";
            }
        });
        fs.writeFile(dest, finalString, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });

    }





}


module.exports = {
    fs: minusS
}

