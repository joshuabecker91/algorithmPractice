
// Given an array of integers

// calculate the ratios of its elements that are positive, negative, and zero. 





// The first line contains an integer, , the size of the array.
// The second line contains  space-separated integers that describe .

// proportion of positive values
// proportion of negative values
// proportion of zeros

let positive = 0;
let negative = 0;
let zeros = 0;

function plusMinus(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positive += 1;
        } 
        else if(arr[i] < 0){
            negative += 1;
        }
        else {
            zeros += 1;
        }
    }
    // console.log(positive)
    // console.log(negative)
    // console.log(zeros)
    // console.log(positive/arr.length)
    // console.log(negative/arr.length)
    // console.log(zeros/arr.length)
    // console.log((positive/arr.length).toFixed(6))
    // console.log((negative/arr.length).toFixed(6))
    // console.log((zeros/arr.length).toFixed(6))
    console.log(`${(positive/arr.length).toFixed(6)}\n${(negative/arr.length).toFixed(6)}\n${(zeros/arr.length).toFixed(6)}`)
}

plusMinus([-4, 3, -9, 0, 4, 1])

// Print the ratios of positive, negative and zero values in the array. 
// Each value should be printed on a separate line with  digits after the decimal. 
// The function should not return a value