
// Given an array of integers, determine the minimum number of elements to 
// delete to leave only elements of equal value.




function equalizeArray(arr) {
    let object = {}
    for(let i = 0; i < arr.length; i++){
        if(!object[arr[i]]){
            object[arr[i]] = 1;
        }
        else {
            object[arr[i]]++;
        }
    }
    console.log(object);
    let max = 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(object[arr[i]] > max){
            max = object[arr[i]];
            console.log("this is object[arr[i]]", object[arr[i]])
        }
        console.log("this is sum", sum)
        // sum += 1; //can do it this way too
    }
    console.log(max);
    console.log(arr.length - max);
    // console.log(sum-max); //can do it this way too
    let minToDelete = (arr.length - max);
    return minToDelete;
}


equalizeArray([3, 3, 2, 1, 3, 3]);