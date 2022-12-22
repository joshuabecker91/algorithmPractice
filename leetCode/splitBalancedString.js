

var balancedStringSplit = function(s) {
    let count = 0
    for(let i = 0; i< s.length; i++){ //0 1 2
        for(let j = i+1; j < s.length; j++){
            let subString = s.slice(i, j+1)  // 0 - 1 (0, 2) RL
            let lCount = (subString.match(/L/g) || []).length
            let rCount = (subString.match(/R/g) || []).length;
            console.log(subString)
            if(lCount == rCount){
                count++
                i = j+1
            }
        }
    }
    return count
};

balancedStringSplit("RLRRLLRLRL")






// var balancedStringSplit = function(s) {
//     let count = 0;
//     let currentString = s
//     let possibilities = []
//     let i = 0
//     let j = currentString.length
//     while(j > 0){
//         console.log("currentString", currentString)
//         let myString = currentString.slice(0,i+1)
//         let lCount = (myString.match(/L/g) || []).length; // myString.count("L")
//         let rCount = (myString.match(/R/g) || []).length; //myString.count("R")
//         console.log("myString: ", myString, "lCount: ", lCount, "rCount: ", rCount)
//         if(lCount == rCount){
//             console.log("YES BALANCED", myString)
//             possibilities.push(myString)
//             console.log("currentString Length: ", currentString.length, "myString Length: ", myString.length)
//             currentString = currentString.slice(i+1, (currentString.length - myString.length ))
//             i = 0
//         } else {
//             i++
//         }
//         j--
//     }
    
//     console.log(possibilities)
//     // let result = new Set(possibilities)
//     // console.log(result)
//     // console.log(count)
//     // return count 
// };

// balancedStringSplit("RLRRLLRLRL")







// var balancedStringSplit = function(s) {
//     let possibilities = []
//     for(let i = 0; i < s.length; i++){
//         for(let j = i+1; j < s.length; j++){
//             let myString = s.slice(i,j+1)
//             let lCount = (myString.match(/L/g) || []).length; // myString.count("L")
//             let rCount = (myString.match(/R/g) || []).length; //myString.count("R")
//             console.log(myString, lCount, rCount)
//             if(lCount == rCount){
//                 console.log("YES BALANCED")
//                 possibilities.push(myString)
//             }
//         }
//     }
//     console.log(possibilities)
//     let result = new Set(possibilities)
//     console.log(result)
//     // console.log(count)
//     // return count 
// };


// if length % 2 == 0 and lCount and rCount

// if(s[i] == 'L'){
//     lCount++
// } else {
//     rCount++
// }