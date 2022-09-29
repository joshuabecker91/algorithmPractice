// A driver is driving on the freeway. The check engine light of his vehicle is on, 
// and the driver wants to get service immediately. 
// Luckily, a service lane runs parallel to the highway. 
// It varies in width along its length.


// n = 4
// width = [2,3,2,1]
// cases = [[1,2],[2,4]]
// cases = [[i,j],[i,j]]
// i = start 
// j = end 




// width = [2, 3, 1, 2, 3, 2, 3, 3]
// cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]

function serviceLane(n, cases, width) {
    for(let i = 0; i < cases.length; i++){
        let length = cases[i][1] - cases[i][0];
        var min = width[cases[i][0]]
        for (let j = cases[i][0]; j <= cases[i][1]; j++){
            if (width[j] < min){
                min = width[j]
            }
        }
        console.log(min)
    }
}

serviceLane(8 , [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]], [2, 3, 1, 2, 3, 2, 3, 3])




// function serviceLane(n, cases, width) {
//     for(let i = 0; i < cases.length; i++){
//         let max = 0;
//         for(let x = 0; x < width.length; x++){
//             let vehicleWidth = cases[i][1] - cases[i][0];
//             if(vehicleWidth <= width[x]){
//                 // console.log("Yes vehicle fit! ", vehicleWidth, width[x])
//                 if(vehicleWidth > max){
//                     max = vehicleWidth
//                 }
//             }
//         }
//         console.log(max) 
//     }
// }





// ('\n') + '\n')



// let newString = '';
// let width = 0;
// let vehicleWidth = cases[0][1] - cases[0][0];
// for(let i = 0; i < cases.length; i++){
//     width = (cases[i][1] - cases[i][0])
    // newString += width + '\n'
//     if(width < vehicleWidth){
//         vehicleWidth = width
//     }
//     // console.log(width)
// }
// console.log(newString)
// // console.log(vehicleWidth)
// // return vehicleWidth