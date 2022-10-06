


function solution(a, b) {
    if(a < b){
        while(a != b){
            a++
            console.log(a);
            b--
            console.log(b);
            if(a > b){
                console.log("true")
                return true
            }
        }
        console.log("false")
        return false
    }
    else if(a > b){
        // don't need to go through the while loop because if a > b we know 
        // we are entering an infinite loop since a++ and b--
        // while(a != b ){
        //     a++
        //     console.log(a);
        //     b--
        //     console.log(b);
        //     if(a < b){
        //         console.log("true")
        //         return true
        //     }
        // }
        console.log("true")
        return true
    }
    else {
        console.log("false")
        return false
    }
}

// solution(2, 6)
// solution(2, 3)
solution(3, 1)




// count ++;
// console.log("count =", count)

// return true;
// return false;