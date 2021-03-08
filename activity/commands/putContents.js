let fs = require('fs');
let path = require('path');

// [ 'filename > filename2' ]
function putContents(inputArray,data) {

    let srccommadest =  inputArray[0].split(">");

    let currentWorkingDirectory = process.cwd();

    // source to copy content
    const src = path.join(currentWorkingDirectory, srccommadest[0].trim());
    // destination for copied content
    const dest = srccommadest[1].trim();

    // console.log(src);
    // console.log(dest);


    // use copyFile() function
    // to copy contents from source file
    // and write to destination file asynchronously
    
    fs.copyFile(src, dest, (error) => {
        // incase of any error
        console.log("Copied Successfully!");
        if (error) {
            console.error(error);
            return;
        }
    });

}


module.exports = {
    fs:putContents
}






