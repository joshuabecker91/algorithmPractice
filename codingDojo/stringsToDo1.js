// Strings To Do 1
// Do not use built-in methods (unless otherwise instructed). (.length is a property, and is allowed.)

// 1. Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

function removeBlanks(string){
    let newString = "";
    for(let i = 0; i < string.length; i++){
        if(string[i] != " "){
            newString += string[i]
            console.log(newString)
        }
    }
    console.log(newString)
}


// Examples:

removeBlanks(" Pl ayTha tF u nkyM usi c ") // => "PlayThatFunkyMusic"
removeBlanks("I can not BELIEVE it's not BUTTER") // => "IcannotBELIEVEit'snotBUTTER"

// ---------------------------------------------------------------------------------------------------

// 2. Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
// You are allowed to use isNaN() and Number().

function getDigits(string){
    let newString = "";
    for(let i = 0; i < string.length; i++){
        if(!isNaN(string[i])){
            newString += string[i]
        }
    }
    console.log(newString)
}


// Examples:

getDigits("abc8c0d1ngd0j0!8") // => 801008
getDigits("0s1a3y5w7h9a2t4?6!8?0") // => 1357924680

// ---------------------------------------------------------------------------------------------------

// 3. Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). 
// You are allowed to use .split() and .toUpperCase().

function acronym(string){
    let newString = ""
    for(let i = 0; i < string.length; i++){
        console.log(string[i-1])
        if(string[i-1] == " " || undefined || null || i == 0 && string[i] != " "){
            console.log(string[i].toUpperCase())
            newString += string[i].toUpperCase()
            console.log(newString)
        } 
        // else {
        //     newString += string[i]
        // }
    }
    console.log(newString)
}

acronym(" there's no free lunch - gotta pay yer way. ") // => "TNFL-GPYW". 

acronym("Live from New York, it's Saturday Night!") // => "LFNYISN".

// ---------------------------------------------------------------------------------------------------

// 4. Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 

function countNonSpaces(string){
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(isNaN(string[i])){
            count += 1;
        }
    }
    console.log(count)
}

// Examples:

countNonSpaces("Honey pie, you are driving me crazy") // => 29
countNonSpaces("Hello world !") // => 11

// ---------------------------------------------------------------------------------------------------

// 5. Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, 
// returns an array that only contains strings longer than or equal to the given value.

function removeShorterStrings(arr, value){
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length >= value){
            newArr.push(arr[i])
        }
        
    }
    console.log(newArr)
}

// Examples:

removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) // => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) // => ['There', 'bug', 'the', 'system'] 