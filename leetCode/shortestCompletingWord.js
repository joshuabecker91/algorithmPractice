

// CORRECT works 100% test cases beats 78% on time and 27% on memory
var shortestCompletingWord = function(licensePlate, words) {
    let h = {}
    for(let i = 0; i < licensePlate.length; i++){
        let x = licensePlate[i].toLowerCase()
        if(isNaN(x)){
            if(h[x]){
                h[x]++
            } else {
                h[x] = 1
            }
        }
    }
    // console.log(h)

    let possibilities = []
    let minLength = Infinity;

    for(let i = 0; i < words.length; i++){
        let wordH = {}
        for(let j = 0; j < words[i].length; j++){
            let y = words[i][j]
            if(wordH[y]){
                wordH[y]++
            } else {
                wordH[y] = 1
            }
        }
        // console.log(wordH)
        let addToPossibilities = true
        for(let key in h){
            if(wordH[key] < h[key] || !wordH[key]){
                addToPossibilities = false
            } 
        }
        if(addToPossibilities == true){
            possibilities.push(words[i])
            if(words[i].length < minLength){
                minLength = words[i].length
            }
        }
    }
    // console.log(possibilities)
    // console.log("minLength", minLength)

    let output = []
    for(let i = 0; i < possibilities.length; i++){
        if(possibilities[i].length == minLength){
            output.push(possibilities[i])
        }
    }
    console.log(output)
    return output[0]
};

// shortestCompletingWord("1s3 PSt", ["step","steps","stripe","stepple"])
// shortestCompletingWord("1s3 456", ["looks","pest","stew","show"])
shortestCompletingWord("Ah71752" , ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"])







// ALTERNATIVE
// var shortestCompletingWord = function(licensePlate, words) {
//     // Sort the words array by word length
//     // Create a string of only the letters in the license plate
//     // Return the shortest word that has the max amount of letters

//     words.sort((a,b) => a.length - b.length);

//     let regex = /[a-zA-Z]/i;
//     let letterStr = "";
//     let maxCount = 0;
//     let word = "";

//     // Create the license letter only string
//     for (let i=0; i<licensePlate.length; i++) {
//         // console.log(plate[i], plate[i].match(regex))
//         if (licensePlate[i].match(regex) !== null) {
//             letterStr += licensePlate[i].toLowerCase();
//         }
//     }

//     console.log("LETTER STRING:", letterStr);

//     // Compare each letter of each word - if the count is larger than the maxCount - replace the word
//     for (let j = 0; j< words.length; j++) {
//         let count = 0;
//         let testStr = letterStr;
//         let index = 0;
//         for (let k = 0; k< words[j].length; k++) {
//             if(testStr.includes(words[j][k])) {
//                 count ++;
//                 index = testStr.indexOf(words[j][k]);
//                 testStr = testStr.slice(0, index) + testStr.slice(index + 1);
//                 console.log("TEST STRING:", testStr);
//             }
//         }

//     // console.log("COUNT:", count, "WORD:", words[j]);

//         if (count > maxCount) {
//             maxCount = count;
//             word = words[j];

//         }
//     }
//     return word;
// };