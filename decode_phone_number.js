/*
'''
❓ PROMPT
Businesses like to make phone numbers that have meaning with English characters, but it's hard for users to convert the letter to numbers when dialing. For example, 

*1-800-U-B-SMART* becomes *1-800-8-2-76278*

because 8 corresponds to *T, U*, and *V* so the *U* becomes 8, 2 corresponds to *A, B*, and *C* so the *B* becomes 2, and so on according to a phone's dial pad.

Write a function that converts the English letters to their digit equivalent while preserving the formatting.

Example(s)
decodePhoneNumber("1-800-U-B-SMART") == "1-800-8-2-76278"
decodePhoneNumber("1.800.I.C.BUTTS") == "1.800.4.2.28887"
decodePhoneNumber("1-888-GET-RICH") == "1-888-438-7424"
decodePhoneNumber("555-U-HUNGRY!") == "555-8-486479!"


🔎 EXPLORE
State your assumptions & discoveries:
- We will preserve the formatting so we want to utilize a dial mapping hashmap and use .replace() or add to a new string
- We may have other characters other than letters
- It may be case sensative. use toUpperCase() as hashmap reference is this way

Create examples & test cases:
decodePhoneNumber("1-800-U-B-SMART") == "1-800-8-2-76278"
decodePhoneNumber("1.800.I.C.BUTTS") == "1.800.4.2.28887"
decodePhoneNumber("1-888-GET-RICH") == "1-888-438-7424"
decodePhoneNumber("555-U-HUNGRY!") == "555-8-486479!"


🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.
Approach 1: We can loop through the provided string one character at a time and replace each letter to the corresponding number if it is in the hashmap, otherwise push original char.
Time: O(n) if we do not replace the character in place but simple add/push to a new string
Space: O(n)


📆 PLAN
High-level outline of approach #: 
- Using a for loop we loop through the string one character at a time and if it is found inside the hashmap we push/add to a new string the corresponding value for that letter.
- otherwise we push / add the original character to the new string unaltered 


🛠️ IMPLEMENT
function decodePhoneNumber(text) {
def decodePhoneNumber(text: str) -> str:

The dial pad mapping in both directions has been provided for your convenience. 

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

'''
*/

letterToDigit = {
    'A':'2', 'B':'2', 'C':'2',
    'D':'3', 'E':'3', 'F':'3',
    'G':'4', 'H':'4', 'I':'4',
    'J':'5', 'K':'5', 'L':'5',
    'M':'6', 'N':'6', 'O':'6',
    'P':'7', 'Q':'7', 'R':'7', 'S':'7',
    'T':'8', 'U':'8', 'V':'8',
    'W':'9', 'X':'9', 'Y':'9', 'Z':'9',
    }

digitToLetters = {
    '2':['A','B','C'],
    '3':['D','E','F'],
    '4':['G','H','I'],
    '5':['J','K','L'],
    '6':['M','N','O'],
    '7':['P','Q','R','S'],
    '8':['T','U','V'],
    '9':['W','X','Y','Z']
}



function decodePhoneNumber(text) {
    let phoneNumber = ""
    for(let i = 0; i < text.length; i++){
        let char = text[i].toUpperCase()
        if(letterToDigit[char]){
            phoneNumber += letterToDigit[char]
        } else {
            phoneNumber += char
        }
    }
    console.log(phoneNumber)
    return phoneNumber
}

decodePhoneNumber("1-800-U-B-SMART") //== "1-800-8-2-76278"
decodePhoneNumber("1.800.I.C.BUTTS") //== "1.800.4.2.28887"
decodePhoneNumber("1-888-GET-RICH") //== "1-888-438-7424"
decodePhoneNumber("555-U-HUNGRY!") //== "555-8-486479!"


console.table([
    decodePhoneNumber("1-800-U-B-SMART"), //== "1-800-8-2-76278",
    decodePhoneNumber("1.800.I.C.BUTTS"),// == "1.800.4.2.28887",
    decodePhoneNumber("1-888-GET-RICH"),// == "1-888-438-7424",
    decodePhoneNumber("555-U-HUNGRY!"),// == "555-8-486479!",
    decodePhoneNumber("ORANGES"),// == "6726437",
    decodePhoneNumber("C O C O N U T"),// == "2 6 2 6 6 8 8",
    decodePhoneNumber("B_A_N_A_N_A_S"),// == "2_2_6_2_6_2_7",
    decodePhoneNumber("I 1 I 1 I 1 I"),// == "4 1 4 1 4 1 4",
    decodePhoneNumber("1111 AaBb CcDd EeFf 1111"),// == "1111 2222 2233 3333 1111",
    decodePhoneNumber("777 EcsTaSy 777"),// == "777 3278279 777",
    decodePhoneNumber("")// == ""
])


// Solution
function decodePhoneNumber(text) {
    const letterToDigit = {
        'A': '2', 'B': '2', 'C': '2',
        'D': '3', 'E': '3', 'F': '3',
        'G': '4', 'H': '4', 'I': '4',
        'J': '5', 'K': '5', 'L': '5',
        'M': '6', 'N': '6', 'O': '6',
        'P': '7', 'Q': '7', 'R': '7', 'S': '7',
        'T': '8', 'U': '8', 'V': '8',
        'W': '9', 'X': '9', 'Y': '9', 'Z': '9',
    };

    const digits = [];
    for (let i = 0; i < text.length; i++) {
        const char = text[i].toUpperCase();
        if (letterToDigit[char]) {
            digits.push(letterToDigit[char]);
        } else {
            digits.push(char);
        }
    }

    return digits.join('');
}