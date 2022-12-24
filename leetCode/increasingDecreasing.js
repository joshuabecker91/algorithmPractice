

var sortString = function(s) {
    let output = ""
    let tempString = s[0]
    let tempChar = ""
    let i = 0
    while(output.length < s.length){
        console.log("s[i]", s[i], "tempChar", tempChar, tempString, output)
        if(s[i] != tempChar && s.charCodeAt(i) < tempChar.charCodeAt()){
            tempChar = tempString[i]
            output += s[i]
        } else {
            tempString += s[i]
        }
        if(i >= s.length){
            i = 0
            tempString = ""
        }
        if(output.length >= s.length){
            break
        }
        i++
    }
    console.log(output)

};

sortString("aaaabbbbcccc")



// newArray = s
// 
// let temp = undefined
// while(newArray.length > 0){
//     if(newArray[i] != temp){
//         temp = newArray[i]
//         slice 
//     } else {

//     }
//     newArray[0]

//     i++
// }
