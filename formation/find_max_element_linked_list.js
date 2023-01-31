/*
...
🔎 EXPLORE
State your assumptions & discoveries:
- We are provided a linked list and we want to find the highest value
- We will perform the iterative approach, where we iterate through using a while loop checking to see if the current / pointer is not null
- If the current.val > max we will reset the max variable which will be held outside of this loop in order to maintain its value
- When we reach a node that is null / the end of the list, this loop will break and we will return the max varable

Create examples & test cases:
console.log(findMaxLinkedList(new Node(1, new Node(2, new Node(3, new Node(4, new Node(5))))))) // 15
console.log(findMaxLinkedList(null)) // 0
console.log(findMaxLinkedList(new Node(1))) // 1
console.log(findMaxLinkedList(new Node(0))) // 0
console.log(findMaxLinkedList(new Node(100, new Node(900)))) // 1000


🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: We will iterate through the linked list maintaining a max variable and resetting it any time the current.val > max
Time: 0(n) We will iterate through the entire list (n items/times)
Space: 0(1)


📆 PLAN
High-level outline of approach #: 
- We will iterate through the linked list using a while loop. While the current.val is not equal to null we will check current.val
- If current.val is greater than the max we will reassign the max variable to be equal to current.val
- Once this loops breaks when current.next is equal to null we will then return max


🛠️ IMPLEMENT
See below


🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).


▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given an unsorted linked list, find the element with the largest value.

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 ➞ 1 // returns 5
• Given a linked list: 1  // returns 1

▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
🟦 Python
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
class Node:
    def __init__(self, value = 0, next = None): 
        self.value = value
        self.next = next
        
def findMax(node: Node) -> int:
    # Write your code here.
    pass

# Test Cases
LL1 = Node(1, Node(4, Node(5, Node(1))))
LL2 = Node(7, Node(1, Node(5, Node(1))))
LL3 = Node(-1, Node(-3, Node(-5, Node(0, Node(-11)))))
print(findMax(LL1)) # 5
print(findMax(LL2)) # 7
print(findMax(LL3)) # 0
print(findMax(Node(1))) # 1

▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
🟨 Javascript
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
class Node {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}
        
function findMax(node) {
    // Write your code here.
    return -1
}

// Test Cases
var LL1 = new Node(1, new Node(4, new Node(5, new Node(1))))
var LL2 = new Node(7, new Node(1, new Node(5, new Node(1))))
var LL3 = new Node(-1, new Node(-3, new Node(-5, new Node(0, new Node(-11)))))
console.log(findMax(LL1)) // 5
console.log(findMax(LL2)) // 7
console.log(findMax(LL3)) // 0
console.log(findMax(new Node(1))) // 1

...
*/

class Node {
    constructor(val = 0, next = null) {
        this.val = val
        this.next = next
    }
}

function findMaxLinkedList(head) {
    let max = -Infinity
    let current = head
    while(current !== null){
        if(current.val > max){
            max = current.val
        }
        current = current.next
    }
    return max
}

var LL1 = new Node(1, new Node(4, new Node(5, new Node(1))))
var LL2 = new Node(7, new Node(1, new Node(5, new Node(1))))
var LL3 = new Node(-1, new Node(-3, new Node(-5, new Node(0, new Node(-11)))))
console.log(findMaxLinkedList(LL1)) // 5
console.log(findMaxLinkedList(LL2)) // 7
console.log(findMaxLinkedList(LL3)) // 0
console.log(findMaxLinkedList(new Node(1))) // 1

// More Test Cases
console.log(findMaxLinkedList(new Node(1, new Node(2, new Node(3, new Node(4, new Node(5))))))) // 5
console.log(findMaxLinkedList(null)) // -Infinity (null)
console.log(findMaxLinkedList(new Node(1))) // 1
console.log(findMaxLinkedList(new Node(0))) // 0
console.log(findMaxLinkedList(new Node(100, new Node(900)))) // 900