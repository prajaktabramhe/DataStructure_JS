class stack
{
    constructor()
    {
        this.arr =[];
    }
    push(element) 
    { 
        // push element into the items 
        this.arr.push(element); 
    } 
    pop() //pop function
    { 
        // return top most element in the stack 
        // and removes it from the stack 
        // Underflow if stack is empty 
        if (this.arr.length == 0) 
            return "Stack is Underflow"; 
        return this.arr.pop(); 
    } 
    display() 
    { 
        var str = ""; 
        for (var i = 0; i < this.arr.length; i++) 
            str += this.arr[i] + " "; 
        return str; 
    } 

}
module.exports = stack;