// Write functions using the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. 
// Do not use built-in methods (unless otherwise instructed) or create any additional arrays. (.length is a property, and is allowed.)

// 1. Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

function pushFront(arr, num){
    // arr.unshift(num) - easy way but assignment says do it manually
    arr.push(0)
    console.log(arr)
    console.log(arr.length)
    for(let i = (arr.length - 1); i >= 0; i--){
        console.log("i=" + i + "  " + "arr[i]=" + arr[i] + "  " + "arr[i-1]=" + arr[i-1])
        // console.log(arr[i])
        // console.log(arr[i-1])
        // console.log(arr)
        arr[i] = arr[i-1]
        console.log(arr)
    }
    arr[0] = num
    console.log(arr)

}

pushFront([5,7,2,3], 8)
pushFront([99], 7)

// -----------------------------------------------------------------------------

// function popFront(arr, num){
    
// }

// function insertAt(arr, num){
    
// }

// function removeAt(arr, num){
    
// }

// function swapPairs(arr, num){
    
// }

// function removeDuplicates(arr, num){

// }