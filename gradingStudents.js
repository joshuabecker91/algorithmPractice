
// Sam is a professor at the university and likes to round each student's grade.


function gradingStudents(grades) {
    let roundedGrade = 0;
    let newArray = [];
    for(let i = 0; i < grades.length; i++){
        // console.log(grades[i])
        if(grades[i] > 37){
            // console.log(grades[i], (grades[i] % 5), "this is the modulus")
            if((5 - (grades[i] % 5))  < 3){
                roundedGrade = (grades[i] + (5 - (grades[i] % 5)));
                console.log(roundedGrade, "first case");
                newArray.push(roundedGrade);
            }
            else {
                roundedGrade = grades[i];
                console.log(roundedGrade, "second case");
                newArray.push(roundedGrade);
            }
        }
        else {
            roundedGrade = grades[i]
            console.log(roundedGrade, "third case");
            newArray.push(roundedGrade);
        }
    }
    console.log(newArray);
    return newArray;
}

// gradingStudents([70,71,72,73,74,75]);

gradingStudents([73,67,38,33]);






// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= 38 && (grades[i] % 5 == 3 || grades[i] % 5 == 4)) {
//         grades[i] = grades[i] + (5 - (grades[i] % 5));
//     }
// }
// console.log(grades);