

function solution(a, b) {
    let count = 0;
    let aArray = []
    let bArray = []
    if(a.join('') == b.join('')){
        console.log(a.join(''),b.join(''))
        console.log(true)
        return true
    }
    if(a.length != b.length){
        console.log(false)
        return false
    }
    for(let i = 0; i < a.length; i++){
        if(a[i] != b[i]){
            aArray.push(a[i])
            bArray.push(b[i])
            count++
        }
    }
    console.log(aArray, bArray)
    if(count == 2 && b.includes(a[0]) && a.includes(b[0])){
        console.log(true)
        return true
    }
    console.log(false)
    return false
}

// solution([1,2,3], [1,2,3])
// solution([1,2,3], [2,1,3])
solution([1,1,4], [1,2,3])