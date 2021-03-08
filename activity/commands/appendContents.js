const fs = require('fs');
const path = require('path');



function appendContents(inputArray) {
    // console.log("Inside display");    
    // Use fs.readFile() method to read the file 
    let srccommadest =  inputArray[0].split(">>");

    let currentWorkingDirectory = process.cwd();

    console.log(srccommadest);
    
    // source to copy content
    const src = path.join(currentWorkingDirectory, srccommadest[0].trim());
    // destination for copied content
    const dest = srccommadest[1].trim();

        fs.readFile(src, { encoding: 'utf-8' }, function (err, data) {
        if (!err) {
            fs.appendFile(dest, data, function (err) {
                if (err) throw err;
                console.log('Updated!');
              });
        } else {
            console.log("File Does Not Exists");
        }
    });

}

module.exports = {
    fs: appendContents
}