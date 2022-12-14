

// CORRECT 100% Test Cases
var countGoodTriplets = function(arr, a, b, c) {
    let output = []
    let count = 0
    // 0 <= i < j < k < arr.length
    // |arr[i] - arr[j]| <= a
    // |arr[j] - arr[k]| <= b
    // |arr[i] - arr[k]| <= c

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            let test1 = Math.abs(arr[i] - arr[j])
            if(test1 <= a){
                for(let k = j+1; k < arr.length; k++){
                    let test2 = Math.abs(arr[j] - arr[k])
                    let test3 = Math.abs(arr[i] - arr[k])
                    if(test2 <= b && test3 <= c){
                        output.push([arr[i],arr[j],arr[k]])
                        count++
                    }
                }
            }
        }
    }
    // console.log(output)
    // console.log(count)
    return count
};

countGoodTriplets([3,0,1,1,9,7], 7, 2, 3)




// CORRECT BEATS 99% and 90% memory but doesnt push what the triplets are to an array just uses count increment
// var countGoodTriplets = function(arr, a, b, c) {
//     let count = 0

//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             let test1 = Math.abs(arr[i] - arr[j])
//             if(test1 <= a){
//                 for(let k = j+1; k < arr.length; k++){
//                     let test2 = Math.abs(arr[j] - arr[k])
//                     let test3 = Math.abs(arr[i] - arr[k])
//                     if(test2 <= b && test3 <= c){
//                         count++
//                     }
//                 }
//             }
//         }
//     }
//     return count
// };