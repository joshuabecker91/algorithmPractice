

// CORRECT beats 100% test cases 97% time 79% memory
var findGCD = function(nums) {
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    let i = min
    while(i > 0){
        if((max % i == 0) && (min % i == 0)){
            return i
        }
        i--
    }
};

findGCD([2,5,6,9,10])



// var findGCD = function(nums) {
//     let min = Math.min(...nums)
//     let max = Math.max(...nums)
//     let i = max
//     while(i > 0){
//         if((max % i == 0) && (min % i == 0)){
//             return i
//         }
//         i--
//     }
// };



// var findGCD = function(nums) {
//     let min = Math.min(...nums)
//     let max = Math.max(...nums)
//     let ans = 0
//     let i = 1
//     while(i <= min){
//         if((max % i == 0) && (min % i == 0)){
//             ans = i
//         }
//         i++
//     }
//     return ans 
// };



// var findGCD = function(nums) {
//     let min = Infinity
//     let max = -Infinity
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] > max){
//             max = nums[i]
//         }
//         if(nums[i] < min){
//             min = nums[i]
//         }
//     }
//     console.log(min,max)
//     let ans = 0
//     let i = 1
//     while(i <= max){
//         if((max % i == 0) && (min % i == 0)){
//             ans = i
//         }
//         i++
//     }
//     console.log(ans)
//     return ans 
// };
