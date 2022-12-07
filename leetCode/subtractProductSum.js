

var subtractProductAndSum = function(n) {
    let nArray = n.toString().split('')
    console.log(nArray)
    let product = 1;
    let sum = 0;
    for(let i = 0; i < nArray.length; i++){
        product *= parseInt(nArray[i])
        sum += parseInt(nArray[i])
    }
    console.log(product - sum)
    return product - sum
};

subtractProductAndSum(234)