

var findWords = function(words) {
    let row1 = "qwertyuiop"
    let row2 = "asdfghjkl"
    let row3 = "zxcvbnm"
    let output = []

    for(let i=0; i<words.length; i++){
        let sub = words[i]
        let includeRow1= true
        let includeRow2= true
        let includeRow3= true
        for(let j=0; j<sub.length; j++){
            if(!row1.includes(sub[j].toLowerCase())){
                includeRow1 = false
            }
            if(!row2.includes(sub[j].toLowerCase())){
                includeRow2 = false
            }
            if(!row3.includes(sub[j].toLowerCase())){
                includeRow3 = false
            }
        }
        if(includeRow1 == true || includeRow2 ==  true || includeRow3 == true){
            output.push(sub)
        }
    }
    return output
};



// Close but not 100%
// var findWords = function(words) {
//     let row1 = 'qwertyuiop'
//     let row2 = 'asdfghjkl'
//     let row3 = 'zxcvbnm'
//     let output = []

//     for(let i = 0; i < words.length; i++){
//         let sub = words[i]
//         let include = true
//         for(let j = 0; j < sub.length; j++){
//             if(!row1.includes(sub[j].toLowerCase())){
//                 include = false
//                 break
//             }
//             else if(!row2.includes(sub[j].toLowerCase())){
//                 include = false
//                 break
//             }
//             else if(!row3.includes(sub[j].toLowerCase())){
//                 include = false
//                 break
//             }
//         }
//         if(include == true){
//             console.log("true")
//             output.push(sub)
//         }
//     }
//     console.log(output)
//     return output
// };

// findWords(["Hello","Alaska","Dad","Peace"])


