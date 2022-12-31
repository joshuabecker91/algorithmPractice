

// Refactored again 90% time 67% memory
var distributeCandies = function(candyType) {
    let s = [...new Set(candyType)].length
    let z = Math.floor(candyType.length/2)
    return Math.min(s, z)
};

distributeCandies([1,1,2,2,3,3])



// // Refactored - faster! Correct works 100% test cases
// var distributeCandies = function(candyType) {
//     let h = {}
//     let z = Math.floor(candyType.length/2)
//     let count = 0
//     for(let i = 0; i < candyType.length; i++){
//         let x = candyType[i]
//         if(!h[x]){
//             count++
//             h[x]=1
//         }
//     }
//     return Math.min(count, z)
// };



// var distributeCandies = function(candyType) {
//     let h = {}
//     let z = Math.floor(candyType.length/2)

//     for(let i = 0; i < candyType.length; i++){
//         let x = candyType[i]
//         if(h[x]){
//             h[x]++
//         } else {
//             h[x]=1
//         }
//     }
//     console.log(h)
//     let y = Object.values(h).length 
//     console.log(y)
//     if(y < z){
//         z = y
//     }
//     return z
// };