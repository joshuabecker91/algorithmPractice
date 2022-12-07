
// prices = the toy prices
// k = marks budget

// Refactored
function maximumToys(prices, k) {
    prices = prices.sort((a,b) => a-b) //sort the array
    let x = 0; //create a variable
    let count = 0;
    for(let i = 0; i < prices.length; i++){
        x += prices[i]
        if(x >= k){
            return count
        }
        count++
    }
}

maximumToys([1,2,3,4], 7)
// maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)


// return the maximum number of toys


// maximumToys([7,11,22,30,40], 70)
// [0,1,2,3]


// CORRECT works for 100% test cases 
// function maximumToys(prices, k) {
//     prices = prices.sort((a,b) => a-b)
//     console.log(prices)
//     let x = 0;
//     let count = 0;
//     for(let i = 0; i < prices.length; i++){
//         // console.log(count, sum)
//         x += prices[i]
//         if(x >= k){
//             return count
//         }
//         count++
//         // console.log(i, prices[i], sum)
//     }
// }

