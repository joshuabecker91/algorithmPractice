

function solution(inputString) {
    let newString = ""
    for(let i = 0; i < inputString.length; i++){
        let index = inputString[i].charCodeAt() - 97
        let letter = String.fromCharCode(122 - index)
        console.log(letter)
        newString += letter
    }
    console.log(newString)
    return newString
}


solution("abc")
// solution("xyz")
// solution("mn")




// function solution(inputString) {
//     let string = ''
//     for(let i = 0; i < inputString.length; i++){
//         let number = inputString[i].charCodeAt() - 97
//         let answer = String.fromCharCode(122 - number)
//         string += answer
//     }
//     return string
// }



        // if(index > 12){
        //     index -= (13 - index)
        // } else {
        //     let temp = (25 - index)
        //     index = temp
        // }
        // let letter = String.fromCharCode(index + 97)


        // if(inputString.charCodeAt(i) >= 109){
        //     let diffFromMiddle = (109 - inputString.charCodeAt(i))
        //     console.log(diffFromMiddle)
        //     let newLetter = 97 + Math.abs(diffFromMiddle)
        //     let letter = String.fromCharCode(newLetter)
        //     console.log(letter)
        //     newString += letter
        // } else {
        //     let diffFromMiddle = (inputString.charCodeAt(i) - 110)
        //     console.log(diffFromMiddle)
        //     let newLetter = 110 + Math.abs(diffFromMiddle)
        //     let letter = String.fromCharCode(newLetter)
        //     console.log(letter)
        //     newString += letter
        // }
    // }
    // console.log(newString)

// solution("namez")
