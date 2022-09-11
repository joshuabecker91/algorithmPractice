class SLLNode { //Singly-linked list node class
    constructor(val){
        this.value = val; //Holds value for this node
        this.next = null; //Pointer to the next node
    }
}

class SLL { // The signly-linked list class itself
    constructor(){ // Will start with no nodes
        this.head = null; // Head points to first node
    }

    // All methods built into your class go here

    // This adds a node to the front of the list
    addFront(value){
        var newNode = new SLLNode(value); // Create a new node containing this value
        newNode.next = this.head; // Connect the node to the list. the head of the list
        this.head = newNode; // Make this node the head of the list
        return this.head; // OR you can say return this
    }

    // This removes a node from the front of the list
    removeFront(){
        if(this.head == null){ // edge case: If the list is empty, nothing to remove
            return this.head;
        }
        var removedNode = this.head; // Have a variable that will hold the node we'll remove
        this.head = removedNode.next; // Moves the head of the list to the 2nd node, which will become the new head
        removedNode.next = null; // Redirect the removed node to null
        return this.head;
    }

    front(){
        if (this.head == null){
            return null;
        } else {
            // console.log(this.head.value);
            return this.head.value;
        }
        // alternatively we can use a ternary operator to shorthand this syntax
        // return this.head ? this.head.value : null;
    }

    // Display all value of all the nodes in the list 
    display(){
        var listStr = ""; // empty string that will contain the values of the list 
        if(this.head ==null){ // edge case: list is empty
            return "";
        }
        // if we have at least one node
        listStr += this.head.value; //concatenates the first value in the list
        // for the second nose onwards, we'll add "," + value;
        var runner = this.head.next;
        while (runner != null){
            listStr += "," + runner.value; // add the node's value to the list
            runner = runner.next; //move the runner to the next node
        }
        // console.log(listStr);
        return listStr;
    }

}

var mySLL = new SLL(); // Starts us off with an empty list 
mySLL.addFront(18)
mySLL.addFront(5)
mySLL.addFront(73)
console.log(mySLL);
// console.log(mySLL.head.next); // This would give us the second node

mySLL.removeFront();
console.log(mySLL);

// mySLL.front();
console.log(mySLL.front());

// mySLL.display()
console.log(mySLL.display());