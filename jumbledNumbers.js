

// In this challenge, you're given a string containing jumbled letters from several concatenated words. Each word is a numeral from zero to nine. Each numeral may be used multiple times in the jumbled string.

// Write a program that returns integers corresponding to the numerals used to form the jumbled string. Integers must be sorted in ascending order.

// For example, reuonnoinfe are shuffled letters of the strings one four nine. Your program's output should be 149.

// Input:
// A string formed from jumbled letters of numerals. For example:

// reuonnoinfe
// Output:
// A sequence of integers used to form the string in ascending order. For example:

// 149
// Test 1
// Test Input
// Download Test 1 Input
// reuonnoinfe
// Expected Output
// Download Test 1 Output
// 149
// Test 2
// Test Input
// Download Test 2 Input
// oeisowufxrzohgiettr
// Expected Output
// Download Test 2 Output
// 02468
// Test 3
// Test Input
// Download Test 3 Input
// veiifogvweesotwnetnvfeheiot
// Expected Output
// Download Test 3 Output
// 1225578
// Test 4
// Test Input
// Download Test 4 Input
// xtneiootnrnoeneeeeuoeoheetehounzoiuetrhfefeezuivirfwieotgoottfnrnneghetserhrwsgesfherhtiitrerevreernhveo
// Expected Output
// Download Test 4 Output
// 0011122333334444567788899





process.stdin.resume();
process.stdin.setEncoding('utf8');

function jumbledNumbers(input) {
    let hashmap = {}
    // loop through and count how many letters
    // then we will calculate how many of each word exists by letter count requirement for each word
    // I cannot get this platform to work? Where do I write the function, how do I call the function and how do I pass in the input you are sending me?
    // It doesn't specify where to write my code? 
    let myArray = chunk.split('')
    console.log(chunk)
    console.log(myArray)
}

let stdin = '';
process.stdin.on('data', (chunk) => {
    stdin = `${stdin}${chunk}`;
}).on('end', () => {
    const lines = stdin.trim().split('\n');
    for (const line of lines) {
        process.stdout.write(`${line}\n`);
    }
});






https://statefarm.hirevue.com/interviews/Pi8n8d5-7atbqn/

