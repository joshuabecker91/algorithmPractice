

// CORRECT 75ms 49.9mb
var maxSubArray = function(nums) {
    // Initialize the max sum...
    let maxSum = nums[0];
    let currentSum = nums[0];
    // Traverse all the element through the loop...
    for (let i = 1; i < nums.length; i++) {
        // nums[i] represents the largest sum of all subarrays ending with index i...
        // then its value should be the larger one between nums[i]...
        // nums[i-1] + nums[i] (largest sum plus current number with using prefix)...
        // calculate nums[0], nums[1]…, nums[n] while comparing each one with current largest sum...
        currentSum = Math.max(0, currentSum) + nums[i];
        // nums[i] = Math.max(0, nums[i - 1]) + nums[i];
        // if nums[i] > maxSum then maxSum = nums[i]...
        if (currentSum > maxSum)
            maxSum = currentSum;
    }
    return maxSum;      // return the contiguous subarray which has the largest sum...
};

maxSubArray([-2,  1,  -3,  4,  -1,  2,  1,  -5,  4])



// CORRECT 145ms 50 mb
// var maxSubArray = function (nums) {
//     if (nums.length == 1) {
//         return nums[0]
//     }
//     let maxSum = -Infinity
//     let currentSum = 0

//     for (let i = 0; i < nums.length; i++) {
//         if (currentSum < 0) {
//             currentSum = 0
//         }
//         currentSum += nums[i]
//         console.log("maxSum:", maxSum, "     currentSum:", currentSum, "      nums[i]", nums[i])
//         maxSum = Math.max(currentSum, maxSum)
//     }
//     return maxSum
// }


// -2,1,-3,4,-1,2,1,-5,4
// -2
// -2,1
// -2,1,-3

// 1,-3



// //CORRECT BUT TIMES OUT 200/209 test cases
// var maxSubArray = function(nums) {
//     let max = nums[0];
//     if(nums.length == 1){
//         return nums[0]
//     }
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i; j < nums.length; j++){
//             let subarray = nums.slice(i,j+1)
//             // console.log(subarray)
//             let x = subarray.reduce((a,b) => a+b)
//             // console.log(x)
//             if(x > max){
//                 max = x
//             }
//         }
//     }
//     // console.log(max)
//     return max
// };






// var maxSubArray = function(nums) {
//     let max = nums[0];
//     if(nums.length == 1){
//         return nums[0]
//     }
//     let j = 0
//     for(let i = 0; i < nums.length; i++){
//         let subarray = nums.slice(i,j+1)
//         // console.log(subarray)
//         let x = subarray.reduce((a,b) => a+b)
//         // console.log(x)
//         if(x > max){
//             max = x
//         }
//         if(i == nums.length-1)

//         }

//     }
//     // console.log(max)
//     return max
// };

// // maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
// maxSubArray([-2,-1])


// if(j < nums.length){
//     j++
//     i--
// }
// else {
//     j = i
// }


// if(i == nums.length-1){
//     i = 0
//     j++
// }
// if(j == nums.length){
//     break
// }


// 1,2,3,4,5

//         // if (i == nums.length -1)
//         // i = 0
//         // j++
// 1
// 12
// 123
// 1234
// 12345


// 2
// 23
// 234
// 2345
// 3
// 34
// 345
// 4
// 45
// 5