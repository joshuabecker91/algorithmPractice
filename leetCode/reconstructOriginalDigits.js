

var originalDigits = function(s) {

    let numsCount = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0}

    for (let i=0; i< s.length; i++) {
        if (s[i] === "z") {
            numsCount[0]++;
        } else if (s[i] === "w") {
            numsCount[2]++;
        } else if (s[i] === "u") {
            numsCount[4]++;
        } else if (s[i] === "x") {
            numsCount[6]++;
        } else if (s[i] === "g") {
            numsCount[8]++;
        } else if (s[i] === "o") {
            numsCount[1]++;
        } else if (s[i] === "h") {
            numsCount[3]++;
        } else if (s[i] === "f") {
            numsCount[5]++;
        } else if (s[i] === "s") {
            numsCount[7]++;
        } else if (s[i] === "i") {
            numsCount[9]++;
        } 
    }

    console.log("NUMS COUNT:", numsCount);
    
    numsCount[1] -= (numsCount[0] + numsCount[2] + numsCount[4]);
    numsCount[3] -= numsCount[8];
    numsCount[5] -= numsCount[4];
    numsCount[7] -= numsCount[6];
    numsCount[9] -= (numsCount[6] + numsCount[8] + numsCount[5]);

    console.log("NEW NUMS COUNT:", numsCount);

    let result = "";

    for (let j=0; j<10; j++) {
        while (numsCount[j] !== 0) {
            result += j;
            numsCount[j]--;
            // console.log("RESULT:", result);
        }
    }

    return result;

};






// // Works for 13/24 
// var originalDigits = function(s) {
//     let hashmap = {}
//     let string = s.split('')
//     for(let i = 0; i < string.length; i++){
//         let x = string[i]
//         if(hashmap[x]){
//             hashmap[x]++
//         } else {
//             hashmap[x] = 1
//         }
//     }
//     // console.log(hashmap)

//     let numberWords = ["zero","one","two","three","four","five","six","seven","eight","nine"]

//     let objectWords = []

//     for(let i = 0; i < numberWords.length; i++){
//         let word = numberWords[i]
//         // console.log(word)
//         let wordMap = {}
//         for(let j = 0; j < word.length; j++){
//             let x = word[j]
//             if(wordMap[x]){
//                 wordMap[x]++
//             } else {
//                 wordMap[x] = 1
//             }
//         }
//         // console.log(wordMap)
//         objectWords.push(wordMap)
//     }
//     // console.log("this is objectWords", objectWords)

//     let output = []


//     //loop through and find out how many of each word you can construct
//     for(let i = 0; i < objectWords.length; i++){
//         let w = objectWords[i]
//         let z = numberWords[i]
//         // console.log("the word is", w)
//         let addWord = true
//         for(let key in w){
//             // console.log(key, hashmap[key], key ,w[key])
//             if(hashmap[key] == undefined || hashmap[key] < w[key]){
//                 addWord = false
//             }
//         }
//         // console.log(addWord)
//         if(addWord == true){
//             for(let key in w){
//                 hashmap[key] -= w[key]
//                 // console.log(key, hashmap[key], key ,w[key])
//             }
//             // console.log(z)
//             output.push(numberWords.indexOf(z)) //z, w
//             i--
//         }
//         // console.log(output)
//     }
//     console.log(hashmap)
//     console.log(output.join(''))
//     return output.join('')
// };

// originalDigits("owoztneoer")
// // originalDigits("fviefuro")
// // originalDigits("zerozero")
// // originalDigits("zeroonetwothreefourfivesixseveneightnine")




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





// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// function jumbledNumbers(input) {
//     let hashmap = {}
//     // loop through and count how many letters
//     // then we will calculate how many of each word exists by letter count requirement for each word
//     // I cannot get this platform to work? Where do I write the function, how do I call the function and how do I pass in the input you are sending me?
//     // It doesn't specify where to write my code? 
//     let myArray = chunk.split('')
//     console.log(chunk)
//     console.log(myArray)
// }

// let stdin = '';
// process.stdin.on('data', (chunk) => {
//     stdin = `${stdin}${chunk}`;
// }).on('end', () => {
//     const lines = stdin.trim().split('\n');
//     for (const line of lines) {
//         process.stdout.write(`${line}\n`);
//     }
// });


// https://statefarm.hirevue.com/interviews/Pi8n8d5-7atbqn/
