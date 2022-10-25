

function solution(a0) {
    let count = 1
    let newArray = String(a0).split('')
    let numberArray = newArray.map(str => {
        return Number(str);
    });
    // console.log(numberArray, 'number array')
    let outcome = numberArray;
    console.log(outcome, 'outcome')
    // console.log(Number(outcome.join('')), 'outcome join')
    
    // for(let i = 0; outcome.join('') != outcome.length; i++){
    
    let sum = 0;
    while(2 < 3){
        console.log('while loop running')
        let xyz = []
        for(let j = 0; j < outcome.length; j++){
            xyz.push(Math.pow(outcome[j],2))
        }
        for (let i = 0; i < xyz.length; i++){
            sum += xyz[i]
        }
        outcome = sum
        console.log(outcome, 'outcome')
        count++
        if(outcome == a0){
            console.log(count)
            return count
        }
        // if(Number(outcome.join('')) == Number(a0)){
        //     return count
        // }
    }
}

solution(16)




// console.log(outcome[i], 'this is outcome[i]')
// console.log(Math.pow(outcome[i],2))
// console.log(outcome)



// function squares(n){
//     let count = 1
//     let sum = 0
//     let list = [n]

//     while (2 < 3){

//         //split n into its individual digits
//         let split_digits = String(n).split('')
//         console.log('split',split_digits)
//         //loop thru digit array  and square each value 
//         for (let i=0; i<split_digits.length; i++){
//             sum += split_digits[i]**2
//         }
//         //add sum to the list array outside of this loop
//         count++
//         console.log('count',count)

//         console.log(list)
//         //if this sum is equal to any value in the array, return count
//         for (let j=0; j<list.length; j++){
//             if (list[j] == sum){
//                 return count
//             }
//         }
//         //re-initialize variables for next time thru while loop
//         list.push(sum)
//         n = sum
//         sum = 0

//     }
// }