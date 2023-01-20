

var moveZeroes = function(nums) {
    let i = 0
    while(i < nums.length){
        let j = i+1
        if(nums[i] === 0 && j < nums.length){

            while((nums[j] === 0)){
                j++
                if(j >= nums.length){
                    console.log(nums)
                    return nums
                }
            }

            nums[i] = nums[j]
            nums[j] = 0
        }
        i++
    }
    console.log(nums)
    return nums
};

moveZeroes([0,1,0,3,12])

// var moveZeroes = function(nums) {
//     let i = 0
//     while(i < nums.length){
//         if(nums[i] === 0){
//             let j = i+1

//             if(j >= nums.length){
//                 return nums
//             }

//             while((nums[j] === 0)){
//                 j++
//                 if(j >= nums.length){
//                     return nums
//                 }
//             }

//             nums[i] = nums[j]
//             nums[j] = 0
//         }
//         i++
//     }
//     return nums
// };





// var moveZeroes = function(nums) {
//     let i = 0
//     // let j = nums.length - 1
//     let count = 0
//     // let mid = Math.floor(nums.length/2)
//     while(i <= nums.length){
//         if(nums[i] == 0){
//             count++
//             let j = i+1
//             while((nums[j] == 0)){
//                 j++
//                 if(j >= nums.length){
//                     console.log(nums)
//                     return nums
//                 }
//             }
//             nums[i] = nums[j]
//             nums[j] = 0
//             // i++
//         }
//         i++
//     }
//     console.log(nums)
//     // if(nums[mid] == 0){
//     //     nums[mid] = nums[mid+1]
//     //     nums[mid+1] = 0
//     // }
//     // console.log(nums)
//     return nums
// };

// moveZeroes([0,1,0,3,12])


// [0,1,0,3,12]

            // let temp = nums[i]
            // nums[i] = nums[j]
            // nums[j] = temp
            // j--