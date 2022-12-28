

// Refactored - CORRECT works 100% test cases beats 95% time 93% memory
var islandPerimeter = function(grid) {
    let count = 0
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            let cell = grid[i][j]
            if(cell == 1){
                let temp = 4
                if(i > 0 && grid[i-1][j] == 1) temp--
                if(i < grid.length-1 && grid[i+1][j] == 1) temp--
                if(j > 0 && grid[i][j-1] == 1) temp--
                if(j < grid[i].length-1 && grid[i][j+1] == 1) temp--
                count += temp
            }
        }
    }
    return count
};

islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])




// CORRECT, can be cleaned up
// var islandPerimeter = function(grid) {
//     let count = 0
//     for(let i = 0; i < grid.length; i++){
//         for(let j = 0; j < grid[i].length; j++){
//             let cell = grid[i][j]
//             if(cell == 1){
//                 let temp = 4
//                 if((i > 0) && (grid[i-1][j] == 1)){ //check above
//                     temp--
//                 }
//                 if((i < grid.length-1) && (grid[i+1][j] == 1)){ //check below
//                     temp--
//                 }
//                 if((j > 0) && (grid[i][j-1] == 1)){ //check left
//                     temp--
//                 }
//                 if((j < grid[i].length-1) && (grid[i][j+1] == 1)){ //check right
//                     temp--
//                 } 
//                 // console.log(count)
//                 count += temp
//             }
//         }
//     }
//     console.log(count)
//     return count
// };






// var islandPerimeter = function(grid) {
//     let count = 0
//     for(let i = 0; i < grid.length; i++){
//         for(let j = 0; j < grid[i].length; j++){
//             let cell = grid[i][j]
//             console.log(cell)
//             let temp = 0
//             if(cell == 1){
//                 temp = 4
//                 if(i > 0){
//                     if(grid[i-1][j] == 1){ //check above
//                         temp--
//                     }
//                 }
//                 if(i < grid.length-1){
//                     if(grid[i+1][j] == 1){ //check below
//                         temp--
//                     }
//                 }
//                 if(j > 0){
//                     if(grid[i][j-1] == 1){ //check left
//                         temp--
//                     }
//                 }
//                 if(j < grid[i].length-1){
//                     if(grid[i][j+1] == 1){ //check right
//                         temp--
//                     } 
//                 }
//                 console.log("count this iteration", count)
//                 count += temp
//             }
//         }
//     }
//     console.log(count)
//     return count
// };