// Print the sum of the elements in an array / return the sum of all array elements.

// aVeryBigSum has the following parameter(s):
// int ar[n]: an array of integers .


// Return
// long: the sum of all array elements

// Input Format
// The first line of the input consists of an integer.
// The next line contains  space-separated integers contained in the array.

// Output Format

// Return the integer sum of the elements in the array.


function aVeryBigSum(ar) {
    let sum = 0;
    for(let i = 0; i < ar.length; i++){
        sum += ar[i];
        // sum = sum + ar[i]; // exactly the same
    }
    console.log(sum)
    return sum
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
// aVeryBigSum([10,20,30])