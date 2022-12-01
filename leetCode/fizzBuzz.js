

var fizzBuzz = function(n) {
    let output = []
    for(let i = 1; i < n+1; i++){
        if(i % 15 == 0){
            // console.log("FizzBuzz")
            output.push("FizzBuzz")
        }
        else if(i % 5 == 0){
            // console.log("Buzz")
            output.push("Buzz")
        }
        else if(i % 3 == 0){
            // console.log("Fizz")
            output.push("Fizz")
        }
        else {
            // console.log(String(i))
            output.push(String(i))
        }
    }
    console.log(output)
    return output
};

fizzBuzz(3)