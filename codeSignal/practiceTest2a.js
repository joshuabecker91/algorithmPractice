


// (a, b, c) 



// [0,1,2,3,4]


function solution(numbers) {
    console.log(numbers.length)
    let array = [];
    console.log(array)
    for(let i = 0; i < (numbers.length - 2); i++){
        let a = numbers[i]
        let b = numbers[i+1]
        let c = numbers[i+2]
        if((a < b && b > c)){
            array.push(1)
            console.log(array)
            console.log("Yes", 1, i, "first")
        }
        else if((a > b && b < c)){
            array.push(1)
            console.log(array)
            console.log("Yes", 1, i, "second")
        }
        else {
            array.push(0)
            console.log(array)
            console.log("No", 0, i, "third")
        }
    }
    console.log(array);
}

solution([1, 2, 1, 3, 4])