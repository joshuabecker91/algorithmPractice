

// Refactored - CORRECT works 100% test cases beats 92% time and 79% memory
var diagonalSum = function(mat) {
    let j = mat[0].length - 1
    let sum = 0
    for(let i = 0; i < mat.length; i++){
        if (i == j){
            sum += mat[i][i]
        } else {
            sum += mat[i][i]
            sum += mat[i][j]
        }
        j -= 1
    }
    return sum 
};

diagonalSum([[1,2,3], [4,5,6], [7,8,9]])



// CORRECT works 100% test cases beats 92% time and 79% memory
// var diagonalSum = function(mat) {
//     let left = 0
//     let right = mat[0].length - 1
//     let sum = 0
//     for(let i = 0; i < mat.length; i++){
//         if (left == right){
//             sum += mat[i][left]
//         } else {
//             sum += mat[i][left]
//             sum += mat[i][right]
//         }
//         left += 1
//         right -= 1
//     }
//     return sum 
// };




// var diagonalSum = function(mat) {
//     let left = 0
//     let right = mat[0].length - 1
//     let sum = 0
//     for(let i = 0; i < mat.length; i++){
//         if (left == right){
//             sum += mat[i][left]
//         } else {
//             sum += mat[i][left]
//             sum += mat[i][right]
//         }
//         // console.log("Left", mat[i][left], "Right", mat[i][right], "Sum", sum)
//         left += 1
//         right -= 1
//     }
//     // console.log(sum)
//     return sum 
// };



// early return not necessary
// if(mat.length == 1){
//     return mat[0][0]
// }