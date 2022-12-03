// cancel class if fewer than some number of students are present when class starts

// Arrival times go from on time

// Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.

function angryProfessor(k, a) {
    let minStudents = k   // to HAVE class
    let arrivalTimes = a
    // onTime = arrivalTime <= 0
    // late = arrivalTime > 0
    let studentsOnTime = 0;

    for(let i = 0; i < arrivalTimes.length; i++){
        if(arrivalTimes[i] <= 0){
            studentsOnTime = studentsOnTime + 1;
        }
    }
    if(studentsOnTime >= minStudents){
        return "NO"
    } else {
        return "YES"
    }
}

// RETURN

// YES if class is cancelled

// NO otherwise.