

// CORRECT WORKS FOR 100%
var removeElements = function(head, val) {
    if (!head) return head;
	// if head is the value were deleting and if there is any repetition lets handle that case first otherwise we'll just break out of the loop
    while(head) {
        if(head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }
	// skip any nodes whos values match the parameters and set it to the node after
	// if the node is found, set runner.next to the node after it then try again
	// otherwise iterate forward
    let runner = head;
    while(runner && runner.next) {
        if (runner.next.val === val){
            runner.next = runner.next.next;
        } else {
            runner = runner.next;
        }
    }
    return head;
};


// Setting up to run in vs code testing
// // Definition for singly-linked list.
// class ListNode {
//     constructor(val, next) {
//         this.val = (val === undefined ? 0 : val);
//         this.next = (next === undefined ? null : next);
//     }
// }

// class SLL { // The signly-linked list class itself
//     constructor(){ // Will start with no nodes
//         this.head = null; // Head points to first node
//     }
    
//     addFront(value){
//         var newNode = new ListNode(value); // Create a new node containing this value
//         newNode.next = this.head; // Connect the node to the list. the head of the list
//         this.head = newNode; // Make this node the head of the list
//         return this.head; // OR you can say return this
//     }

//     removeElements(val) {
//         if (!this.head) return head;
        
//         while(this.head) {
//             if(this.head.val === val) {
//                 this.head = this.head.next;
//             } else {
//                 break;
//             }
//         }
        
//         let runner = this.head;
//         while(runner && runner.next) {
//             if (runner.next.val === val){
//                 runner.next = runner.next.next;
//             } else {
//                 runner = runner.next;
//             }
//         }
//         console.log(this.head)
//         return this.head;
//     };
// }

// let abc = new SLL()

// abc.addFront(1)
// abc.addFront(2)
// abc.addFront(6)
// abc.addFront(3)
// abc.addFront(4)
// abc.addFront(5)
// abc.addFront(6)

// abc.removeElements(6)



