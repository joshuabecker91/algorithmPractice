

function solution(a, b, c) {

    if(a + b == c){
        console.log(true)
        return true
    }
    if(a - b == c){
        console.log(true)
        return true
    }
    if(a * b == c){
        console.log(true)
        return true
    }
    if(a / b == c){
        console.log(true)
        return true
    }
    console.log(false)
    return false
}

solution(2, 3, 5)


