

var sumOfUnique = function(nums) {
    let hashmap = {}
    for(let i = 0; i < nums.length; i++){
        let x = nums[i]
        if(hashmap[x]){
            hashmap[x]++
        } else {
            hashmap[x] = 1
        }
    }
    let sum = 0;
    for(let key in hashmap){
        if(hashmap[key] == 1){
            sum += parseInt(key)
        }
    }
    return sum
};

sumOfUnique([1,2,3,2])



// var sumOfUnique = function(nums) {
//     let hashmap = {}

//     for(let i = 0; i < nums.length; i++){
//         let x = nums[i]
//         if(hashmap[x]){
//             hashmap[x]++
//         } else {
//             hashmap[x] = 1
//         }
//     }
//     console.log(hashmap)
//     let sum = 0;
//     for(let key in hashmap){
//         if(hashmap[key] == 1){
//             sum += parseInt(key)
//         }
//     }
//     return sum
// };

// sumOfUnique([1,2,3,2])

