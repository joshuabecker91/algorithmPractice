


// Refactored again
var canBeEqual = function(target, arr) {
    return arr.sort().join('') == target.sort().join('')
};


// // Refactored - CORRECT works 100% test cases beats 77% time 73% memory
// var canBeEqual = function(target, arr) {
//     let t = target.sort((a,b) => a-b)
//     let a = arr.sort((a,b) => a-b)
//     return (a.join('') == t.join(''))
// };

canBeEqual([1,2,3,4], [2,4,1,3])



// var canBeEqual = function(target, arr) {
//     let t = target.sort((a,b) => a-b)
//     let a = arr.sort((a,b) => a-b)
//     // console.log(t,a)
//     if(a.join('') == t.join('')){
//         // console.log(true)
//         return true 
//     } else {
//         // console.log(false)
//         return false
//     }
// };