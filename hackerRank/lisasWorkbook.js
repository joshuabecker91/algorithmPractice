

function workbook(n, k, arr) {
    let book = []
    for(let i = 0; i < arr.length; i++){
        let pages = Math.ceil(arr[i] / k)
        let arrayProblem = [...Array(arr[i]).keys()].map(x => ++x); // 1234  //chapter
        console.log(arrayProblem)
        for(let j = 0; j < pages; j++){
            book.push(arrayProblem.slice(0, k)) //123
            arrayProblem = arrayProblem.slice(k) ///1234 =4
        }
    }
    let count = 0;
    for(let i = 0; i < book.length; i++){
        // for(let j = 0; j < book[i].length; j++){
        //     if(book[i][j] == i+1){
        //        count++ 
        //     }
        // }
        if(book[i].includes(i+1)){
            count++
        }
    }
    console.log(count)
    return count
}

workbook(5, 3, [4, 2, 6, 1, 10])


// function workbook(n, k, arr) {
//     // Write your code here
//     let book = []
//     for(let i = 0; i < n; i++){
//         let pages = Math.ceil(arr[i] / k)   
//         let arrayProblem = [...Array(arr[i]).keys()].map(x => ++x);
//         // console.log(arrayProblem)
//         for(let j = 0; j < pages; j++){
//             book.push(arrayProblem.slice(0, k))
//             arrayProblem = arrayProblem.slice(k)
//         }
//     }
//     console.log(book)
//     // [[1,2,3]]
//     let count = 0;
//     for(let i = 0; i < book.length; i++){
//         for(let j = 0; j < book[i].length; j++){
//             console.log(book[i])
//             if(book[i][j] == i+1){
//                 count++
//             }
//         }

//     }
//     console.log(count)
//     return count
// }

// workbook(5, 3, [4, 2, 6, 1, 10])




// int n: the number of chapters
// int k: the maximum number of problems per page
// int arr[n]: the number of problems in each chapter

// function workbook(n, k, arr) {
//     let page = 1;
//     let specialCount = 0;
//     // loop through each chapter
//     for(let i = 0; i < arr.length; i++){
//         // lay k number of problems on each page
//         let problemsRemain = arr[i]
//         let problemNum = 1;
//         // let count = 0;
//         while(problemsRemain > 0){
//             problemsRemain -= k
//             problemNum += k
//             page++
//             if(problemNum)

//             if(problemNum == page){
//                 specialCount++
//             }
//             if((problemsRemain -= k) < 0){
                
//                 page++
//             }
//             problemsRemain--
//             problemNum++
//             // page++
//         }
//     }
// }

// workbook(5, 3, [4, 2, 6, 1, 10])

// for(let j = problemsRemain; j > 0; j-=k){

// }