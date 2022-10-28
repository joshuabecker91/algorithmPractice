

function solution(a) {
    let b = []
    for(let i = 0; i < a.length; i++){
        // let sum = 0
        let x = a[i - 1]
        let y = a[i]
        let z = a[i + 1]
        if(x == undefined){
            x = 0
        }
        if(z == undefined){
            z = 0
        }
        let sum = x + y + z
        console.log(sum)
        b.push(sum)
    }
    console.log(b)
    return b
}

