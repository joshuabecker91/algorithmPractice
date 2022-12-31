

// CORRECT works 100% test cases beats 94% time 80% memory
var rearrangeArray = function(nums) {
    let positive = []
    let negative = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > -1){
            positive.push(nums[i])
        } else{
            negative.push(nums[i])
        }
    }
    let output = []
    for(let i = 0; i < positive.length; i++){
            output.push(positive[i])
            output.push(negative[i])
    }
    return output
};

rearrangeArray([3,1,-2,-5,2,-4])




// var rearrangeArray = function(nums) {
//     let positive = []
//     let negative = []
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] > -1){
//             positive.push(nums[i])
//         } else{
//             negative.push(nums[i])
//         }
//     }
//     console.log(positive)
//     console.log(negative)

//     let output = []
//     for(let i = 0; i < positive.length; i++){
//             output.push(positive[i])
//             output.push(negative[i])
//     }
//     console.log(output)
//     return output
// };