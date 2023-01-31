/*
...
🔎 EXPLORE
State your assumptions & discoveries:
We need to iterate through the linked list with a while loop, each time adding the current.val to the accumulator / sum
When we reach the end of the linked list the node's next will be null and the loop will break, then we will return sum.
Questions for interviewer: If we are provided just the head what should we return?
If we are provided a value that is not an int what should we do?


Create examples & test cases:
console.log(sum(null)) // 0
console.log(sum(LL1)) // 10
console.log(sum(new ListNode(1))) // 1
console.log(sumLinkedList(new Node(80, new Node(40, new Node(80, new Node(5)))))) // 205
console.log(sumLinkedList("yes")) we can assume we are provided all integers


🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: Iterate through the linked list with an accumulator adding each node's val, then return sum.
Time: 0(n)
Space: 0(1)


📆 PLAN
High-level outline of approach #: 
- We will use a while loop checking to see while current !== null
- With a variable sum held outside of this loop, each time this loop runs we will accumulate the sum by adding this.val to the sum
- When the while loop breaks from the node.next being null we will return the accumulated sum


🛠️ IMPLEMENT
See below

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
...

▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given a linked list, sum all elements in the list.

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 // returns 10
• Given a linked list: 1 // returns 1

▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
🟦 Python
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
class ListNode:
    def __init__(self, value = 0, next = None): 
        self.value = value
        self.next = next
        
def sum(node: ListNode) -> int:
    # Write your code here.
    pass

# Test Cases
LL1 = ListNode(1, ListNode(4, ListNode(5)))
print(sum(None)) # 0
print(sum(LL1)) # 10
print(sum(ListNode(1))) # 1

▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
🟨 Javascript
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function sum(node) {
    // Write your code here.
    return -1
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(sum(null)) // 0
console.log(sum(LL1)) // 10
console.log(sum(new ListNode(1))) // 1
*/

class Node {
    constructor(val = 0, next = null) {
        this.val = val
        this.next = next
    }
}

function sumLinkedList(head){
    let current = head
    let sum = 0
    while(current !== null){
        sum += current.val
        // console.log(current.val, sum)
        current = current.next
    }
    return sum
}

var LL1 = new Node(1, new Node(4, new Node(5)))
console.log(sumLinkedList(LL1)) // 10
console.log(sumLinkedList(null)) // 0
console.log(sumLinkedList(new Node(1))) // 1
console.log(sumLinkedList(new Node(80, new Node(40, new Node(80, new Node(5)))))) // 205
// console.log(sumLinkedList("yes")) we can assume we are provided all integers