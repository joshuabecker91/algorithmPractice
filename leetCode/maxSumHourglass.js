
// return max of this pattern in matrix
// ooo
//  o 
// ooo

// CORRECT 100% Test cases beats 98% time 96% memory
var maxSum = function(grid) {
    let xMax = grid.length - 2
    let yMax = grid[0].length - 2
    let max = -Infinity;

    let i = 0;
    while(i < xMax){
        let j = 0;
        while(j < yMax){
            let row1 = grid[i][j] + grid[i][j+1] + grid[i][j+2]
            let row2 = grid[i+1][j+1]
            let row3 = grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2]
            let sum = row1 + row2 + row3 
            console.log(row1, row2, row3)
            console.log("sum is: ",sum)
            if(sum > max){
                max = sum
            }
            j++
        }
        i++
    }
    console.log(max)
    return max
};

// maxSum([[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]])
// maxSum([[1,2,3],[4,5,6],[7,8,9]])
maxSum([[520626,685427,788912,800638,717251,683428],[23602,608915,697585,957500,154778,209236],[287585,588801,818234,73530,939116,252369]])
// 5095181 expected