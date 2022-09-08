
// one candle for each year of their total age

// They will only be able to blow out the tallest of the candles. 

// Count how many candles are tallest.

let tallest = 0;
let count = 0;

function birthdayCakeCandles(candles) {
    // Write your code here
    for(let i = 0; i < candles.length; i++){
        if(candles[i] > tallest){
            tallest = candles[i]
        }
    }
    for( let i = 0; i < candles.length; i++){
        if(candles[i] == tallest){
            count += 1;
        } 
    }
    console.log(count);
    return count
}

birthdayCakeCandles([3, 2, 1, 3])
