/*

1. Do this first - Write a function that accepts a string, and returns a count of the characters in the string.
2. IGNORE spaces " "
3. If any of the character counts go ABOVE 7 characters counted, return an error that stops the app and displays an appropriate error message
4. If an "_" (underscore) is inside the arg string at any point, throw a different error or error message.

INPUT --> "hello there!" : OUTPUT --> {"h": 2, "e": 3, "l": 2, "o": 1, "t": 1, "r": 1, "!": 1 }
INPUT --> "what it xxxxxxxx do ?" : OUTPUT --> <yourErrorMessage> (in a string)
INPUT --> "y_o" : OUTPUT --> <yourErrorMessage> (in a string)

*/

function officeHour3(string){
    let array = {}
    // let count = 0;
    for(let x = 0; x < string.length; x++){
        if(string[x] != " "){
            if(array[string[x]]){
                array[string[x]]++
                if(array[string[x]] > 7){
                    console.log("error - more than 7")
                    return "error - more than 7"
                } 
                if(array[string[x]] = "_"){
                    console.log("error - underscore exists")
                    return "error - underscore exists"
                }
            } else {
                array[string[x]] = 1
            }
        }
    }
    // array.push(string[x], count)
    // count = 0
    console.log(array)
}

officeHour3("hello there!")

// returns a count of the characters in the string.

// [1,     2,    [4,8,5]   ,4]


// forChar()

// for(let i = 0; i < string.length; i++){
//     if(string[i] != " "){

// if(string[i] == string[x] && string[x]){
//     count ++;
// }