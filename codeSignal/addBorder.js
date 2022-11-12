


function solution(picture) {
    let pictureFrame = []
    let length = "*".repeat(picture[0].length + 2)
    // console.log(length)
    pictureFrame.push(length)
    for(let i = 0; i < picture.length; i++){
        picture[i] = "*" + picture[i] + "*"
        pictureFrame.push(picture[i])
    }
    pictureFrame.push(length)
    console.log(pictureFrame)
    return pictureFrame
}

solution(["abc","ded"])