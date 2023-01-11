


// CORRECT beats 85% time 58% memory
var mergeAlternately = function(word1, word2) {
    let output = ''
    let max = Math.max(word1.length, word2.length)
    for(let i = 0; i < max; i++){
        if(word1[i]){
            output += word1[i]
        }
        if(word2[i]){
            output += word2[i]
        }
    }
    console.log(output)
    return output 
};



// // CORRECT beats 93% time 58% memory
// var mergeAlternately = function(word1, word2) {
//     let output = ''
//     let max = Math.min(word1.length, word2.length)
//     for(let i = 0; i < max; i++){
//         output += word1[i]
//         output += word2[i]
//         if(i == max - 1){
//             if(word1.length > max){
//                 output += word1.slice(i+1,word1.length+1)
//             } else {
//                 output += word2.slice(i+1,word2.length+1)
//             }
//         }
//     }
//     console.log(output)
//     return output 
// };

mergeAlternately('abc', 'pqr')