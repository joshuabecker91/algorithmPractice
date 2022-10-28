

function solution(pattern, source) {
    let count = 0;
    let vowels = ['a','e','i','o','u','y']
    let rgExp = [' ','%','$','#']
    let substring = '';

    for(let x = 0; x < source.length; x++){
        let letter = source[x]
        if(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(letter)){
            console.log("triggered")
            continue
        }
        else if(vowels.includes(source[x])){
            console.log("not triggered")
            substring += 0
        }
        else{
            console.log("not triggered")
            substring += 1
        }
    }
    console.log(substring)

    for(let i = 0; i < (source.length - pattern.length+1); i++){
        let newSubstring = substring.slice(i,i+pattern.length).toString()
        console.log("this is newSubstring",newSubstring, "pattern = ", pattern)
        if(newSubstring == pattern){
            count++
        }
    }
    console.log(count);
    return count;
}

// solution("010", "jb#$$$$asd")
solution("010", "amazing%^@#$#$^%@#$&%ara")
// solution("010", "codingdojo")
// solution("010", "rar")
// pattern contains 0 and 1s

// source contains only letters lowercase

// function solution(pattern, source) {
//     let array = [];
//     let vowels = ['a','e','i','o','u','y']
//     // console.log(source.slice(i,i+3))
//     for(let i = 0; i < (source.length - pattern.length); i++){
//         let substring = [];
//         // let myArray = source.slice(i,i+3)
//         for(let x = 0; x < pattern.length; x++){
//             //  == 'a' || 'e' || 'i' || 'o' || 'u' || 'y')
//             if(source.slice(i,i+pattern.length).includes(vowels)){
//                 console.log("Yes")
//                 substring.push(0)
//             }
//             else{
//                 console.log("No")
//                 substring.push(1)
//             }
//         }

//         // Array.from(n.toString(), (val) => Number(val));

//         let newPattern = pattern;
//         let newPattern2 = Array.from(newPattern, Number)

//         // let newPattern2 = parseInt(newPattern);
//         // let newPattern3 = Number(newPattern);

//         console.log(newPattern2, substring);
//         if(newPattern2 == substring){
//             array.push(1)
//         }
//         else {
//             array.push(0)
//         }
//         console.log(array)
//     }
// }

// Let's say that pattern matches a substring source[l..r] of source 

// if the following three conditions are met:


// solution("010", "amazing")





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