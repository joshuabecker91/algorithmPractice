

var longestStrChain = function(words) {
    // let max = 1
    let count = 1
    words.sort((a,b) => a.length - b.length)
    console.log(words)
    for(let i = 1; i < words.length; i++){
        console.log("i", i, "words[i]", words[i])
        let boolean = false 
        for(let j = 0; j < words[i].length; j++){
            let left = words[i].split('').slice(0,j)
            let right = words[i].split('').slice(j+1,words[i].length+1)
            let testString = left.concat(right).join('')
            console.log("testString: ", testString)
            if(testString == words[i-1]){
                count++
                boolean = true
                console.log("YES!")
                break
            } 
        }
        if(boolean == false){
            words.splice(i,1)
            console.log(words)
            i--
        }
        // if(i == words.length -1){
        //     count++
        // }
    }
    // console.log(max)
    return count
};



// var longestStrChain = function(words) {
//     // predecessor
//     // "ba",          "bca" all popssiblities of the current word ignoring exactly one letter 
//     // bc  if exactly equal to the previous then count ++ 
//     // ba  consecutive increases the max 
//     // ca  if you find one that breaks the chain the count is set back to zero 
//     let max = 1
//     let count = 1
//     for(let i = 1; i < words.length; i++){
//         console.log("i", i, "words[i]", words[i])
//         let boolean = false 
//         for(let j = 0; j < words[i].length; j++){
//             let left = words[i].split('').slice(0,j)
//             let right = words[i].split('').slice(j+1,words[i].length+1)
//             let testString = left.concat(right).join('')
//              //.splice(j,1).join('')
//             // console.log(testString)
//             console.log("testString: ", testString)
//             if(testString == words[i-1]){
//                 count++
//                 boolean = true
//                 console.log("YES!")
//                 if(count > max){
//                     max = count
//                 }
//                 break
//             }
//             if(boolean = false){
//                 count = 0
//             }
//         }
//     }
//     console.log(max)
//     return max 
// };

longestStrChain(["a","b","ba","bca","bda","bdca"])