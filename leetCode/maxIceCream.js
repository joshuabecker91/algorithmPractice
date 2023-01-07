

// CORRECT works 100% test cases beats 95% time 40% memory
var maxIceCream = function(costs, coins) {
    let count = 0
    let coinBalance = coins
    costs.sort((a,b) => a-b)// ascending 1,2,3,4,5...
    for(let i = 0; i < costs.length; i++){
        if(costs[i] <= coinBalance){
            count++
            coinBalance -= costs[i]
        } else {
            break
        }
    }
    return count 
};

maxIceCream([10,2,10,10,10,10,8,2,7,8], 25)



// var maxIceCream = function(costs, coins) {
//     let count = 0
//     let coinBalance = coins
//     // sort the costs array 
//     costs.sort((a,b) => a-b)
//     console.log(costs)
//     // each iteration decrement the coins and keep track of sum / count variable
//     for(let i = 0; i < costs.length; i++){
//         if(costs[i] <= coinBalance){
//             count++
//             coinBalance -= costs[i]
//         } else {
//             break
//         }
//     }
//     // when exceed coin balance break and return the count
//     console.log(count)
//     return count 
// };

// maxIceCream([1,3,2,4,1], 7)
