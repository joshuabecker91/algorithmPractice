

function solution(symbol) {
    if(isNaN(symbol)){
        return "not a digit"
    }
    if(Number(symbol) % 2 == 0){
        return "even"
    } 
    if(Number(symbol) % 2 != 0) {
        return "odd"
    }
}

solution('5')