

function solution(a) {
    let start = Date.now()
    for(let i = 0; i < a.length; i++){
        if(a[i] == 1){
            a[i] = 0
            let b = a.slice(0,i)
            let c = a.slice(i,a.length)
            // console.log(b,c)
            // console.log(typeof(b.join('')))
            let b2 = b.join('')
            let b3 = b2.replaceAll("0","2").replaceAll("1","0").replaceAll("2","1")
            // let b4 = b3.replaceAll("1","0")
            // let b5 = b4.replaceAll("2","1")
            // console.log(Array.from(b5, Number).concat(c))
            a = Array.from(b3, Number).concat(c)
        } else {
            // don't change candles
        }
    }
    console.log(a)
    console.log(performance.now())
    return (console.log((Date.now()-start)), a)
}


solution([1,1,1,1,1])


// // CORRECT but uses a double for loop
// function solution(a) {
//     let start = Date.now()
//     for(let i = 0; i < a.length; i++){
//         if(a[i] == 1){
//             a[i] = 0
//             for(let j = 0; j < i; j++){
//                 if(a[j] == 1){
//                     a[j] = 0
//                 } else {
//                     a[j] = 1
//                 }
//             }
//             // console.log(a)
//         } else {
//             // don't change candles
//         }
//     }
//     console.log(a)
//     console.log(performance.now())
//     return (console.log((Date.now()-start)), a)
// }

// solution([1,1,1,1,1])



