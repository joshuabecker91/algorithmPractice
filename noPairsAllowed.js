

function noPairsAllowed(testCase){
    let output = []
    for(let i = 0; i < testCase.length; i++){
        let count = 0
        newString = testCase[i].split('')
        console.log(newString)
        for(let j = 0; j < newString.length-1; j++){
            if(testCase[i][j] == testCase[i][j+1] && testCase[i][j+1] != undefined){
                count ++
                console.log("found pair, count is now: ", count)
                j++
            } else {
                console.log("okay")
            }
        }
        output.push(count)
    }
    // console.log(output.reduce((a,b) => a+b))
    console.log(output)
    return output
}

noPairsAllowed(['ab', 'aab', 'abb', 'abab', 'abaaaba'])  // '0,1,1,0,1'
// noPairsAllowed(['add', 'boook', 'break']) // [1,1,0]

// noPairsAllowed(['apple', 'java', 'mongoose', 'offroad', 'aa', 'aaa', 'book'])



// if(testCase[i][j] == testCase[i][j+1] && testCase[i][j+1] != testCase[i][j+2]){
//     results.push()
// }



// let temp = ''
// if(testCase[i][j] == 'a'){
//     temp = 'b'
// } else {
//     temp = 'a'
// }
// newString.splice(j+1, 1, temp)
// console.log(newString)



// array = [1,2,3]
// array.splice(1,1)
// console.log(array)