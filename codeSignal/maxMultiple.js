

// Given a divisor and a bound, find the largest integer N such that:

// N is divisible by divisor.
// N is less than or equal to bound.
// N is greater than 0.
// It is guaranteed that such a number exists.

// Example

// For divisor = 3 and bound = 10, the output should be
// solution(divisor, bound) = 9.

// The largest integer divisible by 3 and not larger than 10 is 9.


function solution(divisor, bound) {
    let multiple = bound % divisor;
    let remainder = Math.floor(multiple);
    let roundedMultiple = bound - remainder
    console.log(roundedMultiple);
    return roundedMultiple;
}

solution(3, 10);