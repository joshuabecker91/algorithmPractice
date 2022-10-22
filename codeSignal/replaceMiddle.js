


function solution(arr) {
    console.log(arr.length-1)
    let middle = (arr.length-1)/2
    let a = Math.floor(middle)
    let b = Math.ceil(middle)

    if(arr.length % 2 == 0){ //if even length
        let sum = arr[a] + arr[b]
        arr.splice(middle,2,sum) // you have to do this outside of a console.log statement
        console.log(arr)
        return arr
    }
    else{
        console.log(arr)
        return arr 
    }
}


solution([7, 2, 2, 5, 10, 7]);