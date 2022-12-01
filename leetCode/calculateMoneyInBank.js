

var totalMoney = function(n) {
    let total = 0;
    let w = 1;
    let d = w;
    let temp = d
    while(n > 0){
        total += d
        // console.log(d, total)
        n--
        d++
        if(d >= (w + 7)){
            w += 1
            temp += 1
            d = temp
        }
    }
    // console.log(total)
    return total
};

// totalMoney(4)
totalMoney(10)