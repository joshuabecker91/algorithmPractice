

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
