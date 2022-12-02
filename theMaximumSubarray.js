

function maxSubarray(arr) {
    let max = -Infinity;
    let x = []
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            let newArray = arr.slice(i,j+1)
            let sum = newArray.reduce((a,b) => a+b,0)
            if(sum > max){
                max = sum 
                x = newArray
            }
        }
    }
    let sumOriginal = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sumOriginal += arr[i]
        }
    }
    if(sumOriginal == 0){
        return [-1, -1]
    }
    console.log([max, sumOriginal])
    return [max, sumOriginal]
}

maxSubarray([-1,2,3,-4,5,10])
// maxSubarray([-2,-3,-1,-4,-6])




// function maxSubarray(arr) {
//     let max = -Infinity;
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//         if (max < sum) {
//             max = sum;
//         }
//         console.log(arr[i] + ' ' + sum + ' ' + max);
//         if (sum < 0) {
//             sum = 0;
//         }
//     }
//     arr.sort((a, b) => { return a - b; });
//     let max2 = arr[arr.length - 1];
//     for (let i = arr.length -2; i >= 0; i--) {
//         if (arr[i] <= 0) break; 
//         max2 += arr[i];       
//     }
//     return [max, max2];
// }


// maxSubarray([-1,2,3,-4,5,10])






// function maxSubarray(arr) {
//     // Write your code here

//     let maxSA = arr[0];
//     let maxSS = arr[0];
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         max = Math.max(max + arr[i], arr[i]);
//         maxSA = Math.max(maxSA, max);
//         maxSS = Math.max(Math.max(maxSS, arr[i]), maxSS + arr[i]);
//     };

//     return [maxSA, maxSS];
// }
