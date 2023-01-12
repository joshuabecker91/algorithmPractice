

// CORRECT works 100% test cases beats 87% time 52% memory
var countWords = function(words1, words2) {
    let h1 = {}
    let h2 = {}
    for(let i = 0; i < words1.length; i++){
        let x = words1[i]
        if(h1[x]){
            h1[x]++
        } else {
            h1[x]=1
        }
    }
    for(let i = 0; i < words2.length; i++){
        let y = words2[i]
        if(h2[y]){
            h2[y]++
        } else {
            h2[y]=1
        }
    }
    let count = 0
    for(let key in h1){
        if((h1[key] == 1) && h2[key] == 1){
            count++
        }
    }
    return count
};



// CORRECT works 100% test cases beats 87% time 52% memory
// var countWords = function(words1, words2) {
//     let h1 = {}
//     let h2 = {}
//     for(let i = 0; i < words1.length; i++){
//         let x = words1[i]
//         if(h1[x]){
//             h1[x]++
//         } else {
//             h1[x]=1
//         }
//     }
//     for(let i = 0; i < words2.length; i++){
//         let y = words2[i]
//         if(h2[y]){
//             h2[y]++
//         } else {
//             h2[y]=1
//         }
//     }
//     // console.log(h1,h2)
//     let array = []
//     for(let key in h1){
//         if((h1[key] == 1) && h2[key] == 1){
//             array.push(key)
//         }
//     }
//     for(let key in h2){
//         if((h2[key] == 1) && h1[key] == 1){
//             if(array.includes(key) == false){
//                 array.push(key)
//             }
//         }
//     }
//     // console.log(array)
//     return array.length 
// };

countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"])

