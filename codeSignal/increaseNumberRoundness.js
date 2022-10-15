


function solution(n) {
    let x = String(n).split('').reverse()
    console.log(x)
    // console.log(x.splice(1,5))
    for(let i = 0; i < x.length; i++){
        console.log("loop", x[i])
        if(x[i] == 0){
            console.log("zero")
        }
        else{
            // if(x[i+1] == 0){
            //     console.log("true")
            //     return true
            // }
            let newArray = x.splice(i+1,x.length)
            console.log(newArray)
            if(newArray.includes("0")){
                console.log("true spliced array contains zero")
                return true
            }
            else{
                console.log("false")
                return false
            }
        }
    }
}

// solution(902200100)
solution(1022220)
// let num = 902200100
// let modulus = num%2
// console.log(modulus)