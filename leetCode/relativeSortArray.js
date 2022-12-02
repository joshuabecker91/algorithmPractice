

var relativeSortArray = function(arr1, arr2) {
    let hashmap = {}
    let nonMatching = []
    for(let i = 0; i < arr1.length; i++){
        let x = arr1[i]
        if(hashmap[x] && arr2.includes(arr1[i])){
            hashmap[x]++
        } 
        else if(arr2.includes(arr1[i])) {
            hashmap[x] = 1
        }
        else {
            nonMatching.push(x)
        }
    }
    // console.log(hashmap, nonMatching)
    for(let key in hashmap){
        hashmap[key]--
    }

    let output = []
    for(let i = 0; i < arr2.length; i++){
        output.push(arr2[i])
        let count = hashmap[ arr2[i] ]
        while(count > 0){
            output.push(arr2[i])
            count--
        }
    }
    // console.log(output)
    // console.log(output.concat(nonMatching.sort((a,b) => a-b)))
    return (output.concat(nonMatching.sort((a,b) => a-b)))
};

relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6])




    // for(let i = 0; i < arr1.length; i++){
    //     if(arr2.includes(arr1[i])){
    //         console.log(i, arr1[i], arr2.indexOf(arr1[i]))
    //         let index = arr2.indexOf(arr1[i])
    //         let a = newArray.slice(0,index)
    //         let b = arr1[i]
    //         let c = newArray.slice(index,newArray.length+1)
    //         newArray = a.concat(b).concat(c)
    //         console.log(newArray)
    //     }
    // }


    // let h = {};
    // for(let i=0;i<arr2.length;++i)  h[arr2[i]]=i;
    // for(const i of arr1)    if(!(i in h))    h[i]=1000+i;
    // arr1.sort((a,b)=>h[a]-h[b]);
    // return arr1;