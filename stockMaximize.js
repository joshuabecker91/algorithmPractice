// function stockmax(prices) {
//     // Set the last value to max and iterate backwards through the array.
//     // If the vext value is less than max, add what would have been the daily profit onto profit (max - dayily buy price)
//     // If the value is greater than max, set that profit as the new max
    
//     let max = prices[prices.length-1];
//     let profit = 0;



function stockmax(prices) {
    let max = 0;
    let profit = 0;

    for(let i = prices.length-1; i >= 0; i--){
        if(prices[i] > max){
            max = prices[i]
        }
        else{
            profit += (max - prices[i])
        }
    }
    console.log(profit)
    return profit
}

stockmax([7,8,5,4,3,4,5])



// function stockmax(prices) {
//     let bankAcc = 0;
//     let b = []
//     let s = []
//     for(let i = 0; i < prices.length; i++){
//         if(prices[i+1] > prices[i]){
//             b.push(prices[i]);
//             // bankAcc -= prices[i];
//             console.log(b, bankAcc)
//         }
//         else{
//             if(b.length >= 1){
//                 s.push(prices[i]);
//             }
//         }
//         if(s.length >= 1){
//             let shares = 0;
//             let sum = 0;
//             for(let j = i-1; j <= 0; j--){
//                 if(prices[j] < s[0]){
//                     bankAcc -= prices[j];
//                     sum += prices[j] 
//                     shares++
//                 }
//             }
//             let collected = s[0] * shares
//             // let collected = s[0] * b.length
//             // console.log(collected)
//             // console.log((b.reduce((a,b) => a+b)))
//             // console.log(collected - (b.reduce((a,b) => a+b)))
//             // bankAcc += (collected - (b.reduce((a,b) => a+b)));
//             bankAcc += (collected - sum);
//             b = [];
//             s = [];
//         }
//     }
//     // || i == prices.length
//     // if(bankAcc == 0){
//     //     return 0;
//     // }
//     console.log(bankAcc);
//     return bankAcc;
// }

// // stockmax([1,2,100])
// // stockmax([1,3,1,2])
// stockmax([5,4,3,4,5])





// function stockmax(prices) {
//     let bankAcc = 0;
//     // let len = prices.length - 1
//     let b = []
//     let s = []
//     // let max = Math.max(...prices)

//     for(let j = prices.length-1; j >= 0; j--){
//         if(prices[j-1] < prices[j]){
//             b.push(prices[j-1]);
//             bankAcc -= prices[j-1];
//             console.log(b, bankAcc)
//         }
//         else{
//             if(b.length >= 1){
//                 s.push(prices[j]);
//             }
//         }
//         if(s.length >= 1){
//             let collected = s[0] * b.length
//             console.log(collected)
//             // console.log((b.reduce((a,b) => a+b)))
//             // console.log(collected - (b.reduce((a,b) => a+b)))
//             // bankAcc += (collected - (b.reduce((a,b) => a+b)));
//             bankAcc += collected;
//             b = [];
//             s = [];
//         }
//     }
//     console.log(bankAcc);
//     return bankAcc;
// }

// stockmax([5,4,3,4,5])


