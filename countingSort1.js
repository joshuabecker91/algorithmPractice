

function countingSort(arr){
    let size = arr.length < 101 ? arr.length : 100
    let result = new Array(size).fill(0)
    for(let i = 0; i < arr.length; i++) {
        result[arr[i]] = result[arr[i]] + 1;
    }
    console.log(result)
    return result;
}

countingSort([1,1,3,2,1])



// function countingSort(arr) {
//     let countArr = Array(100).fill(0);
//     console.log(countArr)
//     arr.forEach(e => {countArr[e] = countArr[e] + 1;});
//     return countArr;
// }

// countingSort([1,1,3,2,1])




// function countingSort(arr){
//     let size = arr.length < 101 ? arr.length : 100
//     let result = new Array(size).fill(0)
//     for(let i = 0; i < arr.length; i++) {
//         result[arr[i]] = result[arr[i]] + 1;
//     }
//     console.log(result)
//     return result;
// }

// countingSort([1,1,3,2,1])







// function countingSort(arr){
//     let newArr= new Array(arr.length - 1).fill(0);
//     console.log(newArr)
//     for(let num of arr){
//         newArr[num]++
//     }
//     return newArr;
// }

// countingSort([1,1,3,2,1])


// function countingSort(arr) {
//     let hashmap = {}
//     let max = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//         if(hashmap[arr[i]]){
//             hashmap[arr[i]]++
//         } else {
//             hashmap[arr[i]] = 1
//         }
//     }
//     // console.log(hashmap)
//     let output = []

//     for(let j = 0; j <= max; j++){
//         // let keys = Object.keys(hashmap)
//         // console.log(hashmap[j])
//         // console.log(max)
//         // console.log(hashmap[j])
//         if(hashmap[j] == undefined){
//             output.push(0)
//         } else {
//             output.push(hashmap[j])
//         }
//     }
//     console.log(output)
//     return output
// }






// 100
// 63 54 17 78 43 70 32 97 16 94 74 18 60 61 35 83 13 56 75 52 70 12 24 37 17 0 16 64 34 81 82 24 69 2 30 61 83 37 97 16 70 53 0 61 12 17 97 67 33 30 49 70 11 40 67 94 84 60 35 58 19 81 16 14 68 46 42 81 75 87 13 84 33 34 14 96 7 59 17 98 79 47 71 75 8 27 73 66 64 12 29 35 80 78 80 6 5 24 49 82
// 2 0 1 0 0 1 1 1 1 0 0 1 3 2 2 0 4 4 1 1 0 0 0 0 3 0 0 1 0 1 2 0 1 2 2 3 0 2 0 0 1 0 1 1 0 0 1 1 0 2 0 0 1 1 1 0 1 0 1 1 2 3 0 1 2 0 1 2 1 1 4 1 0 1 1 3 0 0 2 1 2 3 2 2 2 0 0 1 0 0 0 0 0 0 2 0 1 3 1 0

    // for(let key in hashmap){
    //     let count = hashmap[key]
    //     while(count > 0){
    //         output.push(Number(key))
    //         // console.log(output)
    //         count--
    //     }
    // }


    // function countingSort(arr) {
    //     let size = arr.length < 101 ? arr.length : 100
    //     let ans = new Array(size).fill(0)
    //     arr.map(x => ans[x]++ )
    //     return ans   
    // }