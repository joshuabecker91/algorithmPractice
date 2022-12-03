

function processData(input) {
    let s = ""
    let stack = [s]
    let z = input.split('\n')
    for(let i = 1; i < z.length; i++){
        const [op, param] = z[i].split(' ')
        switch(op){
            case "1":
                s += param
                stack.push(s)
                break

            case "2":
                let q = parseInt(param)
                s = s.slice(0, s.length-q)
                // s = s.substring(0, s.length-q);
                stack.push(s)
                break

            case "3":
                let index = parseInt(param)-1;
                console.log(s[index])
                break

            case "4":
                stack.pop()
                s = stack[stack.length-1]
                break
        }
    }
}


// function processData(input) {
//     const [numOps, ...queries] = input.split('\n')
//     const undoStack = []
//     let s = ''
    
//     for (let query of queries) {
//         const [op, param] = query.split(' ')
        
//         switch (op) {
//             case '1': // Append
//                 undoStack.push(s)
//                 s += param  
//                 break
//             case '2': // Delete
//                 undoStack.push(s)
//                 s = s.substring(0, s.length - Number(param))
//                 break
//             case '3': // Print
//                 console.log(s[Number(param) - 1])
//                 break
//             case '4': // Undo
//                 s = undoStack.pop()
//                 break
//         }
//     }
// } 


// function processData(input) {
//     let s = ""
//     let stack = []
//     // let b = "bob"
//     // console.log(b.slice(0,2))
//     // let x = input.split('\n')
//     for(let i = 1; i < input.length; i++){
//         // let query = x[i].split(' ');
//         // input = input.split('\n')
//         // console.log(input);
//         let z = input[i]
//         // console.log(z)
//         let x = z.split(' ') // for vs code 
//         // let x = z.split('\n') // for hackerrank
//         // console.log(x)
//         switch(x[0]){
//             case "1":
//                 s += x[1]
//                 // console.log("s is here:", s)
//                 stack.push(s)
//                 break

//             case "2":
//                 // console.log("this is x[1]", x[1])
//                 let q = parseInt(x[1])
//                 // console.log(q, "s length is:", s.length)
//                 let y = s.slice(0,s.length-q)
//                 s = y
//                 stack.push(s)
//                 break

//             case "3":
//                 let index = parseInt(x[1])-1;
//                 // console.log("yes")
//                 console.log(s[index])
//                 // console.log(s[parseInt(x[1])])
//                 // parseInt may have to if issue
//                 break

//             case "4":
//                 if(stack.length >= 1){
//                     stack.pop()
//                     if(stack[stack.length-1]){
//                         s = stack[stack.length-1]
//                     } else {
//                         s = ""
//                     }
//                 } else {
//                     s = ""
//                 }
//                 break
//         }
//     } 
//     return;
// }

// input.split('\n');

// processData(['1 fg', '3 6', '2 5', '4', '3 7', '4', '3 4'])
processData(['8', '1 abc', '3 3', '2 3', '1 xy', '3 2', '4', '4', '3 1'])

// processData(['x', '1 abc', '3 3', '4'])
// s = 'abc'
// stack = []
// processData(['x', '1 abc', '2 1'])

// 8
// 1 abc
// 3 3
// 2 3
// 1 xy
// 3 2
// 4
// 4
// 3 1




// // hackerrank solution

// function processData(input) {
//     let s = ""
//     let stack = []
//     let z = input.split('\n')
//     let newArray = []
//     for(let i = 1; i < input.length; i++){
//         let x = z[i].split(' ')
//         let e = x[0]
//         let r = x[1]
//         switch(e){
//             case "1":
//                 s += r
//                 stack.push(s)
//                 break

//             case "2":
//                 let q = parseInt(r)
//                 let y = s.slice(0,s.length-q)
//                 s = y
//                 stack.push(s)
//                 break

//             case "3":
//                 let index = parseInt(r)-1;
//                 console.log(s[index])
//                 newArray.push(s[index])
//                 break

//             case "4":
//                 if(stack.length >= 1){
//                     stack.pop()
//                     if(stack[stack.length-1]){
//                         s = stack[stack.length-1]
//                     } else {
//                         s = ""
//                     }
//                 } else {
//                     s = ""
//                 }
//                 break
//         }
//     } 
//     return newArray;
// }


    // 1 push 
    // 2 delete last 
    // 3 print 
    // 4 pop last