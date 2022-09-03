// Write functions using the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. 
// Do not use built-in methods (unless otherwise instructed) or create any additional arrays. (.length is a property, and is allowed.)

// 1. Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
// note: avoid creating a new array or using special built in javasctipt functions

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

// 2. Pop Front 
// Given an array, remove and return the value at the beginning of the array. 
// Prove the value is removed from the array by printing it. 
// You may use .pop(), you are able do this without it though!
// note: avoid creating a new array or using special built in javasctipt functions

function popFront(arr){
    // arr.shift() //  - easy way but assignment says do it manually
    // console.log(arr)
    let firstNum = arr[0]
    console.log(firstNum)
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i+1]
    }
    console.log(arr)
    // arr.pop() // - easy way but asked not to use it
    arr.length = arr.length - 1
    console.log(arr)
}

popFront([0,5,10,15])
popFront([4,5,7,9])

// -----------------------------------------------------------------------------

// 3. Insert At 
// Given an array, index, and additional value, insert the value into array at given index. 
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). 
// You may use .push(), you are able do this without it though!
// note: avoid creating a new array or using special built in javasctipt functions

function insertAt(arr, index, value){
    // splice(start)
    // splice(start, deleteCount)
    // splice(start, deleteCount, item1)
    // splice(start, deleteCount, item1, item2, itemN)
    // arr.splice(2, 0, 311) //  - easy way but assignment says do it manually
    // console.log(arr)
    // arr.push(0) // - easy way but they want us to do it manually
    arr.length = arr.length + 1
    console.log(arr)
    for(let i = (arr.length-1); i >= index; i--){
        arr[i] = arr[i-1]
    }
    console.log(arr)
    arr[index] = value
    console.log(arr)
}

insertAt([100,200,5], 2, 311) // => [100,200,311,5]
insertAt([9,33,7], 1, 42) // => [9,42,33,7]

// -----------------------------------------------------------------------------

// 4. Remove At
// Given an array and an index into array, remove and return the array value at that index. 
// Prove the value is removed from the array by printing it. 
// Think of popFront(arr) as equivalent to removeAt(arr,0).
// note: avoid creating a new array or using special built in javasctipt functions

function removeAt(arr, index){
    console.log(arr[index])
    for(let i = index; i < arr.length; i++){
        arr[i] = arr[i+1]
    }
    console.log(arr)
    arr.length = arr.length - 1
    console.log(arr)
}

removeAt([1000,3,204,77], 1) // => 3 returned, with [1000,204,77] printed in the function
removeAt([8,20,55,44,98], 3) // => 44 returned, with [8,20,55,98] printed in the function

// -----------------------------------------------------------------------------

// 5. Swap Pairs 
// Swap positions of successive pairs of values of given array. 
// If length is odd, do not change the final element.
// note: avoid creating a new array or using special built in javasctipt functions

function swapPairs(arr){
    for(let i = 0; i < arr.length; i+=2){ // increment when other than i+1 must be += num
        console.log("before", arr[i], arr[i+1])
        let x = arr[i]
        let y = arr[i+1]

        if(y != undefined){
            arr[i] = y
            arr[i+1] = x
        }

        // arr[i] = arr[i+1]
        // arr[i+1] = y

        console.log("after", arr[i], arr[i+1])
    }
    console.log(arr)
}

swapPairs([10,20,30,40,50]) // => [2,1,4,3]
swapPairs([1,2,3,4]) // => [2,1,4,3]
swapPairs(["Brendan",true,42]) // => [true,"Brendan",42]

// -----------------------------------------------------------------------------

// 6. Remove Duplicates 
// Given a sorted array, remove duplicate values. Because array elements are already in order, 
// all duplicate values will be grouped together. If you already made the Remove At function, 
// you are welcome to use that! If you solved this using nested loops, 
// for an extra challenge, try to do it without any nested loops!

function removeDuplicates(arr){
    // let newSet = new Set(arr)
    // console.log(newSet)
    // console.log(newSet.values())
    
    for(let i = 0; i < arr.length; i++){
        let count = 0
        arr.forEach(index => {
            if (index === arr[i]) {
            count += 1;
            }
        });
        // for(let x = 0; x < arr.length; x++){ // instead of forEach could use regular for loop here
        //     if(arr[x] === arr[i]){
        //         count += 1;
        //     }
        // }
        if(arr[i] == arr[i+1]){
            arr.splice(i, count-1) // - easy way of doing it
            // console.log(arr)
        }
    }
    console.log(arr)
}

removeDuplicates([-2,-2,3.14,5,5,10]) // => [-2,3.14,5,10]
removeDuplicates([9,19,19,19,19,19,29]) // => [9,19,29]

// End
// -----------------------------------------------------------------------------