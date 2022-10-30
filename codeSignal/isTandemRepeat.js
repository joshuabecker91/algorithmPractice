function solution(inputString) {
    for(let i = 1; i < inputString.length; i++){
        let string1 = inputString.slice(0,i)
        let string2 = inputString.slice(i,inputString.length)
        console.log(string1,string2)
        if(string1 === string2){
            console.log("true")
            return true
        }
    }
    console.log("false")
    return false
}

solution("tandemtandem")