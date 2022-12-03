
function cutTheSticks(arr) {
    let remaining = []
    remaining.push(arr.length);
    let i = 0;
    while(arr.length > 0){
        let shortStick = arr[i];
        for(let x = 0; x < arr.length; x++){ //find minimum stick
            if(arr[x] <= shortStick){
                shortStick = arr[x] // arr[x] or x ?
            }
        }
        console.log(shortStick, "shortest stick this itteration");

        for(let q = 0; q < arr.length; q++){
            if(arr[q] == shortStick){
                arr.splice(q,1);
                q--
            }
        }

        console.log(arr, "before trimming other sticks")
        for(let y = 0; y < arr.length; y++){
            arr[y] -= shortStick
        }

        for(let c = 0; c < arr.length; c++){
            if(arr[c] == 0){
                arr.splice(c,1);
                c--
            }
        }

        console.log(arr, "after trimming other sticks")
        remaining.push(arr.length)
        console.log(remaining)
        console.log("one loop-----------------------------------------------------------")
        i++
    }
    if(arr.length > 0){
        remaining.push(arr.length)
    }
    console.log(remaining)
    return remaining

}

cutTheSticks([1,2,3,4])
// cutTheSticks([5, 4, 4, 2, 2, 8])



// the number of sticks for each itteration . push ( count )
// output += '\n' + arr.length;
// console.log(arr, "end", stickCount)
// console.log(arr.length)







// let answer=[arr.length]
// while (arr.length > 0){
//     //re-initialize count, newArr, and min each time loop runs
//         let count=0
//         let newArr=[]
//         let min=arr[0]
//         for (let i=0; i<arr.length;i++){
//             if(arr[i] < min){
//                 min = arr[i]
//             }
//         }
//         console.log('min',min)
//         //subtract min from elements in array
//         for (let i=0; i<arr.length; i++){
//             arr[i] = arr[i]-min
//             if(arr[i]!== 0){
//                 count++
//                 newArr.push(arr[i])
//             }
//             console.log('a',arr[i])
//         }
//         //discard 0s from the array
//         console.log(newArr)
//         //single loop completed. how to break the cycle? when 
//         if(count !==0){
//             answer.push(count)
//         }
//         //set arr to the newly created array
//         arr=newArr
//         console.log('count',count)
//         console.log('arr end',arr)
//     }

// return answer

