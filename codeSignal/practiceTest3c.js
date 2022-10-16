
// let abc = "word"
// let abc = String(1234)
// let abc = [1,2,3,4]
// let abc = ['abc','bcd','cde','def']
let abc = ["Daisy", "Rose", "Hyacinth", "Poppy"]
console.log(abc.slice(1,3))

function solution(arr) {
    let i = 0;
    let output = "";
    for(let j = i; j < arr[i].length; j++){
        for(let i = 0; i < arr.length; i++){
            if(arr[i][j] != undefined){
                output += arr[i][j]
            }
        }
        
    }
    
    for(let i = 0; i < arr.length; i++){
        output += arr[i].slice(arr[0].length, arr[i].length +1 )
    }
    
    console.log(output);
}

solution(["Daisy", "Rose", "Hyacinth", "Poppy"])



// arr[j][i]
// arr[0][0]
// arr[1][0]
// arr[2][0]
// arr[3][0]
// ---------
// arr[0][1]
// arr[1][1]
// arr[2][1]
// arr[3][1]

// j++


// if(arr[i][j]){
// }
// if(arr[i+1][j]){
//     output += arr[i+1][j]
// }
// if(arr[i+2][j]){
//     output += arr[i+2][j]
// }
// if(arr[i+3][j]){
//     output += arr[i+3][j]
// }