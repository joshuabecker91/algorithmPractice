
// console.log(toChar("c"))

function solution(s, t) {
    let count = 0;
    console.log(s);
    let sArray = s.split('');
    // console.log(s.slice(1,3));

    for(let i = 0; i < s.length; i++){
        if(!isNaN(Number(s[i]))){
            // console.log(s.split('').splice(i,1));

            console.log(s.split('').filter(item => item !== s[i]))
            let newArray = s.split('').filter(item => item !== s[i]);

            // console.log(newArray.join(''), "this is newArray")
            let value = Number(newArray.join('')) - Number(t);
            console.log(value, "this is value")

            if(newArray.join('')  <  t){
                console.log("yes");
                count ++;
            }
            else{
                console.log("no");
            }
        }
    }
    return count
}

solution("ab12c", "1zz456")




// console.log("yes")
// Number(s[i])
// s.split('');
// console.log(s);
// console.log(s);