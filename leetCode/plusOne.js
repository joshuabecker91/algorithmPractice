

var plusOne = function(digits) {
    let newDigits = BigInt(digits.join('')) + BigInt(1)
    let newDigits2 = Array.from(String(newDigits), Number)
    console.log(newDigits2)
    return newDigits2
};

plusOne([1,2,3])