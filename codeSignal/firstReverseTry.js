

function solution(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(i == 0){
            newArr.push(arr[arr.length-1]);
        }
        else if(i == arr.length-1){
            newArr.push(arr[0]);
        }
        else{
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
    return newArr;
}

// solution([1,2,3,4,5])
solution([23, 54, 12, 3, 4, 56, 23, 12, 5, 324])