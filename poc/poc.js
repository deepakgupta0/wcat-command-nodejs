let displayContent = require("../activity/commands/displayContent");
let lineNumberAll = require("../activity/commands/lineNumberAll");
let fs = require("fs");


let input = process.argv.slice(2);
let length = input.length;

//1,2
// displayContent.fn(input);

//4
// lineNumberAll.fn(input[0]);

//3
// require('fs').readFileSync(input[0], 'utf-8').split("\r\n").forEach(function(line){
//     if(line.length !=0)
//         console.log(line);
//   });


//5
// let count = 1; 
// require('fs').readFileSync(input[0], 'utf-8').split("\r\n").forEach(function(line){
//     if(line.length !=0)
//     {
//         console.log(count+"\t",line);
//         count+=1;
//     }
//   });



//6

// source to copy content
// const src = "D:/PAB/2_FILE_SYSTEM_WCAT/f1.txt";
// destination for copied content
// const dest = "copyFile.txt";

// use copyFile() function
// to copy contents from source file
// and write to destination file asynchronously
// fs.copyFile(src, dest, (error) => {
//   // incase of any error
//   console.log("Copied Successfully!");
//   if (error) {
//     console.error(error);
//     return;
//   }
// });

//7
    // fs.readFile("D:/PAB/2_FILE_SYSTEM_WCAT/f1.txt", { encoding: 'utf-8' }, function (err, data) {
    //     if (!err) {
    //         fs.appendFile('f2.txt', "\r\n"+data, function (err) {
    //             if (err) throw err;
    //             console.log('Updated!');
    //           });
    //     } else {
    //         console.log("File Does Not Exists");
    //     }
    // });



