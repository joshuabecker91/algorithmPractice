

function removePunctuation(str) {
    return str.replace(/[^\w\s-]/g, '')
}

function nameToParts(name) {
    let newName = name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let nameArray = newName.split(' ')
    let suffixValues = ["Sr", "Jr", "II", "III", "IV", "sr", "jr"]
    let x = nameArray.length
    let booleanVariable = false 

    if(suffixValues.includes(nameArray[2])){
        booleanVariable = true
    }
    if(suffixValues.includes(nameArray[3])){
        booleanVariable = true
    }
    console.log(x, booleanVariable)
    console.log("console log", nameArray)
    switch(x){
        case 4:
            console.log([nameArray[0], nameArray[1], nameArray[2], nameArray[3]])
            return [nameArray[0], nameArray[1], nameArray[2], nameArray[3]]

        case 2:
            console.log([nameArray[0], "", nameArray[1], ""])
            return [nameArray[0], "", nameArray[1], ""]

        case 3:
            if(booleanVariable == true){
                console.log([nameArray[0], "", nameArray[1], nameArray[2]])
                return [nameArray[0], "", nameArray[1], nameArray[2]]
            } else {
                console.log([nameArray[0], nameArray[1], nameArray[2], ""])
                return [nameArray[0], nameArray[1], nameArray[2], ""]
            }
    }
}

// nameToParts("George Geralds")
// nameToParts("George C Geralds")
// nameToParts("George Geralds Jr")
nameToParts("George C Geralds Jr")







//     if (nameArray.length >= 4) {
//         firstName = nameArray[0]
//         middleName = nameArray[1]
//         lastName = nameArray[2]
//         suffix = nameArray[3]
//         console.log([firstName, middleName, lastName, suffix])
//         return [firstName, middleName, lastName, suffix]
//     }
//     if (nameArray.length == 2) {
//         firstName = nameArray[0]
//         middleName = ""
//         lastName = nameArray[1]
//         suffix = ""
//         console.log([firstName, "", lastName, ""])
//         return [firstName, "", lastName, ""]
//     }
//     if (nameArray.length == 3 && suffixValues.includes(nameArray[2]) || suffixValues.includes(nameArray[3])) {
//         firstName = nameArray[0]
//         middleName = ""
//         lastName = nameArray[1]
//         suffix = nameArray[2]
//         console.log([firstName, "", lastName, suffix])
//         return [firstName, "", lastName, suffix]
//     }
//     if (nameArray.length == 3 && !suffixValues.includes(nameArray[2]) || !suffixValues.includes(nameArray[3])) {
//         firstName = nameArray[0]
//         middleName = nameArray[1]
//         lastName = nameArray[2]
//         suffix = ""
//         console.log([firstName, middleName, lastName, ""])
//         return [firstName, middleName, lastName, ""]
//     }
// }




// function removePunctuation(str) {
//     return str.replace(/[^\w\s-]/g, '')
// }

// function nameToParts(name) {
//     let newName = name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
//     console.log(newName)
//     // console.log(name)
//     let firstName = ""
//     let middleName = ""
//     let lastName = ""
//     var suffix = ""
//     let nameArray = newName.split(' ')
//     let suffixValues = ["Sr", "Jr", "II", "III", "IV", "sr", "jr"]
//     if (nameArray.length >= 4) {
//         firstName = nameArray[0]
//         middleName = nameArray[1]
//         lastName = nameArray[2]
//         suffix = nameArray[3]
//         console.log([firstName, middleName, lastName, suffix])
//         return [firstName, middleName, lastName, suffix]
//     }
//     if (nameArray.length == 2) {
//         firstName = nameArray[0]
//         middleName = ""
//         lastName = nameArray[1]
//         suffix = ""
//         console.log([firstName, "", lastName, ""])
//         return [firstName, "", lastName, ""]
//     }
//     if (nameArray.length == 3 && suffixValues.includes(nameArray[2]) || suffixValues.includes(nameArray[3])) {
//         firstName = nameArray[0]
//         middleName = ""
//         lastName = nameArray[1]
//         suffix = nameArray[2]
//         console.log([firstName, "", lastName, suffix])
//         return [firstName, "", lastName, suffix]
//     }
//     if (nameArray.length == 3 && !suffixValues.includes(nameArray[2]) || !suffixValues.includes(nameArray[3])) {
//         firstName = nameArray[0]
//         middleName = nameArray[1]
//         lastName = nameArray[2]
//         suffix = ""
//         console.log([firstName, middleName, lastName, ""])
//         return [firstName, middleName, lastName, ""]
//     }
// }

