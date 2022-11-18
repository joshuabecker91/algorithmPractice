


var subdomainVisits = function(cpdomains) {
    let hashmap = {}
    let result = []
    for(let i = 0; i < cpdomains.length; i++){
        let x = cpdomains[i].split(' ')
        let x2 = Number(x[0])
        let y = x[1].split('.')
        // console.log(x, y)
        // console.log(x2, y)
        let a = ""
        if(y[y.length -3]){
            a = y[y.length -3]
        }
        let b = y[y.length-2] + "." + (y[y.length-1])
        let c = y[y.length-1]
        // console.log(a, b, c)
        // let word = y[j]
        if(a != ""){
            if(hashmap[a + "." + b]){
                hashmap[a + "." + b] += x2
            } else {
                hashmap[a + "." + b] = x2
            }
        }
        if(hashmap[b]){
            hashmap[b] += x2
        } else {
            hashmap[b] = x2
        }
        if(hashmap[c]){
            hashmap[c] += x2
        } else {
            hashmap[c] = x2
        }
    }

    for (let key in hashmap){
        let str = ''
        str = str + hashmap[key] + " " + key
        result.push(str)
    }
    // console.log(hashmap)
    // console.log(result)
    return result
};

subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"])





    // for(let j = 0; j < y.length; j++){
    //     let word = y[j]
    //     if(hashmap[word]  ){
    //         hashmap[word] += x2
    //     } else {
    //         hashmap[word] = x2
    //     }
    // }
    // console.log(hashmap)