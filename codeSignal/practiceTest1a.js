// Given an array a, your task is to apply the following mutation to it

// Array a mutates into a new array b of the same length
// For each i from 0 to a.length - 1 inclusive, b[i] = a[i - 1] + a[i] + a[i + 1]
// If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, it is considered to be 0
// For example, b[0] equals 0 + a[0] + a[1]

let b = []

function solution(a){
    for(let i = 0; i < a.length; i++){
        console.log("a[i] is" + a[i])
        console.log(a[-1])
        let x = a[i - 1]
        let y = a[i]
        let z = a[i + 1]
        if(!x){
            x = 0
        }
        if(!y){
            y = 0
        }
        if(!z){
            z = 0
        }
        b[i] = x + y + z
        console.log(x, y, z)
        console.log(b[i])
    }
    console.log(b)
    return b
}

solution([4, 0, 1, -2, 3])

// For a = [4, 0, 1, -2, 3], the output should be solution(a) = [4, 5, -1, 2, 1]