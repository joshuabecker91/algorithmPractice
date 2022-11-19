

function getWays(n, c) {
    let store = new Array(n + 1).fill(0)
    store[0] = 1
    console.log(store) // [1,0,0,0]
    // for(let coin of c){
    for(let i = 0; i < c.length; i++){ // loop through all the coins
        for (let j = c[i]; j < store.length; j++){ 
            let remainder = j - c[i]
            store[j] += store[remainder]
            console.log(store)
        }
    }
    console.log(store[n])
    return store[n]
}

getWays(3,[8,3,1,2])



// function getWays(n, c) {
//     // Write your code here
//     const dp = new Array(n+1).fill(0);
//     dp[0] = 1;
//     for(let a of c){
//         for(let i=0;i<=n;i++){
//             if(dp[i-a] > 0 || i-a == 0){
//                 dp[i] += dp[i-a];
//             }
//         }
//     }
//     console.log(dp);
//     return dp[dp.length-1]
// }



// function getWays(n, c) {
//     let dmm = new Array(c.length + 1).fill(null).map(() => new Array(n + 1).fill(0));
//     for (let i = 0; i < dmm.length; i++) {
//         dmm[i][0] = 1;
//     };
//     c.unshift(0);
//     for (let i = 1; i < c.length; i++) {
//         for (let j = 0; j <= n; j++) {
//             if (c[i] > j) {
//                 dmm[i][j] = dmm[i - 1][j]
//             } else {
//                 dmm[i][j] = dmm[i - 1][j] + dmm[i][j - c[i]];
//             };
//         };
//     };
//     return dmm[dmm.length - 1][dmm[dmm.length - 1].length - 1];
// }





// function getWays(n, c) {
//     // Write your code here
//     let map = new Map();
//     const gtWays = (n, c, index, map) => {
//         let key = n + "___" + index;
//         if (map.has(key)) return map.get(key);
//         if (n == 0) return 1;
//         if (n < 0) return 0;
//         let ways = 0;
//         for (let i = index; i < c.length; i++) {
//             ways = ways + gtWays(n - c[index], c, index, map);
//             index++;
//         }
//         map.set(key, ways);
//         return ways;
//     }
//     return gtWays(n, c, 0, map);
// }






// // SOLUTION
// function getWays(n, c) {
//     const memo = [1, ...Array(n).fill(0)]
//     for (let x of c){
//         console.log("main loop", memo)
//         for (let i = x; i <= n; i++){
//             memo[i] += memo[i - x]
//             console.log(memo)
//         }
//     }
//     console.log(memo[n])
//     return memo[n]
// }


// function getWays(n, c) {
//     const memo = [1, ...Array(n).fill(0)]
//     c.forEach(x => {memo.slice(x, n+1).forEach((_, i) => memo[i + x] += memo[i])})
//     return memo[n]
// }





// function getWays(n, c) {
//     let coins = c.sort((a,b) => b-a)
//     let max = n/coins[0]
//     console.log(max)


// }

// getWays(3,[8,3,1,2])

// let combos = []
// for (var i = 0; i < coins.length; i++){
//     for (var j = i + 1; j < coins.length; j++){
//         combos.push([coins[i], coins[j]]);
//     }
// }
// console.log(combos)



// function getWays(n, c) {
//     let coins = c.sort((a,b) => b-a)
//     let combos = []
//     for (var i = 0; i < coins.length; i++){
//         for (var j = i + 1; j < coins.length; j++){
//             combos.push([coins[i], coins[j]]);
//         }
//     }
//     console.log(combos)
// }


// function getWays(n, c) {
//     var r = [];

//     for (var i = 0; i < arr.length; i++) {
//         if (num === 1) r.push([arr[i]]);
//         else {
//             combination(arr.slice(i + 1), num - 1).forEach(function (val) {
//                 r.push([].concat(arr[i], val));
//             });
//         }
//     }
//     return r;
// } //combination


// BINARY TREE

// function getWays(n, c) {
//     let coins = c.sort((a,b) => b-a)
//     console.log(coins)
//     let hashmap = {}
//     let count = 0;
//     let balance = n;
//     // for(let i = 0; i < coins.length; i++){
//     let j = 0;
//     while(coins[j] <= balance){ //j <= coins.length
//         balance -= coins[j]
//         console.log(coins[j], balance)
//         if(balance == 0){
//             count++
//         }
//         if(coins[j] > balance){
//             j++
//         }
//     }
//     // balance = n
//     // }
//     console.log(count)
//     return count 
// }

// getWays(3,[8,3,1,2])



        // if(Math.floor(x / coins[i]) >= 1){
        //     n -= Math.floor(coins[i] / x)
        // }

        // if(x >= coins[i])
        // while(x < )