


function findIndexOfQueries(queries, array, x){
    let locations = []
    for(let j = 0; j < array.length; j++){
        if(array[j] == x){
            locations.push(j+1)
        }
    }
    console.log(locations)

    let output = []
    for(let i = 0; i < queries.length; i++){
        let index = queries[i] - 1
        if(locations[index]){
            console.log("yes this index exists", locations[queries[i]-1])
            output.push( locations[queries[i]-1])
        } else {
            console.log("no this index does not exist", locations[queries[i]-1])
            output.push(-1)
        }
    }
    console.log(output)
    return output 
}


findIndexOfQueries([100, 4, 2], [1, 2, 20, 8, 8, 1, 2, 5, 8, 0], 8) // [-1, -1, 5]
// findIndexOfQueries([100, 4, 2], [1, 2, 20, 8, 8, 1, 2, 5, 8, 0], 2)
//        ['Ks']              // find index 


// find the 100th occurance of int X 
// find the 4th occurance of int X 
// find the 2nd occurance of int X 

// The task is to find the index of the Kth occurrence of the integer X 
// in the array for each of the queries. 




// Problem Statement: Given an array of integers, report the answers to multiple queries based on the elements of the array with respect to a given integer.

// an array of integers an integer X, 
// and a few queries are available. 
// Each query is described by a single integer K.  [100, 4, 2]
// The task is to find the index of the Kth occurrence of the integer X in the array for each of the queries. 
// Report -1 as the answer to the corresponding query if the Kth occurrence does not exist.

//EXAMPLE:
// queries: [100, 4, 2]
// array: [1, 2, 20, 8, 8, 1, 2, 5, 8, 0]
// X: 8

// OUTPUT:
// [-1, -1, 5]