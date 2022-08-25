// Two cats and a mouse are at various positions on a line.

// You will be given their starting positions

// which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed

// If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight

// int x: Cat 's position
// int y: Cat 's position
// int z: Mouse 's position

// let catA = x;
// let catB = y;
// let mouse = z;

// input:
// # of sets 
// A B C 
// A B C

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    let catAPos = Math.abs(z - x);
    let catBPos = Math.abs(z - y);
    if (catAPos < catBPos) {
        return "Cat A";
    } else if (catBPos < catAPos) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}

catAndMouse(1,2,3);

// If cat  catches the mouse first, print Cat A.
// If cat  catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

// string: Either 'Cat A', 'Cat B', or 'Mouse C'

// new line
// /n