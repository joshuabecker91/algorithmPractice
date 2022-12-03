

function find_doubles_in_list(values) {
    let elements = []
    for(let i = 0; i < values.length; i++){
        let d = ((values[i])*2)
        let count = 0;
        values.forEach(element => {
            if (element == values[i]) {
                count += 1;
            }
            });
        // console.log(count)
        // console.log(values.includes(d))
        if(values.includes(d) && count <= 1){
            elements.push(d)
        }
    }
    // console.log(elements.join(' '))
    return (elements.join(' '))
}