

// When a contiguous block of text is selected in a PDF viewer, 
// the selection is highlighted with a blue rectangle. 
// In this PDF viewer, each word is highlighted independently. For example:


// There is a list of  character heights aligned by index to their letters. 
// For example, 'a' is at index  and 'z' is at index . There will also be a string. 
// Using the letter heights given, determine the area of the rectangle highlight in  assuming all letters are  wide.

function designerPdfViewer(h, word) {
    let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let size = 0;
    let maxHeight = 0;
    for(let i = 0; i < word.length; i ++){ // loop through each index position (letter) of the word
        for(let x = 0; x < h.length; x++){ //loop through the alphabet
            if(word[i] == letters[x]){ //identify the index position so we can find h[index] value
                if(h[x] > maxHeight){ //set height to tallest letter height
                    maxHeight = h[x]
                }
                console.log(maxHeight)
            }
        }
    }
    console.log(maxHeight*(word.length))
    return (maxHeight*(word.length))
}

designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,], "abc")


// h.find(word[i] == letters) //something like this would simplify

// sum the value of all the index positions of   word 
// let height = word[i];
// size = size + letters[h[i]].toInt()
// console.log(size)