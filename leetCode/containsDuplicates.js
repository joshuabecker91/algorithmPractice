
// successful hashmap

let is_double = false;

var containsDuplicate = function(nums) {
    let object = {} //hashmap
    for(let i = 0; i < nums.length; i++){
        if(object[nums[i]]){
            object[nums[i]]++
        }
        else{
            object[nums[i]] = 1
        }
    }
    console.log(object);
    for (value in object) {
        console.log(object[value])
        if(object[value] > 1){
            console.log("true")
            is_double = true;
            return is_double;
        }
        else{
            console.log("false")
            is_double = false;
        }
    }
    return is_double;
}

containsDuplicate([1,2,3,1]);



// for(let i = 0; i < object.length-1; i++){
//     if(object[i] == 1){
//         console.log("false")
//         // return true;
//     }
//     else{
//         console.log("true")
//         return true;
//     }
// }
// return false;


// if(object.values(i).includes(>1)){
//     return true
// }
// else {
//     return false
// }



            // if(array[string[x]]){
            //     array[string[x]]++
            //     if(array[string[x]] > 7){
            //         console.log("error - more than 7")
            //         return "error - more than 7"
            //     } 
            //     if(array[string[x]] = "_"){
            //         console.log("error - underscore exists")
            //         return "error - underscore exists"
            //     }
            // } else {
            //     array[string[x]] = 1
            // }


// brute force
// function containsDuplicate(nums) {
//     let is_double = false;
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = 0; j < nums.length; j++) {
//             if(i != j && nums[i] == nums[j]) {
//                 is_double = true;
//                 break
//             }
//         }
//     }
//     // console.log(is_double);
//     return is_double;
// }

// containsDuplicate([1,2,3,1])
// containsDuplicate([1,2,3,4])
// containsDuplicate([1,1,1,3,3,4,3,2,4,2])