


function ArrayChallenge(strArr) {
    // console.log(strArr) // find out what test case you are providing
    let a = strArr[0].replace(/\D/g, '').split('') //replace all of the non Integer characters
    let b = strArr[1].replace(/\D/g, '').split('')
    let c = strArr[2].replace(/\D/g, '').split('')
    let d = strArr[3].replace(/\D/g, '').split('')
    // console.log(a, b, c, d) // each coordinate is now a 2 length array with index positions 0 and 1

    let minX = Math.min(Number(a[0]), Number(b[0]), Number(c[0]), Number(d[0])) // find min X
    let maxX = Math.max(Number(a[0]), Number(b[0]), Number(c[0]), Number(d[0])) // find max X
    let width = Math.abs(maxX - minX) // define the width of the rectangle
    // console.log(minX,maxX)
    // console.log(width)

    let minY = Math.min(Number(a[1]), Number(b[1]), Number(c[1]), Number(d[1])) // find min Y
    let maxY = Math.max(Number(a[1]), Number(b[1]), Number(c[1]), Number(d[1])) // find max Y
    let height = Math.abs(maxY - minY) // define the height of the rectangle
    // console.log(minY,maxY)
    // console.log(height)

    let area = width * height // area is simply the width multiplied by the height
    // console.log("the area is:", area)
    return area;
}


// ["(0 0)","(1 0)","(1 1)","(0 1)"] // 1
// ["(1 1)","(1 3)","(3 1)","(3 3)"] // 4