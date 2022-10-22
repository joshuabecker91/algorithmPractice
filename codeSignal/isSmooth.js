

function solution(arr) {
    let first = arr[0]
    let last = arr[arr.length-1]
    let middle = (arr.length-1)/2
    let a = arr[Math.floor(middle)]
    let b = arr[Math.ceil(middle)]
    console.log(first,last,a,b)
    if((arr.length) % 2 == 0){
        if(first == last && (a + b) == last){
            console.log("true")
            return true
        }
    }
    else{
        if(first == last && arr[middle] == last){
            console.log("true")
            return true
        }
    }
    console.log("false")
    return false
}

// solution([7, 2, 2, 5, 10, 7])
solution([7, 2, 2, 5, 10, 7, 2])

