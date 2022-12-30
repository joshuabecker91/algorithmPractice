


var equalPairs = function(grid) {
    let count = 0
    let columns = []
    for(let j = 0; j < grid.length; j++){
        let y = []
        for(let z = 0; z < grid.length; z++){
            let temp = grid[z][j]
            y.push(temp)
        }
        columns.push(y)
    }

    for(let i = 0; i < grid.length; i++){
        let x = grid[i]
        for(let j = 0; j < columns.length; j++){
            let y = columns[j]
            if(((x.every((val, index) => val === y[index]) == true))){
                count++
            }
        }
    }
    return count
};

// equalPairs([[3,2,1],[1,7,6],[2,7,7]])
// equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]])
equalPairs([[11,1],[1,11]])



// Refactored - CORRECT works 100% test cases beats 10% time 70% memory... slow
// var equalPairs = function(grid) {
//     let count = 0
//     for(let i = 0; i < grid.length; i++){
//         let x = grid[i]
//         for(let j = 0; j < grid[i].length; j++){ // loop through each row
//             let y = [] // assemble the row
//             for(let z = 0; z < grid.length; z++){
//                 let temp = grid[z][j]
//                 y.push(temp)
//             }
//             // if(JSON.stringify(x) == JSON.stringify(y)){
//             // if(x.join(',') == y.join(',')){
//             if(((x.every((val, index) => val === y[index]) == true))){
//                 count++
//             }
//         }
//     }
//     return count 
// };




// Worked on removing triple nested for loop to improve efficiency - and with "every" super fast
// var equalPairs = function(grid) {
//     let count = 0
//     let columns = []
//     for(let j = 0; j < grid.length; j++){
//         let y = []
//         for(let z = 0; z < grid.length; z++){
//             let temp = grid[z][j]
//             y.push(temp)
//         }
//         columns.push(y)
//     }

//     for(let i = 0; i < grid.length; i++){
//         let x = grid[i]
//         for(let j = 0; j < columns.length; j++){
//             let y = columns[j]
//             if(((x.every((val, index) => val === y[index]) == true))){
//                 count++
//             }
//         }
//     }
//     return count
// };



// var equalPairs = function(grid) {
//     let count = 0
//     for(let i = 0; i < grid.length; i++){
//         let x = grid[i]
//         console.log("x: ", x)
//         for(let j = 0; j < grid[i].length; j++){
//             let y = []
//             for(let z = 0; z < grid.length; z++){
//                 let temp = grid[z][j]
//                 y.push(temp)
//             }
//             console.log("y: ", y)
//             if(x.join(',') == y.join(',')){
//                 count++
//             }
//         }
//         console.log("------------------------")
//     }
//     console.log(count)
//     return count 
// };





// console.log("x: ", x.join(''), "y: ", y.join(''))