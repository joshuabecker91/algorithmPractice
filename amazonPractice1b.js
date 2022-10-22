

function countGroups(related) {
    // Write your code here
    let z = []
    for(let i = 0; i < related.length; i++){
        let x = related[i].split('')
        console.log(x)
        // let a = related.map(Number);
        z.push(x)
        console.log(z)
    }

    let count = 0;

    for(let i = 0; i < z.length; i++){
        for(let b = 0; b < z.length; b++){
            console.log((z[i][b]), "test1")
            console.log(z[b][i], "test2")
            // && z[i][b] != z[i][b]
            if(z[i][b] == 1 && z[b][i] == 1 ){
                console.log("yes")
                count++;
            }

        }
    }
    console.log(count / 3)
    return count / 3
}

// countGroups(['1100', '1110', '0110', '0001']);
countGroups(['10000', '01000', '00100', '00010', '00001']);