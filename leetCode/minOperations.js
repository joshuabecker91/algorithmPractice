

// CORRECT works 100% test cases beats 83% time 13% memory
var minOperations = function(n) {
    let arr = []
    for(let i = 0; i < Math.floor(n/2); i++){
        arr.push((2 * i) + 1)
    }
    let count = 0
    for(let i = 0; i < arr.length; i++){
        count += (n - arr[i])
    }
    return count
};

minOperations(6)




// var minOperations = function(n) {
//     let arr = []
//     for(let i = 0; i < n; i++){
//         arr.push((2 * i) + 1)
//     }

//     if(n % 2 == 0){
//         middleNumber = arr[Math.floor(n/2)-1] + 1
//     } else {
//         middleNumber = arr[Math.floor(n/2)]
//     }
//     let count = 0
//     for(let i = 0; i < Math.floor(arr.length/2); i++){
//         if(arr[i] < middleNumber){
//             count += (middleNumber - arr[i])
//         }
//     }
//     return count
// };





// var minOperations = function(n) {
//     let arr = []
//     for(let i = 0; i < n; i++){
//         arr.push((2 * i) + 1)
//     }
//     console.log(arr)

//     if(n % 2 == 0){
//         middleNumber = arr[Math.floor(n/2)-1] + 1
//         console.log(middleNumber)
//     } else {
//         middleNumber = arr[Math.floor(n/2)]
//         console.log(middleNumber)
//     }
//     let count = 0
//     for(let i = 0; i < Math.floor(arr.length/2); i++){
//         if(arr[i] < middleNumber){
//             count += (middleNumber - arr[i])
//         }
//     }
//     console.log(count)
//     return count
// };





        // while(arr[i] < middleNumber){
        //     arr[i]++
        //     arr[x]--
        //     count++
        //     console.log(arr)
        // }