
// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

// Example

// For n = 10 and firstNumber = 2, the output should be
// solution(n, firstNumber) = 7.


function solution(n, firstNumber) {
    let halfLength = (n - 1) / 2
    let opposite = 0;
    if(firstNumber < halfLength){
        opposite = firstNumber + Math.ceil(halfLength);
    }
    else {
        opposite = firstNumber - Math.ceil(halfLength);
    }
    console.log(Math.abs(opposite));
    return Math.abs(opposite);
}

solution(10, 2)