

// Refactored - CORRECT works 100% test cases beats 75% time 75% memory
var greatestLetter = function(s) {
    let output = " "
    for(let i = 0; i < s.length; i++){
        if(s[i] == s[i].toUpperCase()){
            if(s.includes(s[i].toLowerCase())){
                if(s.charCodeAt(i) > output.charCodeAt(0)){
                    output = s[i]
                }
            }
        }
    }
    if(output == " "){
        return ""
    } else {
        return output
    }
};

greatestLetter("arRAzFif")




// // CORRECT works 100% test cases beats 75% time 36% memory
// var greatestLetter = function(s) {
//     let output = []
//     for(let i = 0; i < s.length; i++){
//         if(s[i] == s[i].toUpperCase()){
//             if(s.includes(s[i].toLowerCase())){
//                 output.push(s[i])
//             }
//         }
//     }
//     let sortedOutput = output.sort().reverse()
//     if(output.length < 1){
//         return ""
//     } else {
//         return sortedOutput[0]
//     }
// };

// greatestLetter("arRAzFif")




// var greatestLetter = function(s) {
//     let output = []
//     for(let i = 0; i < s.length; i++){
//         if(s[i] == s[i].toUpperCase()){
//             if(s.includes(s[i].toLowerCase())){
//                 output.push(s[i])
//             }
//         }
//     }
//     let sortedOutput = output.sort().reverse()
//     console.log(sortedOutput)
//     console.log(String(sortedOutput[0]))
//     if(output.length < 1){
//         return ""
//     } else {
//         return String(sortedOutput[0])
//     }
// };

// greatestLetter("lEeTcOdE")