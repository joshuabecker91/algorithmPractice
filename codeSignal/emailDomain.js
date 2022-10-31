

function solution(address) {
    let index = address.lastIndexOf("@")
    console.log(index)
    let domain = address.slice(index+1,address.length)
    console.log(domain)
    return domain
}

solution("prettyandsimple@example.com")
solution("\"very.unusual.@.unusual.com\"@usual.com")