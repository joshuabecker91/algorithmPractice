

// CORRECT works 100% test cases beats 75% time 30% memory
var findDuplicates = function(nums) {
    let h = {}
    for(let i = 0; i < nums.length; i++){
        let x = nums[i]
        if(h[x]){
            h[x]++
        } else {
            h[x] = 1
        }
    }
    let output = []
    for(let key in h){
        if(h[key] % 2 == 0){
            output.push(Number(key))
        }
    }
    return output 
};

findDuplicates([4,3,2,7,8,2,3,1])




// var findDuplicates = function(nums) {
//     let h = {}
//     for(let i = 0; i < nums.length; i++){
//         let x = nums[i]
//         if(h[x]){
//             h[x]++
//         } else {
//             h[x] = 1
//         }
//     }
//     console.log(h)
//     let output = []
//     for(let key in h){
//         if(h[key] % 2 == 0){
//             output.push(Number(key))
//         }
//     }
//     console.log(output)
//     return output 
// };
