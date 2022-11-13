

function detectCapitalUse(word) {
    return (
        word === word.toUpperCase() ||
        word === word.toLowerCase() ||
        word === word[0].toUpperCase() + word.slice(1).toLowerCase()
    );
}




var detectCapitalUse = function(word) {
    if(word.toLowerCase() == word) return true
    else if(word.toUpperCase() == word) return true
    else if(word[0].toUpperCase() + word.slice(1,word.length).toLowerCase() == word) return true
    return false
};

detectCapitalUse("Google")



// console.log(word[0].toUpperCase() + word.slice(1,word.length).toLowerCase())
// console.log(word)


// var detectCapitalUse = function(word) {
//     if(word.toLowerCase() == word){
//         return true
//     }
//     else if(word.toUpperCase() == word){
//         return true
//     }
//     else if(word[0].toUpperCase() + word.slice(1,word.length).toLowerCase() == word){
//         return true
//     }
//     return false
// };

// detectCapitalUse("Google")