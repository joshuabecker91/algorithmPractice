


function solution(a) {
    let totalSum = a.reduce((a, b) => a + b);
    let count = 0;
    let sum1 = 0;
    for(let i = 0; i < a.length-2; i++){
        sum1 += a[i]
        let b = a.slice(i+1,a.length+1)
        let sum2 = 0
        let sum3 = 0
        for(let j = 0; j < b.length-1; j++){
            sum2 += b[j]
            sum3 = (totalSum - sum2 - sum1)
            if(sum1 == sum2 && sum2 == sum3){
                count++
            }
        }
    }
    // console.log(count)
    return count 
}

// solution([0, -1, 0, -1, 0, -1])
solution([-1, 1, -1, 1, -1, 1, -1, 1])




// CORRECT works. CLEAN
// function threeSplit(a) {
//     let totalSum = a.reduce((a, b) => a + b);
//     let sum1 = 0;
//     let count = 0;
//     for (let i = 0; i < a.length - 2; i++) {
//         sum1 += a[i];
//         let sum2 = 0; 
//         for (let j = i + 1; j < a.length - 1; j++) {
//             sum2 += a[j];
//             if (sum1 === sum2 && sum2 === totalSum - sum1 - sum2) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }





// CORRECT but doesn't like time complexity
// function solution(a) {
//     let count = 0;
//     for(let i = 1; i < a.length; i++){
//         for(let j = i+1; j < a.length; j++){
//             let x = a.slice(0,i)
//             let y = a.slice(i,j)
//             let z = a.slice(j,a.length+1)
//             // console.log(x,y,z)
//             let xSum = x.reduce((a,b) => a + b)
//             let ySum = y.reduce((a,b) => a + b)
//             let zSum = z.reduce((a,b) => a + b)
//             // console.log(xSum,ySum,zSum)
//             if(xSum == ySum && ySum == zSum){
//                 count++
//             }
//         }
//     }
//     // console.log(count)
//     return count 
// }

// solution([0, -1, 0, -1, 0, -1])




// function solution(a) {
//     let count = 0;
//     for(let i = 1; i < a.length; i++){
//         for(let j = i+1; j < a.length; j++){
//             let x = a.slice(0,i).reduce((a,b) => a + b)
//             let y = a.slice(i,j).reduce((a,b) => a + b)
//             let z = a.slice(j,a.length+1).reduce((a,b) => a + b)
//             if(x == y && y == z){
//                 count++
//             }
//         }
//     }
//     return count 
// }




// function solution(a) {
//     let count = 0;
//     for(let i = 1; i < a.length; i++){
//         let j = i+1
//         while(j < a.length){
//             let x = a.slice(0,i).reduce((a,b) => a + b)
//             let y = a.slice(i,j).reduce((a,b) => a + b)
//             let z = a.slice(j,a.length+1).reduce((a,b) => a + b)
//             if(x == y && y == z){
//                 count++
//             }
//             j++
//         }
//     }
//     return count 
// }




// function solution(a) {
//     let count = 0;
//     for(let i = 1; i < a.length; i++){
//         let j = i+1
//         while(j < a.length){
//             let x = a.slice(0,i).reduce((a,b) => a + b)
//             let y = a.slice(i,j).reduce((a,b) => a + b)
//             let z = a.slice(j,a.length+1).reduce((a,b) => a + b)
//             if(x == y && y == z){
//                 count++
//             }
//             j++
//         }
//     }
//     return count 
// }




// CORRECT but doesn't like time complexity
// function solution(a) {
//     let count = 0;
//     let hashmap = {}
//     for(let i = 1; i < a.length-1; i++){
//         let x = a.slice(0,i)
//         let y = a.slice(i,a.length+1)
//         // console.log(x,y)
//         hashmap[x] = y
//     }
//     // console.log(hashmap)
//     for(let key in hashmap){
//         let q = 1
//         while(q < hashmap[key].length){
//             let s = hashmap[key].slice(0,q)
//             let t = hashmap[key].slice(q,((hashmap[key]).length+1))
//             // console.log(key, s, t)
//             let sSum = s.reduce((a,b) => a + b)
//             let tSum = t.reduce((a,b) => a + b)
//             // console.log(key.split(','))
//             let array = Array.from(key.split(','), Number)
//             // console.log(array)
//             let keySum = array.reduce((a,b) => a + b)
//             // console.log(keySum, sSum, tSum)
//             if(sSum == tSum && tSum == keySum){
//                 count++
//             }
//             q++
//         }
//     }
//     // console.log(count)
//     return count 
// }


