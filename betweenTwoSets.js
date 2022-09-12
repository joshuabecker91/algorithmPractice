// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

function getTotalX(a, b) {
    let count = 0;
    let low = a[0]
    let high = b[0]
    // determine the low of our range (array a)
    for(let i = 0; i < a.length; i++){
        if(a[i] > low){
            low = a[i]
        }
    }
    // determine the high of our range (array b)
    for(let i = 0; i < b.length; i++){
        if(b[i] < high){
            high = b[i]
        }
    }
    console.log(low)
    console.log(high)

    // for i= each integer in our range - loop through each array seperately and modulus % i
    for(let i = low + 1; i < high; i++){
        for(let x = 0; x < a.length; x++){
            if(a[x] % i == 0){
                count ++
                console.log(i, )
            }
        }
        for(let x = 0; x < b.length; x++){
            if(b[x] % i == 0){
                count ++
            }
        }
    }
    console.log(count)
}

getTotalX([2,4], [16,32,96])

// 5 6 7 8 9 10 11 12 13 14 15

// 11 integers 


// solution

// isFactor = (a, b) => a % b === 0

// function main() {

//     var n_temp = readLine().split(' ');
//     var n = parseInt(n_temp[0]);
//     var m = parseInt(n_temp[1]);
//     a = readLine().split(' ');
//     a = a.map(Number);
//     b = readLine().split(' ');
//     b = b.map(Number);

//     var results = []
//     for (var i = a[n - 1]; i <= b[0]; i++) {
//         if (a.every((x) => isFactor(i, x)) && b.every((x) => isFactor(x, i))) results.push(i)
//     }

//     console.log(results.length)
// }