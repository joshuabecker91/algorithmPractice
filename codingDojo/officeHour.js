// # 1
// Max, Min, Average
// Given an array

// print 
// max
// min
// average values for that array

let arr = [0,1,7,2,3,8,4,5]

var max = arr[0];
var min = arr[0];
var average = 0;

var sum = 0;

function minMaxAvg(arr){
    console.log(arr.length)
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    average = sum / arr.length
    console.log("Average is:",average) // initial line 28
    console.log("Max is:",max)
    console.log("Min is:",min)
    return max
}

console.log(minMaxAvg(arr))