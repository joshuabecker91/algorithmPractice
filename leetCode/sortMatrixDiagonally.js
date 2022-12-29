

var diagonalSort = function(mat) {
    // console.log()
    // let series = mat.join(',')
    let i =mat.length-1
    let currentSet = []
    for(let j = 0; j < mat[i].length; j++){
        let temp = []
        let x = i
        if(j == 0){
            temp.push(mat[i][j])
            console.log(temp)
            continue
        }
        while(x > 0){ // && j < mat[i].length-1
            temp.push(mat[x][j-1])
            x--
        }
        console.log(temp)
    }
    
};

diagonalSort([[3,3,1,1],[2,2,1,2],[1,1,1,2]])



// [[3,3,1,1],
//  [2,2,1,2],
//  [1,1,1,2]]



// [[11,25,66,1,69,7],
// [23,55,17,45,15,52],
// [75,31,36,44,58,8],
// [22,27,33,25,68,4],
// [84,28,14,11,5,50]]

// [[5,17, 4, 1,52, 7],
// [11,11,25,45, 8,69],
// [14,23,25,44,58,15],
// [22,27,31,36,50,66],
// [84,28,75,33,55,68]]