// nameToParts("George Geralds")



// let x = "Sam fas Jr"
// if(suffixValues.includes("Jr")){
//     console.log("Yes")
// } else {
//     console.log("No")
// }
// console.log(nameArray)
// return [firstName, middleName, lastName, suffix]




// nameToParts("Sam. Smith, Jr.")
// Alice Arnold => ["Alice", "", "Arnold", ""]
// Charlie C Combs => ["Charlie", "C", "Combs", ""]
// Edna Edwards => ["Edna", "", "Edwards", ""]
// George Geralds Jr => ["George", "", "Geralds", "Jr"]
// Ignacio I. Iglesias III => ["Ignacio", "I", "Iglesias", "III"]
// Katarina Korkova-Kowalski => ["Katarina", "", "Korkova-Kowalski", ""]

//   Convert name information into our format
//   As part of our data conversion process, we take in files from a variety of clients and vendors. Everyone seems to have a – shall we say, unique? – way of representing name information. Some vendors provide everything in one field:

//   "Sam A Smith Jr"
//   while others provided more structured formats:

//   firstName: "Sam"
//   middleInitial: "A"
//   lastName: "Smith"
//   suffix: "Jr"
//   In general, we find the more structured formats to be easier to work with. We can quickly do things like sort or group by last name, organize the information in a table, change the way we present information back to users, and so on.

//   Instructions
//   Your goal is to write a function that takes in an unstructured name as a string (e.g. "Sam A Smith Jr") and returns an array with 4 elements:

//   [First Name, Middle Initial, Last Name, Suffix]

//   Note that not all names will contain all 4 parts. If a part is not present, you should return an empty string in that position. To keep things simple, you can assume names are always in the order above, i.e. you will not see cases like "Last, First M, Suffix." (If only data in the real world were always this clean!)

//   Although the name itself is unstructured, you can use some rules to help identify whether something is a first or last name vs a middle initial or suffix:

//   First name (required) – Always 1 word with 2 or more characters
//   Middle initial (optional) – Always a single letter, although it may be followed by a period.
//   Last name (required) – Always 1 word with 2 or more characters. May contain a hyphen. (See the examples below.)
//   Suffix (optional) – Could be any string, but we only want to return it if matches one of the following values: Sr, Jr, II, III, IV. So for example, if the name "Joe Smith V" (Joe Smith the Fifth) comes through, you should return ["Joe", "", "Smith", ""] (ignoring the V since it is invalid).

//   You should remove any punctuation (other than hyphenated last names). We have provided a function you can call to help with this.

//   Here are some example names you might need to handle, along with the expected return value:

// Alice Arnold => ["Alice", "", "Arnold", ""]
// Charlie C Combs => ["Charlie", "C", "Combs", ""]
// Edna Edwards => ["Edna", "", "Edwards", ""]
// George Geralds Jr => ["George", "", "Geralds", "Jr"]
// Ignacio I. Iglesias III => ["Ignacio", "I", "Iglesias", "III"]
// Katarina Korkova-Kowalski => ["Katarina", "", "Korkova-Kowalski", ""]
//   Tests
//   We have provided some example names that you can try out by clicking the "Run Tests" option and looking at the test results pane in the lower-right corner. (You may need to click on the green arrows to see log output if you add logging and the test passes. Also note that at smaller screen sizes, "Run Tests" might be a "Play" icon.)