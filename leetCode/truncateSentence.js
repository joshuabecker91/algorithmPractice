

// Refactored - CORRECT works 100% test cases
var truncateSentence = function(s, k) {
    return s.split(" ").slice(0,k).join(" ")
};

truncateSentence("Hello how are you Contestant", 4)


// // CORRECT works 100% test cases 
// var truncateSentence = function(s, k) {
//     let x = s.split(" ")
//     let y = x.slice(0,k).join(" ")
//     // console.log(y)
//     return y
// };

// truncateSentence("Hello how are you Contestant", 4)