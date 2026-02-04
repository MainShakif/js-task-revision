/*-------------------------------------------------------------
গুরুত্বপূর্ণ কথা
    //todo : concat() original array পরিবর্তন করে না।
নতুন একটা array বানায়।
 --------------------------------------------------------------*/

/*
    ?Combining Arrays
            Instructions:

            ?Create two arrays of your choice.
            Use the concat method to combine the two arrays into a new array.
            ?Print both the original arrays and the combined array using console.log().
 */

let fruits = ["mango", "dango", "jango", "hengo", "lango"];
let num = [1, 3, 54, 67, 91, 96];

console.log("Array1:", fruits);
console.log("Array2:", num);

//--------------------------------------------------------------
//                        !Use concat( method)
//--------------------------------------------------------------
// console.log(fruits.concat(num));
let combined = fruits.concat(num);
console.log("Combined array:", combined);
