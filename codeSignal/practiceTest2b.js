

// pattern contains 0 and 1s

// source contains only letters lowercase

function solution(pattern, source) {
    let array = [];
    let vowels = ['a','e','i','o','u','y']
    // console.log(source.slice(i,i+3))
    for(let i = 0; i < (source.length - pattern.length); i++){
        let substring = [];
        // let myArray = source.slice(i,i+3)
        for(let x = 0; x < pattern.length; x++){
            //  == 'a' || 'e' || 'i' || 'o' || 'u' || 'y')
            if(source.slice(i,i+pattern.length).includes(vowels)){
                console.log("Yes")
                substring.push(0)
            }
            else{
                console.log("No")
                substring.push(1)
            }
        }

        // Array.from(n.toString(), (val) => Number(val));

        let newPattern = pattern;
        let newPattern2 = Array.from(newPattern, Number)

        // let newPattern2 = parseInt(newPattern);
        // let newPattern3 = Number(newPattern);

        console.log(newPattern2, substring);
        if(newPattern2 == substring){
            array.push(1)
        }
        else {
            array.push(0)
        }
        console.log(array)
    }
}

// Let's say that pattern matches a substring source[l..r] of source 

// if the following three conditions are met:


solution("010", "amazing")





// they have equal length,
// for each 0 in pattern the corresponding letter in the substring is a vowel,
// for each 1 in pattern the corresponding letter is a consonant.

// if(source[])


// // Option 1
// string.split('');

// // Option 2
// [...string];

// // Option 3
// Array.from(string);

// // Option 4
// Object.assign([], string);