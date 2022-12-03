

// points 
    // 1 10
    // 2 6
    // 3 4
    // 4 3
    // 5 2 
    // 6 1

function print_classification(raw_data) {
    let hashmap = {}
    // let array = raw_data.join('\n')
    // console.log(raw_data)
    for(let i = 0; i < raw_data.length; i++){
        let race = raw_data[i][0]
        let racer_name = raw_data[i][1]
        let position = raw_data[i][2]
        let score = 0;
        let scores = {
            // position : score
            "1" : 10,
            "2" : 6,
            "3" : 4,
            "4" : 3,
            "5" : 2, 
            "6" : 1,
        }
        score = scores[position] 
        console.log("score is:", score)
        if(hashmap[racer_name]){
            hashmap[racer_name] += score
        } else {
            hashmap[racer_name] = score
        }
        console.log(hashmap)
    }

    // winner = [racer_name, score]
    let max = 0;
    let winner = [0,0]
    for(let key in hashmap){
        if(hashmap[key] > winner[1]){
            winner[0] = Number(key)
            winner[1] = hashmap[key]
            max = hashmap[key]
            // if(Number(key) > winner[0]){
                
            // }
        }
    }
    let newArray = []
    for(let key in hashmap){
        if(hashmap[key] == max){
            newArray.push([key,hashmap[key]])
        }
    }
    console.log(newArray)
    newArray.sort((a,b) => a[0]-b[0])
    console.log(newArray)
    console.log(newArray[0])
    // return newArray[0]
    console.log(newArray[0].join(' '))
    // return (winner.join(' '))

    // let hpArray = Array.from(hashmap)
    // console.log(hpArray)
    // let highest = Object.values(hashmap).reduce(function(a, b){ return hashmap[a] > hashmap[b] ? a : b });
    // return highest
    // console.log(highest)
    // console.log(Object.keys(hashmap[highest]))
    // return Object.keys(hashmap[highest])
    
}


let array = [  [1001, 1090, 1], [1002, 1090, 2], [1003, 1080, 1], [1004, 1080, 2], [1005, 1070, 3], [1006, 1060, 5], [1007, 1050, 1] ] 

print_classification(  array  )


// let newHashmap = {
//     '1' : 1,
//     '3' : 3
// }
// newHashmap[2] = 2
// console.log(newHashmap)

// total all the scores 
// sort the array to find the highest score(s)
// if highest scores are tied, return the lowest player number and their score 


// [race, racer_name, position]