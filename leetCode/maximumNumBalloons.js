

var maxNumberOfBalloons = function(text) {
    let balloon = "balon"
    let balloonChars = [1,1,2,2,1]
    let chars = [0,0,0,0,0]

    for(let i = 0; i < text.length; i++){
        switch(text[i]){
            case "b":
                chars[0]++
                break
            case "a":
                chars[1]++
                break
            case "l":
                chars[2]++
                break
            case "o":
                chars[3]++
                break
            case "n":
                chars[4]++
                break
        }
    }

    let min = Infinity;

    for(let i = 0; i < balloonChars.length; i++){
        let x = Math.floor(chars[i] / balloonChars[i])
        console.log(x)
        if(x < min){
            min = x
        }
    }
    console.log(chars, balloonChars)
    console.log(min)
    return min
};

maxNumberOfBalloons("nlaebolko")
// b
// a 
// l 
// o 
// n 
