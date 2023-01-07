

// CORRECT works 100% test cases beats 90% time 35% memory
var selfDividingNumbers = function(left, right) {
    let output = []
    let i = left
    while(i <= right){
        let number = i.toString().split('')
        let boolean = true
        for(let j = 0; j < number.length; j++){
            if(parseInt(number[j]) == 0){
                boolean = false
            }
            if(i % parseInt(number[j]) != 0){
                boolean = false
            }
        }
        if(boolean == true){
            output.push(i)
        }
        i++
    }
    return output
};

selfDividingNumbers(1,22)



// var selfDividingNumbers = function(left, right) {
//     let output = []
//     let i = left
//     while(i <= right){
//         let number = i.toString().split('')
//         console.log(number)
//         let boolean = true
//         for(let j = 0; j < number.length; j++){
//             console.log(parseInt(number[j]))
//             if(i % parseInt(number[j]) != 0){
//                 boolean = false
//             }
//             else if(parseInt(number[j]) == 0){
//                 boolean = false
//             }
//         }
//         if(boolean == true){
//             output.push(i)
//         }
//         i++
//     }
//     console.log(output)
//     return output
// };
