

// CORRECT works 100% test cases beats 98% time 100% memory!
var arrangeWords = function(text) {
    let array = text.split(' ')
    array[0] = array[0].toLowerCase()
    let sortedArray = array.sort((a,b) => a.length - b.length)
    sortedArray[0] = sortedArray[0].slice(0,1).toUpperCase() + sortedArray[0].slice(1,sortedArray[0].length+1)
    let sortedSentence = sortedArray.join(' ')
    return sortedSentence
};

arrangeWords("Leetcode is cool")



// var arrangeWords = function(text) {
//     // split each word into an array
//     let array = text.split(' ')
//     // console.log(array)

//     // convert the first letter of index position zero to a lowercase letter
//     array[0] = array[0].toLowerCase()
//     // console.log(array)

//     // Sort by string length ascending
//     let sortedArray = array.sort((a,b) => a.length - b.length)
//     // console.log(sortedArray)

//     // convert the first letter of index zero of the sorted array to uppercase letter
//     sortedArray[0] = sortedArray[0].slice(0,1).toUpperCase() + sortedArray[0].slice(1,sortedArray[0].length+1)
//     // console.log(sortedArray)

//     // rejoin with space
//     let sortedSentence = sortedArray.join(' ')
//     // console.log(sortedSentence)
//     return sortedSentence

// };

