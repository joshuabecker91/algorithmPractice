

var pivotInteger = function(n) {
    let sum = 0
    
    for(let i = 1; i < n+1; i++){
        sum += i
        // console.log(i, sum)
    }
    let sum1 = 0
    let sum2 = 0
    for(let i = 1; i < n+1; i++){
        sum1 += i
        sum2 = (sum - sum1) + i
        if(sum1 == sum2){
            // console.log(i)
            return i
        }
        // console.log(sum1, sum2)
    }
    // console.log(-1)
    return -1
};

pivotInteger(8)


// const fillRange = (start, end) => {
//     return Array(end - start + 1).fill().map((item, index) => start + index);
// };


// let newArray = new Array([1,...n])
// console.log(newArray)