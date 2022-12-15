
// https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/1688501/javascript-solution/?q=javascript&orderBy=most_relevant

// In this challenge, you're given a string containing jumbled letters from several concatenated words. 
// Each word is a numeral from zero to nine. Each numeral may be used multiple times in the jumbled string.

// Write a program that returns integers corresponding to the numerals used to form the jumbled string. Integers must be sorted in ascending order.

// reuonnoinfe one four nine  149
// For example, reuonnoinfe are shuffled letters of the strings one four nine. Your program's output should be 149.

// Input:
// A string formed from jumbled letters of numerals. For example:

// reuonnoinfe
// Output:
// A sequence of integers used to form the string in ascending order. For example:

var originalDigits = function(s) {

    let numsCount = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0}
                //   z    o    w    h    u    f    x    v    g    i 
    // let numberWords = ["zero","one","two","three","four","five","six","seven","eight","nine"]

    // find unique element in each index and order them appropriately
    for (let i=0; i< s.length; i++) {
        if (s[i] === "z") {         // zero
            numsCount[0]++;
        } else if (s[i] === "w") {  // two
            numsCount[2]++;
        } else if (s[i] === "u") {  // four
            numsCount[4]++;
        } else if (s[i] === "x") {  // six
            numsCount[6]++;
        } else if (s[i] === "g") {  // eight
            numsCount[8]++;
        } else if (s[i] === "o") {  // one      1    //0, 1, 2, 4
            numsCount[1]++;
        } else if (s[i] === "h") {  // three    3    //3, 8
            numsCount[3]++;
        } else if (s[i] === "f") {  // five     5    //4, 5
            numsCount[5]++;
        } else if (s[i] === "s") {  // seven    7    //6, 7
            numsCount[7]++;
        } else if (s[i] === "i") {  // nine     9    //5, 6, 8, 9
            numsCount[9]++;
        } 
    }

    console.log("NUMS COUNT:", numsCount);
    console.log("'z':0, 'o':1, 'w':2, 'h':3, 'u':4, 'f':5, 'x':6, 'v':7, 'g':8, 'i':9")

    // any letters that exist in more than one word, subtract the sum of the number of times that letter is being used elsewhere.

    // numsCount[0], numsCount[2], numsCount[4], numsCount[6], numsCount[8] only exist once
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
    console.log(result)
    return result;

};

// 149
// Test 1
// Test Input
// Download Test 1 Input
originalDigits("reuonnoinfe")
// Expected Output
// Download Test 1 Output
// 149



// const originalDigits = (s) => {
//     let m = {};
//     let f = Array(10).fill(0);
//     for (const c of s) {
//         m.hasOwnProperty(c) ? m[c]++ : m[c] = 1;
//     }
//     f[0] = m['z'] || 0;
//     f[2] = m['w'] || 0;
//     f[4] = m['u'] || 0;
//     f[6] = m['x'] || 0;
//     f[8] = m['g'] || 0;
//     f[1] = (m['o'] || 0) - f[0] - f[2] - f[4];
//     f[3] = (m['h'] || 0) - f[8];
//     f[5] = (m['f'] || 0) - f[4];
//     f[7] = (m['s'] || 0) - f[6];
//     f[9] = (m['i'] || 0) - f[6] - f[8] - f[5];
//     let res = '';
//     for (let i = 0; i < 10; i++) {
//         res += (i + '').repeat(f[i]);
//     }
//     return res;
// };


// var originalDigits = function(s) {
//     const arr = new Array(10).fill(0);
//     for (const c of s) {
//         if (c === 'z') arr[0]++
//         else if (c === 'x') arr[6]++
//         else if (c === 'w') arr[2]++
//         else if (c === 'u') arr[4]++
//         else if (c === 'g') arr[8]++
//         else if (c === 's') arr[7]++    //6, 7
//         else if (c === 'v') arr[5]++    //5, 7
//         else if (c === 'r') arr[3]++    //0, 3, 4
//         else if (c === 'o') arr[1]++    //0, 1, 2, 4
//         else if (c === 'i') arr[9]++    //5, 6, 8, 9
//     }
//     arr[7] -= arr[6];
//     arr[5] -= arr[7];
//     arr[3] -= arr[0] + arr[4];
//     arr[1] -= arr[0] + arr[2] + arr[4];
//     arr[9] -= arr[5] + arr[6] + arr[8];
//     let res = "";
//     for (let i = 0; i <=9; i++) {
//         for (let j = 0; j < arr[i]; j++) {
//             res += i;
//         }
//     }
//     return res;
// };



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




// In this challenge, you're given a string containing jumbled letters from several concatenated words. 
// Each word is a numeral from zero to nine. Each numeral may be used multiple times in the jumbled string.

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


// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    processData(_input);
// });
