


function solution(n) {
    if(n <= 2){
        return false
    }
    for(let a = 1; a < n; a++){
        for(let b = 2; b < n; b++){
            if(Math.pow(a, b) == n){
                console.log(true)
                return true
            }
        }
    }
    console.log(false)
    return false
}

solution(400)
solution(72)



// let b = 2
// while(Math.pow(a, b) <= n){
//     if(Math.pow(a, b) == n){
//         console.log(true)
//         return true
//     }
//     b++
// }