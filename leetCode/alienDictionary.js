

// CORRECT works 100% test cases beats 97% time and 77% memory
var isAlienSorted = function (words, order) {
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (order.indexOf(words[i][j]) < order.indexOf(words[i + 1][j])) {
                break;
            }
            else if (order.indexOf(words[i][j]) === order.indexOf(words[i + 1][j])) {
                continue;
            } else {
                return false;
            }
        }
    }
    return true;
};

isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz")




// CORRECT works 100% test cases beats 99% time and 97% memory
// var isAlienSorted = function (words, order) {
//     // let isTrue = true
//     let i = 0
//     while (i < words.length - 1) {
//         let j = 0
//         while (j < words[i].length) {
//             let firstWord = words[i][j]
//             let secondWord = words[i + 1][j]
//             if (order.indexOf(firstWord) > order.indexOf(secondWord)) {
//                 return false
//             } else if (order.indexOf(firstWord) < order.indexOf(secondWord)) {
//                 if (words.length > 2) {
//                     i++
//                 } else {
//                     return true
//                 }
//             } else if (order.indexOf(firstWord) == order.indexOf(secondWord)) {
//                 j++
//             } else if (words[i].length > words[i + 1].length) {
//                 return false
//             }
//         }
//         i++
//     }
//     return true
// };

// isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz")






// var isAlienSorted = function(words, order) {
//     for (let i=0;i<words.length-1;i++) {
//         let word1 = words[i];
//         let word2 = words[i+1];
//         let minLen = Math.min(word1.length, word2.length);
//         let flag = false;
//         for (let i = 0; i < minLen; i++) {
//             if (word1[i] != word2[i]) {
//                 if (order.indexOf(word1[i]) > order.indexOf(word2[i])) return false;
//                 flag = true;
//                 break;
//             }
//         }
//         if (!flag && word1.length > word2.length) return false;
//     }
//     return true;
// };






// var isAlienSorted = function(words, order) {
//     // console.log(order.split(''))
//     let array = []
//     for(let i = 0; i < words.length; i++){
//         let word = words[i]
//         let wordNums = []
//         for(let j = 0; j < words[i].length; j++){
//             let letter = word[j]
//             order.indexOf(letter)
//             wordNums.push(order.indexOf(letter))
//         }
//         // array.push([word, wordNums.join('')])
//         array.push(wordNums.join('')) //.join('')
//         // if(!h[word]){
//         //     h[word] = wordNums
//         // }
//     }
//     console.log(array)
//     let sortedArray = array.sort((a,b) => a[0] - b[0])
//     // array.sort((a,b) => b[1][0] - a[1][0])
//     console.log(sortedArray)
//     if(array == sortedArray){
//         return true
//     } else {
//         return false
//     }
// };



// a = elements.sort((a, b) => a.localeCompare(b));


// hlabcdefgijkmnopqrstuvwxyz