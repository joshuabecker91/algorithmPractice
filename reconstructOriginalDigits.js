
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
    
    // first we create a hashmap where we can count how many of each unique characters exist in the provided string
    let numsCount = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0}
    //uniqueChars = {z  , o  , w  , h  , u  , f  , x  , v  , g  , i  } alternatively we could have each key of the hashmap be the letter itself

    // let numberWords = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    // for each letter in the string we tentatively predict which numberWord it belongs to -
    // by matching it with the most uniqueChar that exists within each index position of numberWords
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

    // numsCount[0], numsCount[2], numsCount[4], numsCount[6], numsCount[8] --> assigned uniqueChar does not exist in any other numberWord
    // for any uniqueChar that exist in more than one numberWord, subtract the sum of the number of times that uniqueChar is used elsewhere

    numsCount[1] -= (numsCount[0] + numsCount[2] + numsCount[4]);
    numsCount[3] -= numsCount[8];
    numsCount[5] -= numsCount[4];
    numsCount[7] -= numsCount[6];
    numsCount[9] -= (numsCount[5] + numsCount[6] + numsCount[8]);

    // now we have a hashmap with the final number of times each numberWord can be assembled/completed based on the scrambled string input
    console.log("NEW NUMS COUNT:", numsCount);

    // create a new string that will be returned
    let result = "";

    // loop through 0-9 and add the number to the string for each key value pair until the value is zero
    for (let j=0; j<10; j++) {
        while (numsCount[j] !== 0) {
            result += j;
            numsCount[j]--;
            // console.log("RESULT:", result);
        }
    }
    // return final result
    console.log(result)
    return result;
};


// Test Cases
originalDigits("reuonnoinfe") // Expected Output 149
// originalDigits("owoztneoer")  // Expected Output 012
// originalDigits("fviefuro")    // Expected Output 45
// originalDigits("zerozero")    // Expected Output 00
// originalDigits("zeroonetwothreefourfivesixseveneightnine") // Expected Output 0123456789
// originalDigits("oeisowufxrzohgiettr") // Expected Output 02468
// originalDigits("veiifogvweesotwnetnvfeheiot") // Expected Output 1225578
// originalDigits("xtneiootnrnoeneeeeuoeoheetehounzoiuetrhfefeezuivirfwieotgoottfnrnneghetserhrwsgesfherhtiitrerevreernhveo") // Expected Output 0011122333334444567788899
