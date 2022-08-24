// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// A valley is a sequence of consecutive steps below sea level

// steps = 8

// path = [DDUUUUDD]

function countingValleys(steps, path) {
    // Write your code here

    let altitude = 0;
    let valleyCount = 0;

    // while(altitude > 0)

    for (let i=0; i<steps-1; i++){
        if(path[i] == "U"){
            altitude = altitude + 1;
        }
        if(path[i] == "D"){
            altitude = altitude - 1;
        }
        if(altitude == -1 && path[i] == "D"){
            valleyCount = valleyCount + 1;
        }
    }
    console.log(valleyCount);
    return valleyCount;
}

countingValleys(8, "UDDDUDUU");
countingValleys(32, "UDDDUDUUUDDDUDUUUDDDUDUUUDDDUDUU");

console.log("this was fun");