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
    addFront(value){
        var newNode = new SLLNode(value); // Create a new node containing this value
        newNode.next = this.head; // Connect the node to the list. the head of the list
        this.head = newNode; // Make this node the head of the list
        return this.head; // OR you can say return this
    }
}

var mySLL = new SLL(); // Starts us off with an empty list 
mySLL.addFront(18)
mySLL.addFront(5)
// mySLL.addFront(73)
console.log(mySLL)