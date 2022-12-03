

// length = ron birth month 
// sum of integers on squares = birth day

// int s[n]: the numbers on each of the squares of chocolate
// int d: Ron's birth day
// int m: Ron's birth month

// let array2 = [0,1,2,3,4,5,6,7,8,9]
// console.log(array2.slice(3,7))


function birthday(s, d, m) {
    let count = 0;
    for(let i = 0; i < s.length; i++){
        let array = s.slice(i,i+m)
        console.log(s.slice(i,i+m))
        let sum = 0;
        for(let x = 0; x < array.length; x++){
            sum += array[x]
        }
        console.log("sum is", sum);
        if(sum == d){
            count++;
            console.log("count is", count)
        }
    }
    console.log(count);
    return count;
}

birthday([2,2,1,3,2], 4, 2);



// for(let j = i+1; j < array.length; j++){
//     if(array[i] + array[j] == d){
//         console.log(array[i], array[j] , d)
//         count ++;
//     }