

// CORRECT works for 100% test cases
var smallestEvenMultiple = function(n) {
    let i = n
    while(true){
        // console.log(i, n)
        if((i % 2 == 0) && (i % n == 0)){
            // console.log("the solution is", i)
            return i
        }
        i++
    }
};

smallestEvenMultiple(5)


// while((!i % 2 == 0) && (!i % n == 0)){


// CORRECT works for 100% test cases
// var smallestEvenMultiple = function(n) {
//     let i = n
//     while(i < 100000){
//         console.log(i, n)
//         if((i % 2 == 0) && (i % n == 0)){
//             console.log("the solution is", i)
//             return i
//         }
//         i++
//     }
// };


// let i = n
// while(true){
//     if(i % 2 == 0 && i % n == 0){
//         return i
//     }
//     i++
// }