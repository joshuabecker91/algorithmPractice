

function processLogs(logs, threshold) {
    let hashmap = {}
    for(let i = 0; i < logs.length; i++){
        let x = logs[i].split(' ')
        console.log(x)
        let a = x.map(Number);
        console.log(a, " this is a")

        if(a[0] != a[1]){
            if(hashmap[a[0]]){
                console.log("index 0", logs[i][0]);
                hashmap[a[0]]++;
            }
            else{
                hashmap[a[0]] = 1;
            }
            
            if(hashmap[a[1]]){
                console.log("index 0", logs[i][1]);
                hashmap[a[1]]++;
            }
            else{
                hashmap[a[1]] = 1;
            }
        }
        else{
            if(hashmap[a[0]]){
                console.log("index 0", logs[i][0]);
                hashmap[a[0]]++;
            }
            else{
                hashmap[a[0]] = 1;
            }
        }
    }
    console.log(hashmap)

    let newArray = []

    let last = Object.keys(hashmap).pop()
    // let z = hashmap.indexOf(last)

    console.log(Object.values(hashmap), "this is the object keys")

    let k = Object.keys(hashmap)
    let v = Object.values(hashmap)
    
    for(let i = 0; i < k.length; i++){
        console.log("loop is running")
        if(v[i] >= threshold){
            newArray.push(k[i])
        }
    }

    console.log(hashmap)
    console.log(newArray, "this is the new Array!")
    console.log(Object.entries(hashmap))
    return newArray
}

// String.split("\\s+")

processLogs(["1 2 50", "1 7 70", "1 3 20", "2 2 17"], 2)

// processLogs(["88 99 200", "88 99 300", "99 32 100", "12 15 15"], 2)

// 88 99 200
// "sender_user_id, recipient_user_id, amount_of_transaction"

