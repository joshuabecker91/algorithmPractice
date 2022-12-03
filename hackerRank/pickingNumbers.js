


function pickingNumbers(a) {
    // let maxArray = [];
    let maxCount = 0;
    a.sort((a,b) => a-b) // sort the array, ascending.
    console.log(a)

    for(let i = 0; i < a.length; i++){
        // let array = []
        let count = 1;
        for(let j = i+1; j < a.length; j++){
            if(Math.abs(a[j] - a[i]) <= 1){
                // array.push(a[j])
                count += 1;
            }
            // need to account for [0]
            if(count > maxCount){
                maxCount = count;
                console.log(maxCount)
            }
        }
    }
    console.log(maxCount);
    return maxCount;
}


pickingNumbers([4,6,5,3,3,1]);
// pickingNumbers([1, 2, 2, 3, 1, 2]);


// 4 6 5 3 3 1

// if(array.length > maxArray.length){
    // maxArray = array;
    // count = maxArray.length;
// }

// console.log(maxArray);
// console.log(maxArray.length);
// return maxArray.length;