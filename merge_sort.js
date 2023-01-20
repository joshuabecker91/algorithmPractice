/*
...
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given an unsorted array, perform merge sort in ascending order.

Examples:
• Given an array: [1] // returns [1]
• Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]


🔎 EXPLORE
State your assumptions & discoveries:
- I need to learn this from scratch. I watched Jenny's 35 minute video twice and I really understand the merging part but
- I am still confused on the recursive call and the slice / splitting of left and right of the arrays
- This will be n(logn)

Create examples & test cases:
[3,7,6,2,8,9,1,4,5] = > [1,2,3,4,5,6,7,8,9]


🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: 
Time: O(nLogn)
Space: 0(n)


📆 PLAN
High-level outline of approach #: 
- We split the array in half by creating a mid variable over and over until we have one index length sub arrays
- We do this using recursion
- Then we merge the sub arrays by setting the index of a new array to i and j pointers of left and right arrays depending on > and < until i and j reach outside of their bounds mid, ub
- We set the remaining index positions once i or j reaches out of bounds.


🛠️ IMPLEMENT
function firstKTimes(array, k) {
def firstKTimes(arr: list[int], k: int) -> int:


🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).


▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
🟦 Python
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
def mergeSort(array: [int]) -> [int]:
    # Write your code here.
    pass

# Test Cases
print(mergeSort([])) # []
print(mergeSort([1])) # [1]
print(mergeSort([3, 1, 2, 4])) # [1, 2, 3, 4]
print(mergeSort([-10, 1, 3, 8, -13, 32, 9, 5])) # [-13, -10, 1, 3, 5, 8, 9, 32]


▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
🟨 Javascript
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
function mergeSort(array) {
    // Write your code here.
    return [-1]
}

// Test Cases
console.log(mergeSort([])) // []
console.log(mergeSort([1])) // [1]
console.log(mergeSort([3, 1, 2, 4])) // [1, 2, 3, 4]
console.log(mergeSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]
...
*/



// Notes:

// function mergeArrays(a) {
//     if (a.length < 2) {
//         return nums;
//     }

//     let i = 0
//     let mid = Math.floor((a.length-1)/2)
//     let j = mid + 1
//     let ub = a.length-1
//     let b = new Array(a.length).fill(0)
//     let k = 0
//     // console.log(b)
//     // console.log(mid)
//     // console.log(a.length-1)
//     while(i <= mid && j <= ub){
//         if(a[i] < a[j]){
//             b[k] = a[i]
//             i++
//         } else {
//             b[k] = a[j]
//             j++
//         }
//         k++
//     }
//     if(i > mid){
//         while(j <= ub){
//             b[k] = a[j]
//             j++
//             k++
//         }
//     } else {
//         while(i <= mid){
//             b[k] = a[i]
//             i++
//             k++
//         }
//     }
//     console.log(b)
//     return b
//     // return [-1]
// }

// mergeSort([3, 1, 2, 4])



function mergeSortedArray(left,right,arr) {
    let i = 0;
    let j = 0;
    let k = 0;

    while(i<left.length && j<right.length) {
        if(left[i] <= right[j]) {
            arr[k] = left[i];
            i++
        }
        else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while(j < right.length) {
        arr[k] = right[j];
        j++;
        k++
    }

    while(i < left.length) {
        arr[k] = left[i];
        k++;
        i++;
    }

    return arr;
}

var sortArray = function(arr) {
    if(arr.length < 2) {
        return arr;
    }

    let mid = Math.round(arr.length/2);
    let left = [];
    let right = [];

    for(let i=0;i<mid;i++) {
        left.push(arr[i]);
    }

    for(let j = mid;j<arr.length;j++) {
        right.push(arr[j]);
    }

    sortArray(left);
    sortArray(right);
    mergeSortedArray(left,right,arr);

    return arr;
};

// sortArray([3, 1, 2, 4])
console.log(sortArray([3,7,6,2,8,9,1,4,5]))


console.log(sortArray([])) // []
console.log(sortArray([1])) // [1]
console.log(sortArray([3, 1, 2, 4])) // [1, 2, 3, 4]
console.log(sortArray([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]
















// Notes from someone else's leetcode below:

// function mergeSort(a) {
    // early return if array has only one element or if it is empty

    // const mid = Math.floor(a.length/2);
    // let left = mergeSort(a.slice(0,mid));
    // let right = mergeSort(a.slice(mid, a.length))

    // return mergeArrays(a);
// }


// function mergeSort(a){
//     // base case.
//     if (nums.length <= 1) return nums;
    
//     // divide the array into 2 sub-arrays.
//     const mid = Math.floor(nums.length / 2);
    
//     // slice into 2 sub-arrays.
//     const leftArr = nums.slice(0, mid);
//     const rightArr = nums.slice(mid);

//     // recursively merge-sort each of the arrays.
//     const leftSorted = mergeSort(leftArr);
//     const rightSorted = mergeSort(rightArr);
    
//     // sort and merge.
//     return sort(leftSorted, rightSorted);
// }