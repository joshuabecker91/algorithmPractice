
// coins is sorted 
// coins = [0, ]

function solution(coins, price) {
    let count = 0;
    // coins.reverse()
    for(let i = coins.length-1; i >= 0; i--){
        while(price >= coins[i]){
            price -= coins[i]
            count++
        }
    }
    console.log(count)
    return count
}

solution([1, 2, 10], 28)
// ((0 < i) && (i < coins.length))
// (coins[i] % coins[i-1] == 0)