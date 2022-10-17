

function solution(inputArray, elemToReplace, substitutionElem) {
    for (let i = 0; i < inputArray.length; i++){
        if(inputArray[i] == elemToReplace){
            inputArray[i] = substitutionElem;
        }
    }
    console.log(inputArray);
    return inputArray;
}

solution([1, 2, 1], 1, 3);
