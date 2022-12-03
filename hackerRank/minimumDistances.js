


function minimumDistances(a) {
    let distances = {}
    for(let i = 0; i < a.length; i++){
        for(let x = i+1; x < a.length; x++){
            if(a[i] == a[x]){
                console.log(x - i);
                distances[a[i]] = (x - i);
            }
        }
    }
    if(Object.keys(distances).length < 1){
        console.log("None")
        return -1
    }
    console.log(distances);
    let arr = Object.values(distances);
    let min = Math.min(...arr);
    console.log(min);
    return min;
}

minimumDistances([1, 2, 3, 4, 10]);
// minimumDistances([7, 1, 3, 4, 1, 7]);

// If no such value exists, return .-1


// i
// [0,1,2,3,4]

// j
// [a,b,c,d,e]

// 0, e
// 1, d 
// 2, c