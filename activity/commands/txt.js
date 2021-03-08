let fs = require('fs');
let currentWorkingDirectory = process.cwd();
let path = require('path');

function txt(fileNamePathArray) {
    // console.log(fileNamePathArray);


    fileNamePathArray.forEach(element => {

        fs.readFile(path.join(currentWorkingDirectory,element), { encoding: 'utf-8' }, function (err, data) {
            if (!err) {
                console.log(data);
            } else {
                console.log("File Does Not Exists");
            }
        });
    });
}


module.exports = {
    fs:txt
}