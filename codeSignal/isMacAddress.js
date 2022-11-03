
function solution(inputString) {
    var regex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    return regex.test(inputString);
}


// function solution(inputString) {
//     if (inputString.length!=17) return false
//     var re = /[0-9A-Fa-f]{6}/g;
//     let newString = inputString.split("-")
//     let newString2 = newString.join("")
//     console.log(newString2)
//     // if(newString2[i].toString().match(re)){
//     for(i in newString2){
//         if(re.test(newString2[i]) === -1) {
//             console.log("false")
//             return false;
//         } else {
//             console.log("true")
//             return true
//         }
//     }
// }

// solution("01-23-45-67-89-AB")




// for(let i = 0; i < newString2.length; i++){
//     let x = newString2[i]
//     console.log(x)
//     let result = re.test(x)
//     console.log(result)
//     if(result == false){
//         console.log(x)
//         // return false 
//     }
// }
// return tru