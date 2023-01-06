

// Much faster with an array rather than hashmap beats 75% time 70% memory
var partitionString = function(s) {
    let count = 0
    let h = []
    for(let i = 0; i < s.length; i++){
        let x = s[i]
        if(!h.includes(x)){
            h.push(x)
        } else {
            count++
            h = []
            i--
        }
    }
    return count+1
};

partitionString("abacaba")



// Refactored - CORRECT works 100% test cases, faster without pushing to array. 
// var partitionString = function(s) {
//     let count = 0
//     let h = {}
//     for(let i = 0; i < s.length; i++){
//         let x = s[i]
//         if(!h[x]){
//             h[x] = 1
//         } else {
//             count++
//             h = {}
//             i--
//         }
//     }
//     return count+1
// };



// var partitionString = function(s) {
//     let slicedIndexes = []
//     let h = {}
//     for(let i = 0; i < s.length; i++){
//         let x = s[i]
//         if(!h[x]){
//             h[x] = 1
//         } else {
//             slicedIndexes.push(i)
//             h = {}
//             i--
//         }
//         console.log(h)
//     }
//     console.log(slicedIndexes)
//     return slicedIndexes.length+1
// };


