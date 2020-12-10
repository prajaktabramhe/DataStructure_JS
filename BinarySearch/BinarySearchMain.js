let BinarySearch = require('./BinarySearchBusinessLogic');
let readline = require('readline-sync');
let array = new Array();
let arraySize = readline.question("Enter the size of the array : ");

for(let i=0;i<arraySize;i++)
{
let arrayElement = readline.question("Enter the array element : ");
array.push(arrayElement);
}

array.sort(); // in binary search array needs to be sorted befiore search 
console.log(array); 

let binarysearchobject = new BinarySearch();
let search = readline.question("Enter the element to serach in the array: ");

if (binarysearchobject.searchFun(array, search)) //this function return true or false 
{
    console.log("Element found!"); 
}
else
{ 
    console.log("Element not found!"); 
}