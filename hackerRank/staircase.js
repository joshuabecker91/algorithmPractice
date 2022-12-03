

function staircase(n) {
    let spaces = ""
    let stairs = ""
    let loopCount = (n+1)
    for(let i=1; i < loopCount; i++){
        spaces = " ".repeat(loopCount-1-i)
        stairs = spaces + "#".repeat(i)
        console.log(stairs)
    }
}

staircase(6)
