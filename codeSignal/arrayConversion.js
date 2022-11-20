

function solution(inputArray) {
    for(let i = 0; i < inputArray.length+1; i++){
        let j = 0
        // console.log(inputArray, i)
        if(i % 2 == 0){
            while(j < inputArray.length){
                let temp = inputArray[j]
                let temp2 = inputArray[j+1]
                // console.log(temp+temp2)
                inputArray[j] = (temp + temp2)
                inputArray.splice(j+1,1) 
                // console.log(inputArray)
                j++
            }
        } 
        if(i % 2 !=0) {
            while(j < inputArray.length){
                let temp = inputArray[j]
                let temp2 = inputArray[j+1]
                // console.log(temp*temp2)
                inputArray[j] = (temp*temp2)
                inputArray.splice(j+1,1) 
                // console.log(inputArray)
                j++
            }
        }
    }
    console.log(inputArray[0])
    return inputArray[0]
}

solution([1, 2, 3, 4, 5, 6, 7, 8])
