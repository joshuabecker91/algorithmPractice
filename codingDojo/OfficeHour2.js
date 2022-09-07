
// - Please write your algorithms in JavaScript
// - Please always have somebody sharing their screen

// 1. Max

// Given an array of numbers in your function, find the largest value in the array. 
// No Googling, and no built-ins. Assume your given array will have at least one number in it.


function findMaximum(arr){
    let maximum = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maximum){
            maximum = arr[i]
        }
    }
    console.log(maximum)
}

findMaximum([4,8,2,10,5]);

// 2. Second Highest Value

// Given an array of numbers in your function, return the SECOND highest value in the array. No Googling, and no built-ins. 
// Assume your given array will have at least two numbers in it.
// */


function secondHighest(arr){
    let max = 0;
    let max2nd = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max2nd && arr[i] < max ){
            max2nd = arr[i]
        }
    }
    console.log("The Max is:", max, "The Second Highest Max is:", max2nd)
    return max2nd
}

secondHighest([4,8,2,10,5]);
secondHighest([4,8,2,10,5,95,12,93,5,4,2,5,6,54,89,51,-1001,-52,-45]);

// console.log(secondHighest([4,8,2,10,5]));

