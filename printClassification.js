

// points 
    // 1 10
    // 2 6
    // 3 4
    // 4 3
    // 5 2 
    // 6 1
let hashmap = {}
function print_classification(raw_data) {
    // let array = raw_data.join('\n')
    // console.log(raw_data)
    for(let i = 0; i < raw_data.length; i++){
        let race = raw_data[i][0]
        let racer_name = raw_data[i][1]
        let position = raw_data[i][2]
        let score = 0;
        let scores = {
            "1" : 10,
            "2" : 6,
            "3" : 4,
            "4" : 3,
            "5" : 2, 
            "6" : 1,
        }
        score = scores[position] 
        // console.log("score is:", score)
        if(hashmap[racer_name]){
            hashmap[racer_name] += score
        } else {
            hashmap[racer_name] = score
        }
        // console.log(hashmap)
    }
    
    let winner = [0,0]
    for(let key in hashmap){
        if(hashmap[key] > winner[1]){
            winner[0] = Number(key)
            winner[1] = hashmap[key]
            // if(Number(key) > winner[0]){
                
            // }
        }
    }
    console.log(winner.join(' '))
    return (winner.join(' '))
    // let hpArray = Array.from(hashmap)
    // console.log(hpArray)
    // .sort((a,b) => a[1]-b[1])
    // let highest = Object.values(hashmap).reduce(function(a, b){ return hashmap[a] > hashmap[b] ? a : b });
    // return highest
    // console.log(highest)
    // console.log(Object.keys(hashmap[highest]))
    // return Object.keys(hashmap[highest])
    
}
