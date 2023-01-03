
// Works 100% test cases
var intersection = function(nums1, nums2) {
    let output = []
    for(let i = 0; i < nums1.length; i++){
        let x = nums1[i]
        if(nums2.includes(x) && output.includes(x) == false){
            output.push(x)
        }
    }
    console.log(output)
    return output
};

intersection([1,2,2,1], [2,2])



// Works 100% test cases - spread operator with new set removes duplicates, but not as efficient with space
// var intersection = function(nums1, nums2) {
//     nums1 = [...new Set(nums1)]
//     nums2 = [...new Set(nums2)]
//     let ans = []
//     for(let i=0; i<nums1.length; i++){
//         if(nums2.includes(nums1[i])){
//             ans.push(nums1[i])
//         }
//     }
//     return ans
// };