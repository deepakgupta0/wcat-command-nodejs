let fs = require("fs");
let path = require("path");

let input = process.argv.slice(2);
let length = input.length;

// let currentWorkingDirectory = process.cwd();

// let path_string = path.join(currentWorkingDirectory,"f6.txt");
// console.log(fs.lstatSync(path_string).isFile());

let txt = require("./commands/txt");
let minusB = require("./commands/minusB");
let minusN = require("./commands/minusN");
let minusS = require("./commands/minusS");
let putContents = require("./commands/putContents");
let appendContents = require("./commands/appendContents");
// console.log(path.extname(input[0]).length != 0);

if(input[0] == '-s')
{
    minusS.fs(input);
}
else if(input[0] == '-n')
{
    
    minusN.fs(input[1]);
}
else if(input[0] == '-b')
{
    minusB.fs(input[1]);
}
else if(input[0].includes('>>'))
{
    appendContents.fs(input);
}
else if(input[0].includes('>'))
{
    putContents.fs(input);
}
else if(path.extname(input[0]).length != 0)
{
    //problem solved 1 and 2 
    txt.fs(input);
}
else
{
    console.log("wrong command");
}