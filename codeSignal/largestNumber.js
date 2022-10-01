
// Given an integer n, return the largest number that contains exactly n digits.

// n = 2, the output should be
// solution(n) = 99.

function solution(n) {
    let newString = ''
    for(let i = 0; i < n; i++){
        newString += 9
    }
    console.log(Number(newString))
    return Number(newString)
}

solution(6)