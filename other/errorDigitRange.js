

function errorDigitRange(digits){
    let min = Infinity
    let max = -Infinity

    let b = 9
    while(b >= 0){
        let a = 0
        while(a < 10){
            let temp = digits
            let x = String(temp)[0]
            let newTemp = String(temp).replaceAll(a, b)
            // console.log(newTemp)
            // if first digit was switched to zero, switch it back
            if(b == 0){
                // console.log("THIS IS X temp[0]", x)
                newTemp = x + newTemp.slice(1,newTemp.length+1)
                // console.log(newTemp)
            }
            if(Number(newTemp) > max){ //might need to split and then join
                max = Number(newTemp)
            }
            if(Number(newTemp) < min){ //might need to split and then join
                min = Number(newTemp)
            }
            // console.log(a, b, min, max, Number(newTemp))
            a++
        }
        b--
    }
    console.log("the answer is:", (max - min))
    return (max - min)
}

errorDigitRange(123512) //820088
// errorDigitRange(909) //898
// errorDigitRange(333)
// errorDigitRange(222)
// errorDigitRange(10)
// errorDigitRange(151)





// 1 23512
// loop through the array 
// change each element to another specific element 
// x times 

// for(let i = 0; i < digits.length; i++){
//     let x = tempArray[j]
//     if(x == i){
//         tempArray[j] = i
//     }
// }
