
// Reverse the number, subtract the difference.

// int i: the starting day number
// int j: the ending day number
// int k: the divisor

// let a = 20
// let b = a.toString()
// console.log(b.split(''))


let beautifulCount = 0;

function beautifulDays(i, j, k) {
    for(i; i <= j; i++){
        let w = i.toString()
        let x = w.split('')
        // console.log(x)
        let y = x.reverse()
        // console.log(y)
        let z = y.join('')
        // console.log(z)
        if((i - z) % k == 0){
            beautifulCount++
        }
    }
    console.log(beautifulCount)
    return beautifulCount
}


beautifulDays(20,23,6)