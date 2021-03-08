const fs = require('fs');




function display(fileNamePathArray) {
    // console.log("Inside display");    
    // Use fs.readFile() method to read the file 
    fileNamePathArray.forEach(element => {

        fs.readFile(element, { encoding: 'utf-8' }, function (err, data) {
            if (!err) {
                console.log(data);
            } else {
                console.log("File Does Not Exists");
            }
        });
    });
}


module.exports = {
    fs: display
}