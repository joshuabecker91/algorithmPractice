
// console.log("yes")

function solution(a, b, c) {
    // let array = [a,b,c]
    // for(let i = 0; i < array.length; i++){
    // }
    if(a == b){
        console.log(c)
        return c
    }
    else if(b == c){
        console.log(a)
        return a
    }
    else if(a == c){
        console.log(b)
        return b
    }
}

solution(2, 7, 2);
