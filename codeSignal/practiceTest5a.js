


function solution(queryType, query) {
    let hashMap = {}
    let sum = 0
    for(let i=0; i<query.length; i++){
        // console.log(query[i][0], 'query[i][0]')
        switch(queryType[i]){
            case "insert": 
                hashMap[query[i][0]] = query[i][1]
                // console.log( hashMap[query[i][0]] = query[i][1], 'insert')
                break

            case "addToValue": 
                for(let key in hashMap){
                    hashMap[key] += query[i][0]
                    // console.log(  hashMap[key] += query[i][0] , 'Addto value')
                } 
                break

            case "addToKey" :
                // let temp;
                console.log('adding to key', hashMap  )
                // var newKey = (parseInt(key) + parseInt(query[i][0]))
                // hashMap.set(keys=newKey)

                let hashMap2 = {}
                for(let key in hashMap){
                    var newKey = (parseInt(key) + parseInt(query[i][0]))
                    hashMap2[newKey] = hashMap[key] //value
                    // console.log(parseInt(key), query[i][0], newKey)
                    // hashMap[key] = '888'
                    // key = newKey.toString()
                }
                hashMap = hashMap2
                console.log(hashMap, hashMap2)

                // Object.keys(hashMap).forEach(function(key) {
                //     var newKey = (parseInt(key) + parseInt(query[i][0]));
                //     console.log(parseInt(key), query[i][0], newKey)
                //     console.log(parseInt(key), hashMap[key])
                //     key = newKey

                // hashMap[newKey] = hashMap[key]; // Assign new key
                // console.log(hashMap)
                // delete hashMap[key]; // Delete old key
                // key = String(newKey)
                // key = String(newKey)
                // let temp = hashMap[key]
                // hashMap[newKey] = String(newKey)
                // hashMap[String(newKey)] = temp
                
                // console.log(key)
                // hashMap[key] = parseInt(key) + parseInt(query[i][0])
                // console.log(key)
                // console.log(hashMap)
    
                // let temp = key
                // delete hashMap[key]
                // hashMap[key] = newKey;
                console.log('after key shift', hashMap)
                // });
                // delete hashMap[key];
                // for(let key in hashMap){
                //     parseInt(key) + query[i][0]
                // console.log(hashMap, 'init hash')
                // let newPos = parseInt(key) + query[i][0]
                // temp = hashMap[newPos]
                // hashMap[newPos] = hashMap[key]
                // hashMap[key] = ""
                // }
                break

            case "get":
                let z = hashMap[query[i][0]]
                // console.log( z, 'get query')
                sum+=(z)
                break
        }
    }
    console.log(hashMap)
    console.log(sum)
    return sum
}

solution(['insert','insert', 'addToValue', 'addToKey', 'get' ], [[1,2],[2,1], [3], [1], [3]])


// let temp1;
//                 let temp2;
//                 for(let key in hashMap){
//                     if(temp1 == null){
//                         let newKey = parseInt(key) + query[i][0]
//                         temp2 = hashMap[newKey]
//                         hashMap[newKey] = hashMap[key] 
//                         temp1 = temp2
//                         delete hashMap[key]
//                     }else{
//                         let newKey = parseInt(key) + query[i][0]
//                         temp2 = hashMap
// hashMap[newKey] = temp1
//                         temp1 = temp2
//                         delete hashMap[key]
//                     }
//                 }


// x = 
// Object.keys(hashmap).forEach(function(key) {
//     var newkey = key + "xxx";
//     hashmap[newkey] = hashmap[key];
//     delete hashmap[key];
//   });



// for(let key in hashMap){
//     let temp = hashMap[value]
//     let newPos = hashMap[key] + query[i][0]
//     hashMap[key] = newPos
//     hashMap[value] = temp
//     hashMap[key] = ''
// }
