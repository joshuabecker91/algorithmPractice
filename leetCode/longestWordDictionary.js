


var longestWord = function(words) {

    let possibilities = []

    for(let i = 0; i < words.length; i++){
        let word = words[i]
        let wordArray = word.split('')
        console.log("current word: ", wordArray, "===========================")
        for(let j = 0; j < words.length; j++){
            console.log("word being tested", words[j])
            console.log("wordArray[0]", wordArray[0])
            if(words[j].includes(wordArray[0])){
                console.log(words[j].includes(wordArray[0]))
                wordArray.shift()
                console.log("wordArray", wordArray)
            }
            if(wordArray.length <= 0){
                console.log("yes! length zero")
                possibilities.push(word)
                break
            }
        }
        console.log("--------------------------")
    }
    console.log(possibilities)
    let possibilitiesSorted = possibilities.sort((a,b) => b.length-a.length)
    console.log(possibilitiesSorted)
    let output = []
    let max = possibilitiesSorted[0].length
    console.log(max)
    for(let i = 0; i < possibilitiesSorted.length; i++){
        if(possibilitiesSorted[i].length == max){
            output.push(possibilitiesSorted[i])
        } else {
            break
        }
    }
    console.log(output)
    // console.log(output.sort((a,b) => a-b)[0])
    console.log(output.sort((a,b) => a.localeCompare(b)))
    console.log(output.sort((a,b) => a.localeCompare(b))[0])
    return (output.sort((a,b) => a.localeCompare(b))[0])
};

// longestWord(["w","wo","wor","worl","world"])
// longestWord(["a","banana","app","appl","ap","apply","apple"])
longestWord(["m","mo","moc","moch","mocha","l","la","lat","latt","latte","c","ca","cat"])
// longestWord(["yo","ew","fc","zrc","yodn","fcm","qm","qmo","fcmz","z","ewq","yod","ewqz","y"])




// // Refactored
// var longestWord = function(words) {

//     let possibilities = []

//     for(let i = 0; i < words.length; i++){
//         let word = words[i]
//         let wordArray = word.split('')
//         for(let j = 0; j < words.length; j++){
//             if(words[j].includes(wordArray[0])){
//                 wordArray.shift()
//             }
//             if(wordArray.length <= 0){
//                 possibilities.push(word)
//                 break
//             }
//         }
//     }
//     let possibilitiesSorted = possibilities.sort((a,b) => b.length-a.length)
//     let output = []
//     let max = possibilitiesSorted[0].length
//     for(let i = 0; i < possibilitiesSorted.length; i++){
//         if(possibilitiesSorted[i].length == max){
//             output.push(possibilitiesSorted[i])
//         } else {
//             break
//         }
//     }
//     return (output.sort((a,b) => a.localeCompare(b))[0])
// };