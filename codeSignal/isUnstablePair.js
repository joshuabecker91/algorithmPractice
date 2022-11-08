

function solution(filename1, filename2) {
    let max = filename1.length
    if(filename2.length > filename1.length){
        max = filename2.length;
    }
    for(let i = 0; i < max; i++){
        if(filename1[i] != filename2[i]){
            if(filename1.charCodeAt(i) < filename2.charCodeAt(i)){
                console.log("true")
                return true
            }
            else if(filename1.charCodeAt(i) > filename2.charCodeAt(i)){
                console.log("true")
                return true
            }
            else if(!filename1[i] || !filename2[i]){
                console.log("true")
                return true
            }
        }
    }
    console.log("false")
    return false
}

solution("aab", "AAB")