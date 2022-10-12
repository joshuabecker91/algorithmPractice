

// let object = {}


var maxProfit = function(prices) {
    let maxDifference = 0;
    for(let i = 0; i < prices.length; i++){
        for(let x = i+1; x < prices.length; x++){
            let difference = prices[x] - prices[i];
            if(difference > maxDifference){
                maxDifference = difference;
            }
        }
    }
    console.log(maxDifference);
    return maxDifference;
}

maxProfit([7,1,5,3,6,4])


// var maxProfit = function(prices) {
//     let max = prices[0];
//     let min = prices[0];
//     for(let i = 0; i < prices; i++){
//         if(prices[i] > max){
//             max = prices[i]
//         }
//         if(prices[i] < min){
//             min = prices[i]
//         }
//     }
//     console.log(min,max)
//     let difference = max - min;
// }