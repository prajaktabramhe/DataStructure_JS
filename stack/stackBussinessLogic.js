var readlineSync = require('readline-sync');
let stack = require('./stackMain')

function stackOperations(userInput)
{
    switch(userInput)
    {
        case "1":
            let element = readlineSync.question("Enter Number to Push: ");
            stackobj.push(element);
            break;
        case "2":
            console.log(stackobj.pop());
            break;
        case "3":
            console.log(stackobj.display());
            break;
        default:
            console.log("Invalid Choice");
            break;
    }
}
var  stackobj = new stack; //object
let i=0;
while(i==0)
{
    console.log("1.Push a Number into Stack");
    console.log("2.Pop the Number from Stack");
    console.log("3.Display Stack");
    console.log("4.Exit");
    let userInput = readlineSync.question("Enter your Choice: ");
    if(userInput==4)
    {
        i=1;
    }
    else
    {
        stackOperations(userInput);
    }
}