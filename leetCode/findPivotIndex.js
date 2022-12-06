

// 100% test cases
var pivotIndex = function(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        const right = sum - left - nums[i];
        if (left === right) {
            return i;
        }
        left += nums[i];
    }
    return -1;
};

pivotIndex([-1,-1,0,1,1,0])



// 649 / 745 test cases
// var pivotIndex = function(nums) {
//     let sum = nums.reduce((a,b) => a+b)
//     let a = 0
//     let b = sum
//     for(let i = -1; i < nums.length; i++){
//         if(i >= 0){
//             a += nums[i]
//             b = sum - a + nums[i]
//         }
//         console.log(a, b)
//         if(a == b){
//             console.log("yes equal", i)
//             return i
//         }
//     }
//     // console.log("not equal")
//     return -1
// };

// pivotIndex([2,1,-1])



// Close but not working for 0 base index
// var pivotIndex = function(nums) {
//     for(let i = 0; i < nums.length-1; i++){
//         let a = nums.slice(0,i)
//         let b = nums.slice(i+1,nums.length+1)
//         aSum = a.reduce((a,b) => a+b)
//         bSum = b.reduce((a,b) => a+b)
//         console.log(aSum, bSum)
//         if(aSum == bSum){
//             // console.log("yes equal", i)
//             return i
//         }
//     }
//     // console.log("not equal")
//     return -1
// };

// pivotIndex([1,7,3,6,5,6])


