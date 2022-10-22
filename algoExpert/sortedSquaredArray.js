function sortedSquaredArray(array) {
    // let arraySorted = array.sort((a, b) => a - b )
    // console.log(arraySorted)
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        // array.map
        let x = array[i] *= array[i];
        console.log(x)
        newArray.push(x);
    }
    return newArray.sort((a, b) => a - b);
}
