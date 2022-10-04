

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:


// arr[i][j]


// 1 2 3   
// 4 5 6    
// 9 8 9   

// let arr = [[0, 1, 2],[4, 5, 6],[7, 8, 9]]

function diagonalDifference(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;
    let x = arr.length - 1;

    // arr[0][0] + arr[1][1] + arr[2][2];
    for(let i = 0; i < arr.length; i++){
        leftToRight += arr[i][i]
    }
    console.log(leftToRight);

    // arr[0][2] + arr[1][1] + arr[2][0];
    for(let i = 0; i < arr.length; i++){
        rightToLeft += arr[i][x]
        x = x - 1;
    }
    console.log(rightToLeft);

    let difference = Math.abs(leftToRight - rightToLeft);
    console.log(difference);
    return difference;
}

// diagonalDifference([[0, 1, 2],[4, 5, 6],[7, 8, 9]]);
diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]);





// function diagonalDifference(arr) {

//     let leftToRight = arr[0][0] + arr[1][1] + arr[2][2];
//     console.log(arr[0][0]);
//     console.log(arr[1][1]);
//     console.log(arr[2][2]);
//     console.log(leftToRight);

//     let rightToLeft = arr[0][2] + arr[1][1] + arr[2][0];
//     console.log(arr[0][2]);
//     console.log(arr[1][1]);
//     console.log(arr[2][0]);
//     console.log(rightToLeft);

//     let difference = Math.abs(leftToRight) - Math.abs(rightToLeft);
//     console.log(Math.abs(difference));
//     return Math.abs(difference);
// }

// // diagonalDifference([[0, 1, 2],[4, 5, 6],[7, 8, 9]]);
// diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]);