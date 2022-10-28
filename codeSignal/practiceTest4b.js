

function solution(s) {
    let count = 0;
    console.log("this is s[0]", s[0])
    console.log((s.slice(0,2)).toString())
    for(let i = 0; i < s.length; i++){
        for(let j = i+1; j < s.length-1; j++){
            let a = (s.slice(0,i+1)).toString()
            let b = (s.slice(i+1,j+1)).toString()
            let c = (s.slice(j+1,(s.length+1))).toString()
            console.log("a is:", a, "     b is:", b, "     c is:", c)
            if((a + b) != (b + c) && (b + c) != (c + a)){
                count++
            }
        }
    }
    console.log(count)
    return count
}

// solution("xzxzx")
solution("xzxzxzxzxz")