
// Given five positive integers
// find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints


function miniMaxSum(arr) {
    // let min = arr[0];
    // let max = arr[0];
    let sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4]
    let maxSum = sum - arr[0];
    let minSum = sum - arr[0];
    // console.log(sum)
    for(let i = 0; i < arr.length; i++){
        if((sum - arr[i]) > maxSum){
            maxSum = sum - arr[i]
        }
        if((sum - arr[i]) < minSum){
            minSum = sum - arr[i]
        }
        // if(arr[i] > max){
        //     max = arr[i]
        // }
        // if(arr[i] < min){
        //     min = arr[i]
        // }
    }
    console.log(minSum,maxSum)
    return (`${minSum} ${maxSum}`)
}

miniMaxSum([1,3,5,7,9])