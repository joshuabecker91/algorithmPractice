

// CORRECT works 100% test cases beats 83% time 55% memory
var findDifference = function(nums1, nums2) {
    let unique1 = [...new Set(nums1)]
    let unique2 = [...new Set(nums2)]
    // console.log(unique1, unique2)
    let answer = [[],[]]
    for(let i = 0; i < unique1.length; i++){
        if(unique2.includes(unique1[i]) == false){
            answer[0].push(unique1[i])
        }
    }
    for(let i = 0; i < unique2.length; i++){
        if(unique1.includes(unique2[i]) == false){
            answer[1].push(unique2[i])
        }
    }
    console.log(answer)
    return answer
};

findDifference([1,2,3],[2,4,6])



// var findDifference = function(nums1, nums2) {
//     let unique1 = [...new Set(nums1)]
//     let unique2 = [...new Set(nums2)]
//     console.log(unique1, unique2)
//     let answer = [[],[]]
//     for(let i = 0; i < unique1.length; i++){
//         if(unique2.includes(unique1[i]) == false){
//             answer[0].push(unique1[i])
//         }
//     }
//     for(let i = 0; i < unique2.length; i++){
//         if(unique1.includes(unique2[i]) == false){
//             answer[1].push(unique2[i])
//         }
//     }
//     console.log(answer)
//     return answer
// };
