


function solution(a, b) {
    for(let i = 0; i < b.length; i++){
        a.push(b[i])
    }
    console.log(a)
    return a
}


solution([2, 2, 1], [10, 11])