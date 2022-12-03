


function findDigits(n) {
    let count = 0;
    let arr = (String(n).split(''));
    for(let i = 0; i < arr.length; i++){
        if(n % (Number(arr[i])) == 0){
            // console.log(Number(arr[i]));
            count += 1;
        }
    }
    console.log(count);
    return count;
}

findDigits(1012);