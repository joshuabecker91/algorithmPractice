

// CORRECT works 100% test cases beats 93% on time and 93% on memory
// Refactored with one hashmap. we only need one as long as we dont add them in hashmap until we confirm it doesnt exist in the other array.
var uncommonFromSentences = function(s1, s2) {
    let arrayS1 = s1.split(' ')
    let arrayS2 = s2.split(' ')
    let h = {}

    for(let i = 0; i < arrayS1.length; i++){
        if(!arrayS2.includes(arrayS1[i])){
            let x = arrayS1[i]
            if(h[x]){
                h[x]++
            } else {
                h[x] = 1
            }
        }
    }

    for(let i = 0; i < arrayS2.length; i++){
        if(!arrayS1.includes(arrayS2[i])){
            let y = arrayS2[i]
            if(h[y]){
                h[y]++
            } else {
                h[y] = 1
            }
        }
    }

    let output = []
    for(let key in h){
        if(h[key] == 1){
            output.push(key)
        }
    }
    return output
};

uncommonFromSentences("this apple is sweet", "this apple is sour")





// // CORRECT works 100% test cases beats 95% on time and 78% on memory
// var uncommonFromSentences = function(s1, s2) {
//     let arrayS1 = s1.split(' ')
//     let arrayS2 = s2.split(' ')
//     let h1 = {}
//     let h2 = {}

//     for(let i = 0; i < arrayS1.length; i++){
//         if(!arrayS2.includes(arrayS1[i])){
//             let x = arrayS1[i]
//             if(h1[x]){
//                 h1[x]++
//             } else {
//                 h1[x] = 1
//             }
//         }
//     }

//     for(let i = 0; i < arrayS2.length; i++){
//         if(!arrayS1.includes(arrayS2[i])){
//             let y = arrayS2[i]
//             if(h2[y]){
//                 h2[y]++
//             } else {
//                 h2[y] = 1
//             }
//         }
//     }

//     let output = []
//     for(let key in h1){
//         if(h1[key] == 1){
//             output.push(key)
//         }
//     }
//     for(let key in h2){
//         if(h2[key] == 1){
//             output.push(key)
//         }
//     }
//     return output
// };

// uncommonFromSentences("this apple is sweet", "this apple is sour")







// var uncommonFromSentences = function(s1, s2) {
//     let arrayS1 = s1.split(' ')
//     let arrayS2 = s2.split(' ')
//     console.log(arrayS1)
//     console.log(arrayS2)
//     let h1 = {}
//     let h2 = {}

//     for(let i = 0; i < arrayS1.length; i++){
//         if(!arrayS2.includes(arrayS1[i])){
//             console.log("yes", arrayS1[i])
//             let x = arrayS1[i]
//             if(h1[x]){
//                 h1[x]++
//             } else {
//                 h1[x] = 1
//             }
//         }
//     }

//     for(let i = 0; i < arrayS2.length; i++){
//         if(!arrayS1.includes(arrayS2[i])){
//             console.log("yes", arrayS2[i])
//             let y = arrayS2[i]
//             if(h2[y]){
//                 h2[y]++
//             } else {
//                 h2[y] = 1
//             }
//         }
//     }

//     console.log(h1)
//     console.log(h2)

//     let output = []

//     for(let key in h1){
//         if(h1[key] == 1){
//             output.push(key)
//         }
//     }

//     for(let key in h2){
//         if(h2[key] == 1){
//             output.push(key)
//         }
//     }

//     console.log(output)
//     return output
// };

// uncommonFromSentences("this apple is sweet", "this apple is sour")
