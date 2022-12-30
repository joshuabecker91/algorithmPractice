

// CORRECT works 100% test cases beats 93% time 96% memory
var areOccurrencesEqual = function(s) {
    let h = {}
    for(let i = 0; i < s.length; i++){
        let x = s[i]
        if(h[x]){
            h[x]++
        } else {
            h[x] = 1
        }
    }
    let array = Object.values(h)
    const allEqual = x => x.every(y => y === x[0])
    return allEqual(array)
}

areOccurrencesEqual("abacbc")



// var areOccurrencesEqual = function(s) {
//     let h = {}
//     for(let i = 0; i < s.length; i++){
//         let x = s[i]
//         if(h[x]){
//             h[x]++
//         } else {
//             h[x] = 1
//         }
//     }
//     let array = Object.values(h)
//     for(let i = 0; i < array.length; i++){
//         if(array[i] != array[0]){
//             return false
//         }
//     }
//     return true
// }



    // if(array.reduce((a,b) => a+b) / array.length == array[0]){
    //     console.log(true)
    //     return true 
    // } else {
    //     console.log(false)
    //     return false
    // }