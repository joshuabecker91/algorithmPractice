

function solution(number, width) {
    // console.log(number.toString().length)
    let numberString = number.toString()
    let length = number.toString().length
    let x = length - width
    let y = 0
    if(x < 0){
        y = length - width
        x = 0
    }
    // console.log(x,length)
    // console.log(numberString.slice(x,length))
    let zeros = Math.abs(y)
    // console.log("zeros", zeros)
    let result = ""
    while(zeros > 0){
        result += 0
        zeros --
    }
    result += numberString.slice(x,length)
    // console.log(result)
    return result
}

solution(1234, 5)






// if(length == width){
//     console.log(number.toString())
//     return number.toString()
// }
// let output = []
// let numberArray = number.toString().split('')
// // console.log(length)
// for(let i = length-1; i >= width; i--){
//     if(numberArray[i]){
//         console.log(numberArray[i])
//         output.push(numberArray[i])
//     } else {
//         console.log(i)
//         output.push(i)
//     }
// }
// // console.log(numberArray)
// console.log(output.reverse().join(''))