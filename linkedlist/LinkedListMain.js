const readline = require('readline-sync');
const LinkedList = require('./LinkedListBussinessLogic');

//choice is taken to stop the program. i.e to come out of infinite loop
let choice = true;

//creating the object of class LinkedList
let Newlist = new LinkedList();

while (choice) 
{

    //userinput to select the option in menu    
    console.log("1.addNode");
    console.log("2.addFirst");
    console.log("3.addLast");
    console.log("4.addAtPosition");
    console.log("5.display list" ); 
    console.log("6.deleteFirst");
    console.log("7.deleteLast");
    console.log("8.deleteatPosition");
    console.log("9.search");
    console.log("10.sizeOfLinkedList");
    console.log("11.exit");
    let Input = readline.questionInt("enter choice : ");


    switch (Input) 
    {
        // case 1 is for adding the node
        case 1:
            let addNodeInput = readline.questionInt("Insert element to add into linkedlist: ");
            console.log(Newlist.addNode(addNodeInput));
            break;

        // case 2 is for adding the element to first position
        case 2:
            let addFirstInput = readline.questionInt("Insert a  element to insert at first posiion to linkedlist: ");
            console.log(Newlist.addFirst(addFirstInput));
            break;

        //case 3 is adding element to last of the linkedlist
        case 3:
            let addLastInput = readline.questionInt("Insert a  element to insert at last posiion to linkedlist: ");
            console.log(Newlist.addLast(addLastInput));
            break;

        //case 4 is for adding element at particular index
        case 4:
            let addIndexInput = readline.questionInt("Insert a  index to insert a element in linkedlist: ");
            let addElementInput = readline.questionInt(`Insert a  element to insert at ${addIndexInput} in linkedlist: `);
            console.log(Newlist.addAtPosition(addElementInput, addIndexInput));
            break;
        //case 5 is for printing the linkedlist
        case 5:
            console.log(" The prsent linkedlist is: " + Newlist.display());
            break;
        //case 6 is for deleteFirst means deleting first element in list
        case 6:
            console.log("First element is deleted from the list " + Newlist.deleteFirst());
            break;
        //case 7 is for deleteLast means deleting last element  in list which points towards the tail
        case 7:
            console.log("Last element is deleted from the list " + Newlist.deleteLast());
            break;
        //case 8 is for deleting the input element from linkedlist
        case 8:
            let delteIndexInput = readline.questionInt("Insert a  index to delete a element in linkedlist: ");
            console.log(Newlist.deleteAtPosition(delteIndexInput));
            break;
        case 9:
            let Key = readline.questionInt("Insert a  number to be searched: ");
            console.log(Newlist.search(Key));
            break;
        case 10:
            console.log("The length of current linkedlist is: ")
            console.log(Newlist.length());
            break;

        case 11:
            choice = false;
            process.exit(1);
            break;

        default:
            console.log("Invalid option");
            break;

    }
}
