/*
    ?Task-2
        Write a program to calculate the average marks  Mathematics, Biology, Chemistry, Physics, and Bangla of a student. 
*/

let mathematics = 87.5;
let biology = 65.25;
let chemistry = 77.85;
let physics = 99.5;
let bangla = 70;

let totalMarks = mathematics + biology + chemistry + physics + bangla;
console.log("Total :", totalMarks);

let avg = totalMarks / 5;
console.log("Average mark is:", avg.toFixed(2));
