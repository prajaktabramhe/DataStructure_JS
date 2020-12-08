let Queue = require('./QueueBussinessLogic');    
let readline = require('readline-sync');
let flag = true;

function choice()
{
    while (flag == true)
    {
        console.log("1: Enqueue");
        console.log("2 : Dequeue");
        console.log("3 : PrintQueue");
        console.log("4 : Exit");

        console.log("Enter 1 : Enqueue  2 : Dequeue  3 : PrintQueue");
            let input = readline.question("Enter your choice from above : ");
    
        switch (input) 
        {
        case "1":
        let element = readline.question("Enter the number to add in the Queue : ");
        queue.enqueue(element);
        break;

        case "2":
        queue.dequeue();
        break;
                
        case "3":
        queue.printQueue();
        break;
                        
        default:
        flag = false;
        console.log("Exit"); 
       }    
    }
}
let queue = new Queue();
choice();