/*
 ?1. Declare an array
     Declare an array with 5 elements containing fruits
     ?console log the 3rd index element.

     change the value of the 2nd index element to jambura
     ?console log the final array
 */

/*
----------------------------------------------------------
                        Solution 
----------------------------------------------------------
*/

const fruits = ["apple", "banana", "orange", "mango", "grape"];
console.log(fruits);
const fourthElement = fruits[3];
console.log(fourthElement);

fruits[2] = "Jaambura";
let thirdElement = fruits[2];

console.log(thirdElement);

console.log(fruits);
