


function solution(lastNumberOfDays) {
    numOfDays = [31,28,31,30,31,30,31,31,30,31,30,31]
    // console.log(numOfDays.indexOf(lastNumberOfDays))
    newArray = []

    for(let i = 0; i < numOfDays.length; i++){
        if(lastNumberOfDays == numOfDays[i]){
            if(!newArray.includes(numOfDays[i+1]) && numOfDays[i+1]){
                newArray.push(numOfDays[i+1])
            }
        }
    }

    console.log(newArray);
    return newArray;

}

solution(30)
