

function solution(numbers) {
    let count = 0;
    let n = 0;
    for(let i = 0; i < numbers.length; i++){
        for(let j = i; j < numbers.length; j++){
            console.log(numbers[i], numbers[j])
            let s = numbers[i] + numbers[j]
            console.log("this is s:",s)
            console.log(Math.sqrt(s))
            // console.log(Math.sqrt(s) * Math.sqrt(s) == s)
            if(Math.floor(Math.sqrt(s)) * Math.floor(Math.sqrt(s)) == s){
                if(Number.isInteger(Math.sqrt(s))){
                    count++
                }
                // if(numbers[i] <= numbers[j]){
                // }
            }
        }
    }
    console.log(count)
    return count
}

solution([-1, 18, 3, 1, 5])
// solution([-7, -2, -5, 5, -9, 8, -4, 1])