
function gameOfThrones(s) {
    let letters = s;
    let oddSets = 0;
    let singleLetterCount = 0;
    const countedLetters = new Set()

    for(let i = 0; i < letters.length; i++){
        let letterCount = 0;
        if(countedLetters.has(letters[i]) == false){
            countedLetters.add(letters[i])
            for(let x = 0; x < letters.length; x++){
                if(letters[i] == letters[x]){
                    letterCount += 1;
                }
            }
            if (letterCount % 2 < 0){
                singleLetterCount += 1;
            }
            if(letterCount % 2 != 0){
                oddSets += 1;
            } 
        }
    }
    if(oddSets > 1 && singleLetterCount == 0){
        console.log("NO")
        return "NO"
    } 
    if (oddSets == 0 && singleLetterCount > 1) {
        console.log("NO")
        return "NO"
    }
    else {
    console.log("YES")
    return "YES"
    }
}

console.log(gameOfThrones("cdcdcdcdeeeef"))


// console.log(1 % 2)

        // letters.forEach(index => {
        //     let count = 0;
        //     if (index == arr[i]) {
        //         count += 1;
        //     }
        //     if(count % 2 !=0){
        //         duplicates = duplicates + 1;
        //         if (duplicates > 1){
        //             return "NO"
        //         }
        //     }
        // });

//     }
//     return "YES"
// }



// let singleLetters = 0;
// let outcome = []

// letters.filter((letter) => {
//     outcome = letter.count() % 2
//     if(outcome != 0) {
//         duplicates = duplicates + 1;
//         if(duplicates > 1){
//             return "NO"
//         }
//     }
// })
// console.log(count);



// outcome = [...outcome, letters[i]]
// console.log(outcome)
// let count = 0;
// if letters[i] 
        
    //     console.log(outcome)
    //     if(outcome.length % 2 == 0){
    //         continue
    //     } else {
    //         singleLetters = singleLetters + 1;
    //     }
    // }
    // if(singleLetters > 1){
    //     return "NO"
    // } else {
    //     return "YES"



// let array = [1,2,3,4]
// console.log(array.filter(true))
// letters[i] == letters[i]


//     string[i] == string[i] 
//     count + 1
//     modulus % 2

    //     string.map((index) => {

    //     })
    //     if(string[i] % 2 == 0){
    //         continue
    //     } else {
    //         xyz = xyz + 1
    //         if > 1
    //         return "NO"
    //     }
    // }
    // return "YES"

// for loop through the string 
// i = each letter 

// count each letter how many of them 
// % 2


// if (arr[0 + i] == arr[arr.length - i]){

// }

// let string = "useState" 
// let string2 = string.toUpperCase()

// console.log(string2)

// itterate through each index 

// is string[i] = string2[x]

// let count = 0;
// const 
// if(sting[i] == string2){
//     count = count + 1;
// }


// racecar 

// racecar 

// rceaacr


// for each if the letter i / 2   % == 0 then yes 

// let midpoint = ((string.length) / 2)
// if(midpoint % 2 != 0){

// }

// there can only be one letter that has a modulus != 0;

