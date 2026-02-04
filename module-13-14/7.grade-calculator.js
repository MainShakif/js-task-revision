/*
    ?Grade Calculator

            Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

            A: 90-100
            B: 80-89
            C: 70-79
            D: 60-69
            E: 0-59
            less than 59 : failed

*/

let mark = -Infinity;
if (mark >= 90 && mark <= 100) {
  console.log("A");
}
//first else if
else if (mark >= 80 && mark <= 89) {
  console.log("B");
}
// else if 2
else if (mark >= 70 && mark <= 79) {
  console.log("C");
}
// else if 3
else if (mark >= 60 && mark <= 69) {
  console.log("D");
}
// else if 4
else if (mark >= 0 && mark <= 59) {
  console.log("E");
}
// else
else {
  console.log("failed");
}
