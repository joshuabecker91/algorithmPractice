// kangaroo has the following parameter(s):

// int x1, int v1: starting position and jump distance for kangaroo 1
// int x2, int v2: starting position and jump distance for kangaroo 2

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let k1 = x1; // current position of kangaroo one
    let k2 = x2; // current position of kangaroo one

    console.log(k1)
    console.log(k2)

    // if starting position of k1 > k2
    if(k1 > k2 && v1 < v2) {
        // let i = 0
        while (k1!=k2) {
            k1 = k1 + v1;
            k2 = k2 + v2;
            // i = i + 1
            console.log(k1)
            console.log(k2)
            if(k1 == k2){
                console.log(`YES-24 ${k1} ${k2}`)
                return "YES"
            }
            if(k2 > k1){
                console.log("NO")
                return "NO"
            }
        }
    }
    if(k2 > k1 && v2 < v1) {
        // let i = 0
        while (k2!=k1) {
            k2 = k2 + v2;
            k1 = k1 + v1;
            // i = i + 1
            console.log(k1)
            console.log(k2)
            if(k2 == k1){
                console.log(`YES-42 ${k1} ${k2}`)
                return "YES"
            }
            if(k1 > k2){
                console.log("NO")
                return "NO"
            }
        }
    }
    else{
        console.log("NO 52")
        return "NO"
    }

}

kangaroo(0,3,4,2)

// kangaroo(0,3,4,2) yes