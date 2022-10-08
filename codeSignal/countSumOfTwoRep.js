

function solution(n, l, r) {
    let count = 0;
    let b = 0;
    for(let a = 0; a < n; a++){
        b = n - a;
        if(l <= a && a <= b && b<=r){
            if(a+b == n){
                console.log("yes")
                count ++;
            }
        }
    }
    console.log(count);
    return count
}


solution(6, 2, 4)