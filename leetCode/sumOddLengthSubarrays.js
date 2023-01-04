

var sumOddLengthSubarrays = function(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j <= arr.length; j+=2){
            let x = arr.slice(i,j+1)
            if(x.length % 2 == 1){
                sum += x.reduce((a,b) => a+b)
            }
        }
    }
    // console.log(sum)
    return sum
};

sumOddLengthSubarrays([1,4,2,5,3])