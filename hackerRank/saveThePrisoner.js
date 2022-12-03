
function saveThePrisoner(n, m, s) {
    let prisoners = n;
    let sweets = m;
    let startChair = s - 1; 

    if ((startChair + sweets) <= prisoners){
        return (startChair + sweets);
    } 
    else {
        if((sweets + startChair) % prisoners == 0){
            return prisoners;
        } else {
            return (sweets + startChair) % prisoners;
        }
    }
}

console.log(saveThePrisoner(7,19,2))
console.log(saveThePrisoner(3,7,3))


// else {
//     let remainder = ((  (startChair - 1)  + sweets) % n)
//     return remainder
// }


// console.log( 9 % 3)
// 5 prisoners n
// [n,n,n,n,n]

// 2 sweets m
// [-,-,s,s,s,s,s,s]

// 1 seat s

// return last chair number of sequence

// 4
// 6

// 5 % 2 = 1

// let prisoner = n - remainder
// console.log(remainder)