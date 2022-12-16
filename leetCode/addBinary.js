
// WORKS for 195/294 test cases but running into issue with 32 bit 
// var addBinary = function(a, b) {
//     let x = parseInt(a, 2)
//     let y = parseInt(b, 2)
//     console.log(x,y)
//     let sum = x + y
//     console.log(sum)
//     console.log(sum.toString(2))
// };

// addBinary("11", "1")
// addBinary("1010", "1011")




// var addBinary = function(a, b) {
//     return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
// };



var addBinary = function(a, b) {
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");
    len = a.length > b.length ? a.length : b.length;
    result = [];
    for(let i = 0; i < len; i += 1){
        num1 = Number(a[i] || 0);
        num2 = Number(b[i]) || 0;
        curr = Number(result[i]||0) + num1 + num2
        if(curr >= 2){
            result[i] = curr%2;
            result.push(1)
        }
        else{
            result[i] = curr
        }
    }
    return result.reverse().join("")
};