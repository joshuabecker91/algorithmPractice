


function solution(n) {
    let factoral = 1;
    if(n == 1){
        return 1
    }
    for(let i = 1; factoral < n; i++){
        factoral = factoral * i
        console.log(factoral);
        if(factoral >= n){
            console.log("answer is ", factoral)
            return factoral
        }
    }
}

solution(17);
solution(1);
