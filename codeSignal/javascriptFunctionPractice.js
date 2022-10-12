


// NEED TO PRACTICE!
// - Converting strings to numbers and vic versa 
// - Seperating a string into an array with individual indexs (esp. with integers!!)
// - Converting from arrays to numbers or strings (joining)




let numbers = 01234;
let word = "word"
console.log(word.split(''));

// const string = 'hi there';

// Converting Numbers to Integer Arrays
    const usingSplit = string.split('');
    const usingSpread = [...string];
    const usingArrayFrom = Array.from(string);
    const usingObjectAssign = Object.assign([], string);

    console.log(usingSplit);
    console.log(usingSpread);
    console.log(usingArrayFrom);
    console.log(usingObjectAssign);



    
console.log(Number("awesome"));
console.log(Number("1234"));

let x = String(8084)
// console.log(String(8084));
// console.log(typeof "word");

// console.log(typeof Number(quantity));




const elements = ['Fire', 'Air', 'Water'];
const numbers = [1,2,3,4,5,6];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

console.log(numbers.join());
// expected output: "1,2,3,4,5,6"

console.log(numbers.join(''));
// expected output: 123456



// lateRide #7 CodeSignal
function solution(n) {
    let minute = n % 60;
    let hours = Math.floor(n / 60);
    let totalTime = "" + hours + minute;
    let splitNums = Array.from(String(totalTime), Number);
    let sum = 0;

    for (let i = 0; i < splitNums.length; i++) {
        sum += splitNums[i];
    }
    return sum;
}
solution(240); // expects 4