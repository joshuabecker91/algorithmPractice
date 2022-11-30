

var commonChars = function(words) {
    const result = []
    const firstWordArr = [...words[0]]
    for(const letter of firstWordArr) {
        if(words.every(word => word.includes(letter))) {
            result.push(letter)
            words = words.map(word => word.replace(letter, ''))
        }
    }    
    console.log(result)
    return result
};

commonChars(["cool","lock","cook"])


// Works for 100% test cases
// var commonChars = function(words) {
//     let output = []
//     let hashmap = {}
//     for(let i = 0; i < words.length; i++){
//         for(let j = 0; j < words[i].length; j++){
//             let word = words[i]
//             if(hashmap[word[j]]){
//                 hashmap[word[j]]++
//             }
//             else {
//                 hashmap[word[j]] = 1
//             }
//         }
//     }
//     for(let key in hashmap){
//         let numOfLettersToPush = [];
//         for(let i = 0; i < words.length; i++){
//             let count = words[i].split('').filter(x => x == key).length
//             numOfLettersToPush.push(count)
//         }
//         let numOfLetters = numOfLettersToPush.sort((a,b) => a-b)[0]
//         if((hashmap[key] % words.length == 0) || (hashmap[key] > words.length)){
//             while(numOfLetters > 0){
//                 output.push(key)
//                 numOfLetters--
//             }
//         }
//     }
//     console.log(output)
//     return(output)
// };

// commonChars(["cool","lock","cook"])




// var commonChars = function(words) {
//     let output = []
//     let hashmap = {}
//     for(let i = 0; i < words.length; i++){
//         for(let j = 0; j < words[i].length; j++){
//             let word = words[i]
//             if(hashmap[word[j]]){
//                 hashmap[word[j]]++
//             }
//             else {
//                 hashmap[word[j]] = 1
//             }
//         }
//     }
//     // console.log(hashmap)

//     for(let key in hashmap){
//         let numOfLettersToPush = [];
//         for(let i = 0; i < words.length; i++){
//             let count = words[i].split('').filter(x => x == key).length
//             // console.log(words[i], key, count)
//             numOfLettersToPush.push(count)
//         }
//         // console.log(numOfLettersToPush)
//         let numOfLetters = numOfLettersToPush.sort((a,b) => a-b)[0]
//         // console.log(numOfLetters)

//         // console.log(hashmap[key], words.length)
//         if((hashmap[key] % words.length == 0) || (hashmap[key] > words.length)){
//             while(numOfLetters > 0){
//                 output.push(key)
//                 numOfLetters--
//             }
//         }
//     }
//     console.log(output)
//     return(output)
// };

// commonChars(["bella","label","roller"])
// commonChars(["cool","lock","cook"])




// var commonChars = function(words) {
//     let output = []
//     let word = words[0]
//     let letters = words[0].split('')
//     console.log(letters)
//     // let uniqueChars = [...new Set(letters)];
//     // console.log(uniqueChars)

    
//     for(let i = 0; i < word.length; i++){
//         let x = 1;
//         let count = 1;
//         // let y = true
//         while(x < words.length){
//             console.log(words[x], word[i])
//             if(words[x].includes(word[i])){
//                 console.log("yes", words[x], "includes", word[i])
//                 count++
//             }
//             else { 
//                 break
//             }
//             x++
//         }
//         if(count >= words.length - 1){
//             output.push(word[i])
//         }
//     }
//     console.log(output)
//     return(output)
// };

// commonChars(["bella","label","roller"])