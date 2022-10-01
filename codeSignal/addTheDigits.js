

// You are given a two-digit integer n. Return the sum of its digits.


function solution(n) {
    let newString = n.toString()
    console.log(newString)
    let splitString = newString.split('');
    // can do for loop here if > 2 digit int
    let sum = Number(splitString[0]) + Number(splitString[1]);
    console.log(sum)
    return sum
}

solution(29)

// Logic for solution:
// turn int into string, then split the string into individual index positions
// now you can itterate through them and add - but need to convert back to number
