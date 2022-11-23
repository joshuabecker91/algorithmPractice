

function solution(items) {
    let newArray = [];
    for (let i = 0; i < items.length; i++) {
        let d = -1;
        for (let j = i - 1; j >= 0; j--) {
            if (items[j] < items[i]) {
                d = items[j];
                break;
            }
        }
        newArray.push(d);
    }
    console.log(newArray)
    return newArray;
}

solution([3, 5, 2, 4, 5])
