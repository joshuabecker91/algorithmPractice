

// CORRECT 100% test cases - reverse array and check the last digit
var largestOddNumber = function(num) {
    num = num.split('')
    let num2 = Array.from(num, Number).reverse()
    for(let i = 0; i < num2.length; i++){
        // console.log(num2[i])
        if(num2[i] % 2 != 0){
            let j = (num.length - 1 - i)
            let x = num.slice(0,j+1)
            // console.log(x.join(''))
            return x.join('')
        }
    }
    return ""
};

// largestOddNumber("52")
largestOddNumber("239537672423884969653287101")



// loop through the number backwards first digit to be odd return sliced array



// console.log(number)
// number += num
// if(num2[i] % 2 == 1){
//     console.log(String(num2[i]))
//     return String(num2[i])
// }


// var largestOddNumber = function(num) {
//     for(let i = num.length-1; i >= 0 ; i--){
//         let subString = parseInt(BigInt(num.slice(0, i+1)))
//         console.log(subString)
//         if(subString % 2 != 0){
//             // console.log(i, num[i])
//             console.log("YES!", subString)
//             return subString
//         }
//     }
//     return ""
// };

// largestOddNumber("239537672423884969653287101")