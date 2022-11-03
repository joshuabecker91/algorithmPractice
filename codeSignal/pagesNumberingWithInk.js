

function solution(current, numberOfDigits) {
    let i = 0;
    while(numberOfDigits >= current.toString().length){
        numberOfDigits -= current.toString().length
        current++
        i++
    }
    // console.log("end here", current-1)
    return current-1
}

// solution(1, 5)
// solution(21, 4)
// solution(8, 4)
solution(76, 250)


// function solution(current, numberOfDigits) {
//     let ink = numberOfDigits;
//     let x = current;
//     let length = x.toString().length;
//     for(let i = 0; ink >= length; i++){
//         // console.log(x, ink, digitsPrinted)
//         ink -= x.toString().length
//         console.log("last digit:", x, ink)
//         if(ink < x.toString().length){
//             console.log("end here", x)
//             return x
//         }
//         x++
//     }
// }
