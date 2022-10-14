

function rpn(inputs) {
    // Push all numbers to a temp stack until you reach an operator.
    // Once you hit an operator, you pop until the stack is empty and push the result onto the stack.
    let accumulator = [];
    var operatorsString = "+-/*";
    for (let i = 0; i < inputs.length; i++) {
        if (operatorsString.includes(inputs[i])) {
            if (accumulator.length >= 2) {
                let operand1 = accumulator.pop();
                let operand2 = accumulator.pop();
                switch (inputs[i]) {
                    case "+":
                        accumulator.push(operand2 + operand1);
                        break;
                    case "-":
                        accumulator.push(operand2 - operand1);
                        break;
                    case "/":
                        accumulator.push(operand2 / operand1);
                        break;
                    case "*":
                        accumulator.push(operand2 * operand1);
                        break;
                }
            }
        } else {
            accumulator.push(inputs[i]);
        }
        // console.log(accumulator.pop())
    }
    return accumulator.pop();
}

console.log(rpn([ 3 , 4 , '*' , 5 , 7, '*', '+']))
// console.log("rpn");
// console.log(rpn([4, 2, "+", 3, ""]));
// console.log(rpn([4, 2, "+", 5, 7, "*", "+"]));




// let test = [0,1,2,3,4,5,6]
// console.log(test.reduce((a, b) => a + b))

// function rpn(inputs){
//     let array = [inputs[0]]
//     // let arrayWithoutOperators = []
//     // let lastOperator = 0;
//     let running = [];
//     // console.log(running.length)
//     // console.log("this is reduce", running.reduce((a, b) => a + b));
//     for(let i = 1; i < inputs.length; i++){
//         console.log("loop", running, array)
//         if(isNaN(inputs[i])){ //isNan() !Number.isInteger
//             let temp = array[0]
//             array.pop()
//             if(inputs[i] == "+"){
//                 // let totalp = 0;
//                 // let reduceTotal = 0;
//                 // if(running.length > 0){
//                 //     totalp = running.reduce((a, b) => a + b)
//                 // }
//                 array.push(inputs[i-1] + temp);
//             }
//             if(inputs[i] == "-"){
//                 // let totalm = 0;
//                 // if(running.length > 0){
//                 //     totalm = running.reduce((a, b) => a - b)
//                 // }
//                 array.push(inputs[i-1] - temp);
//             }
//             if(inputs[i] == "/"){
//                 // let totald = 0;
//                 // if(running.length > 0){
//                 //     totald = running.reduce((a, b) => a / b)
//                 // }
//                 array.push(inputs[i-1] / temp);
//             }
//             if(inputs[i] == "*"){
//                 // let totalmm = 0;
//                 // if(running.length > 0){
//                 //     totalmm = running.reduce((a, b) => a * b)
//                 // }
//                 array.push(inputs[i-1] * temp);
//             }
//             running = [];
//             console.log(array);
//         }
//         else {
//             running.push(inputs[i]);
//         }
//     }
//     console.log(array, "solution")
//     return array
// }


// rpn([ 4 , 2 , '+' , 3 ,'*'])
// rpn(  [ 3 , 4 , '*' , 5 , 7, '*', '+']  )

// (3 x 4) + (5 x 7)

// + running.reduce((a, b) => a + b)








// running.reduce((previousValue, currentValue) => 
// previousValue + currentValue
// )

// array.push(array.reduce() + inputs[i-1])

// console.log(array, runningTotal)

//     // [...inputs[i]]
//     // array.push( array[0] + inputs[i-1]);
//     // console.log(array)
// }
// else(inputs[i] == "-")


//         }
//     }
// }

// // *  /  +  -

// rpn(  [ 4 , 2 , '+' , 3 ,'*']  )

// 4 + 2 = 8

// 8 * 3 = 24

// // wants to use push and pop and use the array as a stack
// // .pop()
// // .push()

// rpn(  [ 3 , 4 , 'x' , 5 , 7, '*', '+']  )

// // rpn(  [ 4 , 2 ,'+' , 3 ,'*']  )