// Given an array of integers a, your task is to count the number of pairs i and j 
// (where 0 ≤ i < j < a.length), such that a[i] and a[j] are digit anagrams.

// Two integers are considered to be digit anagrams if they contain the same digits.
// In other words, one can be obtained from the other by rearranging the digits 
// (or trivially, if the numbers are equal). For example, 54275 and 45572 are digit anagrams, 
// but 321 and 782 are not (since they don't contain the same digits). 220 and 22 are also not considered as digit anagrams, 
// since they don't even have the same number of digits.

// a = [array of integers]

// count the number of pairs i and j 

newArray = {}

function solution(a) {
    for(let i = 0; i < a.length; i++){
        let sorted = a[i].sort
        // let sorted = sortNumber([a[i]])
        console.log(sorted)
        // if(newArray[ a[i] ]){ // backup line
        if(newArray[sorted]){
            newArray[ a[i] ]++
        } 
        else {
            newArray[sorted] = 1
        }
    }
    console.log(newArray)
}

solution([25, 35, 872, 228, 53, 278, 872])


    // else if(newArray[a[i]]){
    // }

    // for(let i = 0; i < newArray; i++){
    //     if(newArray[i]  anagram already exists )
    // }

    // newArray.map((index) => {
    //     let newObject = 
    //     newObject[index]++

    // })

// = set value
// == value
// === data type and value