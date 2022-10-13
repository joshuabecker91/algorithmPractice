

function solution(param1, param2) {
    let newArray = [];
    // Getting the string as a parameter
    // and typecasting it into an integer
    let myFunc = num => Number(num);
    let x = Array.from(String(param1), myFunc);
    let y = Array.from(String(param2), myFunc);
    console.log(x)
    console.log(y)
    console.log(x.length, y.length)

    let length = x.length;
    if(y.length > x.length){
        length = y.length
    }
    // console.log(x.lastIndexOf())
    let xR = x.reverse()
    let yR = y.reverse()

    if(param1 == 0){
        return param2;
    }
    if(param2 == 0){
        return param1;
    }

    for(let i = 0; i < length; i++){
        if(xR[i] && xR[i]){
            let temp = xR[i] + yR[i];
            console.log(temp)
            if(temp > 9){
                newArray.push(temp%10)
            }
            else{
                newArray.push(temp)
            }
        }
        else if(!xR[i]) {
            newArray.push(yR[i])
        }
        else if(!yR[i]) {
            newArray.push(xR[i])
        }
    }
    console.log(newArray)
    newArray.reverse()
    console.log(newArray)
    return Number(newArray.join(''))
    // let solution = newArray[lastIndexOf()]
    // console.log(solution)
}

solution(456,1734)



// x.lastIndexOf()
// y.lastIndexOf()


// console.log(temp[temp.length]);
// newArray.push(temp[temp.length]);