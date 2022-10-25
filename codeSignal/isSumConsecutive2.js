

// Find the number of ways to express n as sum of some (at least two) consecutive positive integers.

// function solution(n) {
//     let count = 0;
//     let x = 0;
//     let max = Math.ceil(n/2)
//     while(x <= max && max*2 != n){
//         if(n % max == 0){
//             count++
//             // console.log(max, count)
//         }
//         max--
//     }
//     console.log(count)
//     return count
// }

// solution(9)
// solution(8)
// solution(24)



function solution(n) {
    let count = 0
    for (let i=1; i < n; i++){
        let sum = 0
        for (let j=i; j < n; j++){
            sum += j
            if (sum == n){
                count++
                console.log('j',i)
                break
            }
        }
    }
    return count
}





    // let numOfDigits = Math.ceil(n/9)
    // if(n < 10){
    //     numOfDigits = 2
    // }
    // console.log(numOfDigits)

    // let arr = []
    // let digit = Math.ceil(n/numOfDigits)
    // for(let i = 0; i < numOfDigits; i++){
    //     arr.push(digit)
    //     console.log(arr)
    //     digit--
    // }


    // for(let i = 0; i < arr.length; i++){
    //     for(let j = 0; j < digit-1; j++){
    //         arr[j]--
    //     }
    //     console.log(arr)
    //     if(arr.reduce((a,b) => a+b) == n){
    //         count++
    //     }
    // }