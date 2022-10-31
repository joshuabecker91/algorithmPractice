

function solution(inputString) {
    let newString = inputString.toLowerCase()
    let newArray = newString.split('')
    // console.log(newArray)
    let reverseString = newArray.reverse().join('')
    console.log(newString, reverseString)
    if(reverseString != newString){
        console.log("false")
        return false 
    }
    console.log("true")
    return true 
}

// solution("AaBaa")
solution("abac")








// solution("abac")
// for(let i = 0; i < newString.length; i++){
//     if(newString[i] != reverseString[i]){
//         console.log("false")
//         return false
//     }
// }
// console.log("true")
// return true 