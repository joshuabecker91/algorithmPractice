

function solution(inputArray) {
    return inputArray.slice(0, (inputArray.indexOf(0)+1) ).reduce((a,b) => a+b)
}

solution([5, 1, 2, 3, 0, 1, 5, 0, 2])



// function solution(inputArray) {
//     let newArray = inputArray.slice(0, (inputArray.indexOf(0)+1) )
//     let sum = newArray.reduce((a,b) => a+b)
//     return sum
// }



// function solution(inputArray) {
//     let index = inputArray.indexOf(0)
//     let newArray = inputArray.slice(0,index+1)
//     let sum = newArray.reduce((a,b) => a+b)
//     return sum
// }



// function solution(inputArray) {
//     let index = inputArray.indexOf(0)
//     let newArray = inputArray.slice(0,index+1)
//     console.log(newArray)
//     let sum = newArray.reduce((a,b) => a+b)
//     console.log(sum)
//     return sum
// }
