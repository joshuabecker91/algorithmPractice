

function solution(inputArray, l, r) {
    let myArray = []
    for(let i = 0; i < inputArray.length; i++){
        if(i < l || i > r){
            myArray.push(inputArray[i])
        }
    }
    console.log(myArray)
}

solution([2, 3, 2, 3, 4, 5], 2, 4)

// For inputArray = [2, 3, 2, 3, 4, 5], l = 2, and r = 4, the output should be
// solution(inputArray, l, r) = [2, 3, 5].