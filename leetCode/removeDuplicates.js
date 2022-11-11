


var removeDuplicates = function (nums) {
    let index = 1;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            nums[index] = nums[i];
            index++;
            // console.log(index, nums)
        }
    }
    return index;
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])



// CORRECT BUT only 5% of efficiency rank
// var removeDuplicates = function(nums) {
    
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i+1] === nums[i]){
//             // let temp = nums[i]
//             nums.splice(i, 1); 
//             console.log(nums)
//             i--
//             // delete nums[i]
//             // nums.push(temp)
//             // console.log(nums)
//             // let removed = nums.splice(i,2);
//             // nums[nums.length+1] = temp
//         }
//     }
//     console.log(nums)
//     console.log(nums.length)
//     return nums.length
// };

// // removeDuplicates([1,1,2])
// removeDuplicates([0,0,1,1,1,2,2,3,3,4])

// [1,2,3,4,4,4,4,4  ,5,5,6,7]




// let temp = nums[i]
// let temp2 = nums[i+1]
// nums[i] = temp2 
// nums[i+1] = temp
// console.log(nums)