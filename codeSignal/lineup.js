

// // B ,  A,  L,   R

function solution(commands) {
    let students = ["A","A","A","A"];
    let count = 0;
    if(commands == ""){
        return 0
    }
    for(let i = 0; i < commands.length; i++){
        for(let x = 0; x < students.length; x++){
            // console.log(x, students[x], commands[i], "before", students);

            if(commands[i] == "A"){
                students[x] = "A";
            }

            // A   A L B R
            if(x == 1){
                if(commands[i] == "R"){
                    if(students[x] == "A"){
                        students[x] = "L";
                    }
                    else if(students[x] == "L"){
                        students[x] = "B";
                    }
                    else if(students[x] == "B"){
                        students[x] = "R";
                    }
                    else if(students[x] == "R"){
                        students[x] = "A";
                    }
                }
                // left
                // A   A R B L
                if(commands[i] == "L"){
                    if(students[x] == "A"){
                        students[x] = "R";
                    }
                    else if(students[x] == "R"){
                        students[x] = "B";
                    }
                    else if(students[x] == "B"){
                        students[x] = "L";
                    }
                    else if(students[x] == "L"){
                        students[x] = "A";
                    }
                }
            }

            if(x != 1){
                // right
                // A   R B L A
                if(commands[i] == "R"){
                    if(students[x] == "A"){
                        students[x] = "R";
                    }
                    else if(students[x] == "R"){
                        students[x] = "B";
                    }
                    else if(students[x] == "B"){
                        students[x] = "L";
                    }
                    else if(students[x] == "L"){
                        students[x] = "A";
                    }
                }
                // left
                // A   L B R A
                if(commands[i] == "L"){
                    if(students[x] == "A"){
                        students[x] = "L";
                    }
                    else if(students[x] == "L"){
                        students[x] = "B";
                    }
                    else if(students[x] == "B"){
                        students[x] = "R";
                    }
                    else if(students[x] == "R"){
                        students[x] = "A";
                    }
                }
            }
            // console.log(x, students[x], commands[i], "after", students);
        }
        count ++;
        if(students[0] == "A" && students[1] == "A" && students[2] == "A" && students[3] == "A"){
            console.log(count);
            return count;
        }
    }
}

solution("RLR")
// solution("LLARL")
// solution("LLLLL")
