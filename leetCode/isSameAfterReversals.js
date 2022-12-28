

var isSameAfterReversals = function(num) {
    let a = num.toString().split('').reverse()
    console.log(a)
    let b = parseInt(a.join(''))
    console.log(b)
    let c = b.toString().split('').reverse().join('')
    console.log(c)

    if(num == c){
        console.log(true)
        return true 
    } else {
        console.log(false)
        return false
    }
};

// isSameAfterReversals(526)
isSameAfterReversals(1800)