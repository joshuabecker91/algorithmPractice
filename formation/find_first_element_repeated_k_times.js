/*
...
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given an array of positive integers, find the first element that occurs k number of times. 
If no element occurs k times, return -1, and you may assume k is greater than 0. 

Examples:
• Given an array: [1, 2, 2, 3, 3], k: 2 // returns 2
• Given an array: [], k: 1 // returns -1


🔎 EXPLORE
State your assumptions & discoveries:
The best way to do this is by counting how many occurances by using a new Array or by using a hashmap
if we do not find an element k times we will return -1 based on instructions
what if k is not provided, shall we have an early return to account for this? No, k is guarenteed to be provided and > 0

Create examples & test cases:
firstKTimes([1, 2, 2, 3, 3], 2) // returns 2
firstKTimes([], 1) // returns -1
firstKTimes([2,4,6,2,4], 2) // returns 2
firstKTimes([7,2,7,4,7,6,2,4], 3) // returns 7


🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: I will proceed with using a hashmap since it is most flexible and reasonable efficient. 
- If I find an element k time I will immediately return it.
Time: 0(n)
Space: 0(n)


📆 PLAN
High-level outline of approach #: 
We want to count how many times an item appears in an array. We could create a new empty array if we had a constraint 
that each index would be less than a reasonably low value. Since we do not know how high the values could be we should use a hashmap.
This will allow us to store the key in the hashmap each time we have an occurance regardless of what the value is and
increment each time we find another value that is already stored in the hashmap to count the total. We can check the value
of that key value pair and if it has reached k for its count we can immediately return it.


🛠️ IMPLEMENT
function firstKTimes(array, k) {
def firstKTimes(arr: list[int], k: int) -> int:


🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
🟨 Javascript
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
...
*/


function firstKTimes(array, k) {
    let h = {}
    for(let i = 0; i < array.length; i++){
        const x = array[i]
        if(h[x]){
            h[x]++
            if(h[x] >= k){
                return x
            }
        } else {
            h[x] = 1
        }
    }
    return -1
}

// Test Cases
console.table([
    firstKTimes([1, 2, 2, 3, 3], 2), // returns 2
    firstKTimes([], 1), // returns -1
    firstKTimes([2,4,6,2,4], 2), // returns 2
    firstKTimes([7,2,7,4,7,6,2,4], 3) // returns 7
])

// More Test Cases
console.log(firstKTimes([1, 2, 2, 3, 3], 2)) // 2
console.log(firstKTimes([1, 2, 2, 3, 3], 3)) // -1
console.log(firstKTimes([], 1)) // -1

