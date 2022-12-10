

// CORRECT 100% Test cases
var sortPeople = function(names, heights) {
    let array = []
    for(let i = 0; i < names.length; i++){
        array.push([names[i], heights[i]])
    }
    let sortedArray = array.sort((a,b) => b[1]-a[1])
    let output = []
    for(let i = 0; i < sortedArray.length; i++){
        output.push(sortedArray[i][0])
    }
    console.log(output)
    return output 
};

sortPeople(["Mary","John","Emma"], [180,165,170])


// // WORKS but does not allow for duplicate keys
// var sortPeople = function(names, heights) {
//     let hashmap = {}
//     for(let i = 0; i < names.length; i++){
//         if(!hashmap[names[i]]){
//             hashmap[names[i]] = heights[i]
//         }
//     }
//     console.log(hashmap)
//     console.log(Object.entries(hashmap))
//     let sortedHashmapArray = Object.entries(hashmap).sort((a,b) => b[1]-a[1])
//     let output = []
//     for(let i = 0; i < sortedHashmapArray.length; i++){
//         output.push(sortedHashmapArray[i][0])
//     }
//     console.log(output)
//     return output 
// };