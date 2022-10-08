


function solution(a, b, n) {
    let total = 0;
    for(let i = 0; i < n; i++){
        total = total + (a * b);
        a++;
        b++;
    }
    console.log(total);
    return total;
}

solution(1, 2, 2);

