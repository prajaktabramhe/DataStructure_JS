const stackFile = require('./StackLogic');

matchParentheses = exp => 
{
    arr = exp.toString().split("");
    let stack = new stackFile.Stack();
    arr.forEach(element => 
        {
        if (element == "(" || element == "[" || element == "{") 
        {
            stack.push(element);
        } 
        else if (element == ")" && stack.top.data == "(") 
        {
            stack.pop();
        } 
        else if (element == "]" && stack.top.data == "[") 
        {
            stack.pop();
        } 
        else if (element == "}" && stack.top.data == "{") 
        {
            stack.pop();
        }
    });
    stack.isEmpty();
    if (stack.size === 0) 
    {
        console.log("The Parentheses are Perfectly Matched !");
    } else {
        console.log("The Parentheses are MisMatched ");
    }
};
module.exports = { matchParentheses };
