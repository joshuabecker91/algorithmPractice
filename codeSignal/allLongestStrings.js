

function solution(inputArray) {
    let result = []
    let x = inputArray.sort((a,b) => b.length-a.length)
    console.log(x)
    let max = x[0].length
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length == max){
            result.push(inputArray[i])
        }
    }
    return result 
}

solution(["aba", "aa", "ad", "vcd", "aba"])

    // for(let i = 0; i < inputArray.length; i++){
    //     let length = inputArray[i].length
    //     if(length > max){
    //         max = length
    //     }
    // }





// function solution(inputArray) {
//     let result = []
//     let max = inputArray[0].length
//     for(let i = 0; i < inputArray.length; i++){
//         let length = inputArray[i].length
//         if(length > max){
//             max = length
//         }
//     }
//     console.log(max)

//     for(let i = 0; i < inputArray.length; i++){
//         if(inputArray[i].length == max){
//             result.push(inputArray[i])
//         }
//     }
//     console.log(result)
//     return result 
// }
