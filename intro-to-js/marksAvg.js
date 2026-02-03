/*
 ?Task-2
Write a program to calculate the average marks of       Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

?Output:
Print the result in 2 decimal places.
 */

// TODO Solution:

let Mathematics = 75.25;
let Biology = 65;
let Chemistry = 80;
let Physics = 35.45;
let Bangla = 99.5;

let totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;
console.log("Total marks is:", totalMarks);

let average = totalMarks / 5;
console.log("Average marks is = ", average.toFixed(2));
