

// 58/140 Test Cases Passed - timing out, perhaps because of slice
var longestPalindrome = function(s) {
    let allSubstrings = []
    let maxLengthString = ""
    if(s.length == 1){
        return s
    }
    for(let i = 0; i < s.length; i++){
        for(let j = i+1; j < s.length+1; j++){
            let subString = s.slice(i,j)
            // console.log("subString: ", subString)
            if(subString.length == 1){
                // console.log(subString)
                allSubstrings.push(subString)
            }
            else if(subString.length % 2 == 0){
                let evenSplice = Math.floor(subString.length / 2)
                // console.log(evenSplice)
                let a = subString.slice(0,evenSplice)
                let b = subString.slice(evenSplice, subString.length+1).split('').reverse().join('')
                // console.log(a,b)
                if(a == b){
                    allSubstrings.push(subString)
                    if(subString.length > maxLengthString.length){
                        maxLengthString = subString
                    }
                }
            }
            else {
                let oddSplice = Math.floor(subString.length / 2)
                // console.log(oddSplice)
                let a = subString.slice(0,oddSplice)
                let b = subString.slice(oddSplice+1, subString.length+1).split('').reverse().join('')
                // console.log(a,b)
                if(a == b){
                    allSubstrings.push(subString)
                    if(subString.length > maxLengthString.length){
                        maxLengthString = subString
                    }
                }
            }
            // console.log("---------------")
        }
    }
    console.log(allSubstrings)
    console.log(maxLengthString)
    return maxLengthString
};

longestPalindrome("babad")


// let test = "abc"
// console.log(test.split('').reverse().join(''))



// 58/140 Test Cases Passed - timing out
// var longestPalindrome = function(s) {
//     let allSubstrings = []
//     let maxLengthString = ""
//     let output = []
//     if(s.length == 1){
//         return s
//     }
//     for(let i = 0; i < s.length; i++){
//         for(let j = i+1; j < s.length+1; j++){
//             let subString = s.slice(i,j)
//             allSubstrings.push(subString)
//         }
//     }
//     console.log(allSubstrings)

//     for(let i = 0; i < allSubstrings.length; i++){
//         let x = allSubstrings[i]
//         // console.log(x)
//         if(x.length == 1){
//             // console.log(x)
//         }
//         else if(x.length % 2 == 0){
//             let evenSplice = Math.floor(x.length / 2)
//             // console.log(evenSplice)
//             let a = x.slice(0,evenSplice)
//             let b = x.slice(evenSplice, x.length+1).split('').reverse().join('')
//             // console.log(a,b)
//             if(a == b){
//                 output.push(x)
//                 if(x.length > maxLengthString.length){
//                     maxLengthString = x
//                 }
//             }
//         }
//         else {
//             let oddSplice = Math.floor(x.length / 2)
//             // console.log(oddSplice)
//             let a = x.slice(0,oddSplice)
//             let b = x.slice(oddSplice+1, x.length+1).split('').reverse().join('')
//             // console.log(a,b)
//             if(a == b){
//                 output.push(x)
//                 if(x.length > maxLengthString.length){
//                     maxLengthString = x
//                 }
//             }
//         }
//     }
//     console.log(output)
//     console.log(maxLengthString)
//     return maxLengthString
// };



// longestPalindrome("babad")