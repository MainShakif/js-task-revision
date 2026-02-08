/*********************************
1...
Write a loop 1 to 200. Use break to exit the loop once you find 100.
***************************************/

// let i = 1;
// while (n <= 200) {
//   if (n == 100) {
//     break;
//   }
//   console.log(n);
//   n++;
// }

/* //?problem 2
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// let n = 1;
// let sum = 0;
// while (true) {
//   sum = sum + n;
//   console.log(n);

//   if (sum >= 100) {
//     break;
//   }
//   n++;
// }

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let p = 1;
while (p <= 100) {
  console.log(p);
  if (p === 4) {
    console.log("4 is the first square number");
    break;
  }
  p++;
}
