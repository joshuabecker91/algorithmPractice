


var buildArray = function(target, n) {
    let output = []
    let nArray = []
    for(let i = 1; i < n+1; i++){
        nArray.push(i)
        output.push("Push")
        if(!target.includes(i)){
            nArray.pop()
            output.push("Pop")
        }
        if(target.length == nArray.length){
            break
        }
    }
    console.log(output)
    return output 
};

buildArray([1,3], 3)



// let output = []
//     for(let i = 1; i <= n; i++){
//         if(target[target.length-1] == i-1){
//             break
//         }
//         output.push('Push')
//         if(!target.includes(i)){
//             output.push('Pop')
//         }
//     }
//     return output