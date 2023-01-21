

var canIWin = function(maxChoosableInteger, desiredTotal) {
    let sum = 0
    let isOne = true
    for(let i = maxChoosableInteger; i > 0; i--){
        sum += i
        console.log(isOne, sum, desiredTotal)
        if(sum >= desiredTotal){
            break 
        }
        if(isOne == true){
            isOne = false 
        } else {
            isOne = true
        }
    }
    console.log(isOne)
    return isOne
};

// canIWin(10,11)
canIWin(10,40)