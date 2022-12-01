

// CORRECT works for 100% test cases
var totalMoney = function(n) {
    let total = 0;
    let w = 1;
    let d = w;
    while(n > 0){
        total += d
        // console.log(d, total)
        n--
        d++
        if(d >= (w + 7)){
            w += 1
            d = w
        }
    }
    // console.log(total)
    return total
};

// totalMoney(4)
totalMoney(10)




// CORRECT works for 100% test cases
// var totalMoney = function(n) {
//     let numWeeks = Math.floor(n / 7);
//     let remainingDays = n % 7;
//     let total = 0;
//     let i = numWeeks
//     while(i > 0){
//         total += (21 + (i * 7))
//         i--
//     }
//     let j = remainingDays
//     while(remainingDays > 0){
//         total += (numWeeks + j)
//         remainingDays--
//         j--
//     }
//     // console.log(total)
//     return total;
// };