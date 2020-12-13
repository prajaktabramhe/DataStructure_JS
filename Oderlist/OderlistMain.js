
const fs = require('fs');
const linkedList = require('./OderlistBusinessLogic');
const readline = require("readline-sync");
let filedata = fs.readFileSync('ReadFile.txt');
console.log("Numbers data read from file: " + filedata);
searchNumber = readline.question("Enter a number to search: ");
linkedList.orderedList(filedata, searchNumber);    