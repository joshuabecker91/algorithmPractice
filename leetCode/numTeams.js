

// CORRECT works 100% test cases 38% beat time 90% memory
var numTeams = function(rating) {
    let count = 0;
    for(let i = 0; i < rating.length; i++){
        for(let j = i+1; j < rating.length; j++){
            for(let k = j+1; k < rating.length; k++){
                if(rating[i] < rating[j] && rating[j]< rating[k]){
                    count++
                }
                else if(rating[i] > rating[j] && rating[j] > rating[k]){
                    count++
                }
            }
        }
    }
    return count
};

numTeams([2,5,3,4,1])


// CORRECT but very slow pushing to array unnecessarily
// var numTeams = function(rating) {
//     let output = []
//     for(let i = 0; i < rating.length; i++){
//         for(let j = i+1; j < rating.length; j++){
//             for(let k = j+1; k < rating.length; k++){
//                 if(rating[i] < rating[j] && rating[j]< rating[k]){
//                     output.push([rating[i], rating[j], rating[k]])
//                 }
//                 else if(rating[i] > rating[j] && rating[j] > rating[k]){
//                     output.push([rating[i], rating[j], rating[k]])
//                 }
//             }
//         }
//     }
//     console.log(output)
//     console.log(output.length)
//     return output.length
// };

// numTeams([2,5,3,4,1])