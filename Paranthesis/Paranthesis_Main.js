//In this file we give input as expression

const MatchPar = require("./ParanthesisBussinessLogic");
let readline = require("readline-sync");
let exp = readline.question("Enter the expression: ");
MatchPar.matchParentheses(exp);
