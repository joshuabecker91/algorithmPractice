


let words = 1;

function camelcase(s) {
    let inputString = s;
    let capitalString = inputString.toUpperCase()
    for(let i = 0; i < inputString.length; i++){
        if(inputString[i] == capitalString[i]){
            words = words + 1;
            console.log(words + "equal")
        } else {
            console.log(words + "not equal")
        }

    }
    console.log(words)
    return words;
}

console.log(camelcase("saveChangesInTheEditor"))


// let string = "useState" 
// let string2 = string.toUpperCase()
// console.log(string2)

// itterate through each index 
// is string[i] = string2[x]
