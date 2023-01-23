


function bubbleSort(a) {
    let n = a.length
    for(let i = 0; i < n - 1; i++){
        let flag = 0
        for(let j = 0; j < n-1-i; j++){
            if(a[j] > a[j+1]){
                let temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
                flag = 1
            }
        }
        if(flag == 0){
            break
        }
    }
    console.log(a)
    return a 
}

bubbleSort([]) // []
bubbleSort([1]) // [1]
bubbleSort([3, 1, 2, 4]) // [1, 2, 3, 4]
bubbleSort([-10, 1, 3, 8, -13, 32, 9, 5]) // [-13, -10, 1, 3, 5, 8, 9, 32]



/*
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given an unsorted array, perform bubble sort in ascending order.

Examples:
• Given an array: [1] // returns [1]
• Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]

▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
🟦 Python
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
def bubbleSort(array: [int]) -> [int]:
    # Write your code here.
    pass

# Test Cases
print(bubbleSort([])) # []
print(bubbleSort([1])) # [1]
print(bubbleSort([3, 1, 2, 4])) # [1, 2, 3, 4]
print(bubbleSort([-10, 1, 3, 8, -13, 32, 9, 5])) # [-13, -10, 1, 3, 5, 8, 9, 32]

▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
🟨 Javascript
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
function bubbleSort(array) {
    // Write your code here.
    return [-1]
}

// Test Cases
console.log(bubbleSort([])) // []
console.log(bubbleSort([1])) // [1]
console.log(bubbleSort([3, 1, 2, 4])) // [1, 2, 3, 4]
console.log(bubbleSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]


🔎 EXPLORE
State your assumptions & discoveries:
- We will need to use two loops (nested)
- We may want an early return statement if array is <= 1 length 
- We will loop through each element of the array n-1 times 
- We will check to see if the index one position forward (i+1) is less than i 
- If it is we will swap these index values


Create examples & test cases:
([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]
[9,8,7,6,5,4,3,2,1] => [1,2,3,4,5,6,7,8,9]
[3,4,6,8,1,2,9] = > [1,2,3,4,6,8,9]
[0] => [0]
[] => [0]


🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: 
Time: 0(n2) worst case | 0(n) best case 
Space: 0(n)


📆 PLAN
High-level outline of approach #: 
- We will loop through each element of the array n-1 times 
- We will check to see if the index one position forward (i+1) is less than i 
- If it is we will swap these index values


🛠️ IMPLEMENT
function firstKTimes(array, k) {
def firstKTimes(arr: list[int], k: int) -> int:


🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

...
*/

// [4,3,2,1]
// [3,4,2,1]
//    ^ ^
// [3,2,4,1]
//       ^ ^
// [3,2,1,4] pass 1

// [2,1,3,4] pass 2


const _ = require('lodash');

function bubbleSort(a) {
    let n = a.length
    for (let i = 0; i <= n - 1; i++) {
        let flag = 0
        for (let j = 0; j < n - i; j++) {
            if (a[j] > a[j + 1]) { // if you switch any element in the iteration flag triggered
                let temp = a[j]
                a[j] = a[j + 1]
                a[j + 1] = temp
                flag = 1
            }
        }
        if (flag == 0) {
            break
        }
    }
    console.log(a)
    return a
}

bubbleSort([9,8,7,6,5,4,3,2,1]) // worst case 

bubbleSort([1,2,3,4,5,6,7,8,9]) // best case



// _.times(5, sayHello);

// sayHello()


// Your previous Plain Text content is preserved below:

// This is just a simple shared plaintext pad, with no execution capabilities.

// When you know what language you'd like to use for your interview,
// simply choose it from the dots menu on the tab, or add a new language
// tab using the Languages button on the left.

// You can also change the default language your pads are created with
// in your account settings: https://app.coderpad.io/settings

// Enjoy your interview!


// [5,6,45,99,13,5,6], k = 2
// [5,6]        [5,6]

// let left = array.slice(0,k) 
// let right = array.slice(array.length - k, array.length)

// if( left == right){
//   return true
// }