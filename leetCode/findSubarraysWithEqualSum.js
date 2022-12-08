

var findSubarrays = function(nums) {
    for(let i = 0; i < nums.length; i++){
        let x = nums[i] + nums[i+1]
        for(let j = i+1; j < nums.length; j++){
            let y = (nums[j] + nums[j+1])
            console.log(x, y)
            if(x === y){
                // console.log(true)
                return true
            }
        }
    }
    // console.log(false)
    return false
};

findSubarrays([1,2,3,4,5])


// CORRECT 100% test cases
// var findSubarrays = function(nums) {
//     // iterate through an array summing pairs with each iteration
//     // Compair sums to proceeding sums of pairs
//     let isEqualPair = false;
//     let sum = 0;

//     for (let i=0; i< nums.length-1; i++) {
//         sum = nums[i] + nums[i+1];
//         let compair = 0;
//         let isEqual = false;
//         // console.log("SUM:", sum);
//         for (let j=i+1; j< nums.length-1; j++) {
//             compair = nums[j] + nums[j+1]
//             // console.log("SUM:", sum, "COMPAIR:", compair);
//             if (sum === compair) {
//                 isEqual = true;
//                 break;
//             }
//         }
//         if (isEqual === true) {
//             isEqualPair = true;
//             break;
//         }
//     }
//     return isEqualPair;
// };





// var findSubarrays = function(nums) {
//     let sums = []
//     for(let i = 0; i < nums.length; i++){
//         let x = nums[i] + nums[i+1]
//         for(let j = i+1; j < nums.length; j++){
//             let y = (nums[i] + nums[j])
//             // console.log(x)
//             if(sums.includes([x,nums[i],nums[j]])){
//                 console.log(true)
//                 return true
//             } else {
//                 sums.push([x,nums[i],nums[j]])
//             }
//             console.log(sums)
//         }
//     }
//     console.log(false)
//     return false
// };

// // findSubarrays([4,2,4])

// findSubarrays([1,2,3,4,5])


// var findSubarrays = function(nums) {
//     let sums = []
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             let x = (nums[i] + nums[j])
//             // console.log(x)
//             if(sums.includes([x,nums[i],nums[j]])){
//                 console.log(true)
//                 return true
//             } else {
//                 sums.push([x,nums[i],nums[j]])
//             }
//             console.log(sums)
//         }
//     }
//     console.log(false)
//     return false
// };