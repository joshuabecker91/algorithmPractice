

function solution(maxLength, text) {
    let count = 0;
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let x = text.replace(regex, '').toLowerCase()
    console.log(x)
    let array = x.split(' ')
    console.log(array)
    for(let i = 0; i < array.length; i++){
        if(array[i].length <= maxLength && array[i] != ""){
            count++
            console.log(array[i])
        }
    }
    console.log(count)
    return count
}

solution(4, "The Fox asked the stork, 'How is the soup?'")
solution(1, "...")