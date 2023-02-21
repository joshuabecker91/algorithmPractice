

// beats 55% on time and 77% on memory
var removeOuterParentheses = function(s) {
    let sArray = s.split('')
    let output = []
    let queue = []
    let open = 0
    let boolean = false
    // console.log(sArray)
    for(let i = 0; i < sArray.length; i++){
        if(boolean === false && open === 0 && sArray[i] == '('){
            boolean = true
            continue
        }
        if(boolean === true && open === 0 && sArray[i] == ')'){
            boolean = false
            output.push(queue.join(''))
            queue = []
            continue
        }
        if(sArray[i] === '('){
            queue.push(sArray[i])
            open++
        }
        if(sArray[i] === ')'){
            queue.push(sArray[i])
            open--
        }
    }
    // console.log(output.join(''))
    return output.join('')
};


removeOuterParentheses("(()())(())")

