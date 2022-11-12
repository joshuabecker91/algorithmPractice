

function solution(s) {
    for(let i = 0; i < s.length-1; i++){
        if(s[i].charCodeAt() >= (s[i+1].charCodeAt())){
            console.log("false")
            return false
        }
        console.log(s[i])
    }
    console.log("true")
    return true
}

solution("effg")
// solution("bxz")



// console.log("A".charCodeAt())
// console.log("Z".charCodeAt())
// console.log("a".charCodeAt())
// console.log("z".charCodeAt())
