

function removeNonDigits(str) {
    return str.replace(/\D/g, "")
}

function cleansePhoneNumber(phone) {
    // remove parenthesis, hyphens, periods, etc
    var cleansedPhone = removeNonDigits(phone)

    // empty is OK
    if (cleansedPhone !== "" && cleansedPhone.length !== 10) {
        return cleansedPhone.replace(/\D/g, '').length == 10
        //     throw new Error("Invalid phone number!")
    }

    return cleansedPhone
}

// NOTE: Feel free to test other phone numbers to figure out what's happening
function main() {
    console.log(cleansePhoneNumber("(123) 456-7890"))
    console.log(cleansePhoneNumber("123-456-7890"))
    console.log(cleansePhoneNumber("456-7890"))
}
