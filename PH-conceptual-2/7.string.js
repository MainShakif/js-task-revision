let str = " PROGRAMMING HERO";
let str2 = "Programming hero ";

// *size check*********
// console.log(str.length);

// --------------------------------------------------------

// *access specific character by index*********
// console.log(str[0]);

// --------------------------------------------------------

// *compare two string*********

// convert to capital or small
// console.log(str.toLowerCase() === str2.toLowerCase());
// console.log(str.toUpperCase() === str2.toUpperCase());
// console.log(str2.toLowerCase());

// --------------------------------------------------------

// *trim : to remove space from beginning and end*******
let strSmall = str.toLowerCase();
let str2Small = str2.toLowerCase();
// console.log(str.trim());
// console.log(strSmall.trim() === str2Small.trim());

// --------------------------------------------------------

// *slice :  to slice a string**********
// ******slice(start index, end before)********
let bd = "Bangladesh";
// console.log(bd.slice(2, 6)); // second index থেকে শুরু হয়ে fifth index পর্যন্ত যাবে

// --------------------------------------------------------

// *includes: to check specific portion*********
// console.log(bd.includes("love Bangladesh"));

// --------------------------------------------------------

// *concat*******
// let newStr = str.concat(str2);
// let newStr = str + str2;
// console.log(newStr);

// -----------------------------------------------------------------

// *replace: to replace specific portion*******
/*
    *Basic Syntax
        string.replace(searchValue, newValue)
        searchValue → যেটা খুঁজবে
        newValue → যেটা দিয়ে replace করবে
*/

/*
    *JavaScript এর replace() মেথড মূলত string এর ভেতরের কোনো অংশ পরিবর্তন (replace) করার জন্য ব্যবহার হয়।

    *এটা একটা নতুন string রিটার্ন করে।
    *মূল string পরিবর্তন হয় না (because string is immutable).
 */

let bang = "I love bangladesh";
// console.log(bd.replace("I", "We"));
// console.log(bd.replace("love", "love very much"));

//------------------------------------------------------------------

/*
----------------------------//*Split()***********************
 *JavaScript এ split() হলো String method।
    *এটা একটি string কে ভেঙে array বানায়।
 */

// 1️⃣ সবচেয়ে সহজ উদাহরণ
// let text = "I love JavaScript";
// let result = text.split(" ");
//--------------------------------------
// let text = "I,love,JavaScript";
// let result = text.split(",");
//--------------------------------------
let text = "I love JavaScript";
let result = text.split(""); //প্রতিটি অক্ষর আলাদা করা
console.log(result);

// Output:
// ["I", "love", "JavaScript"]

// 👉 " " (space) দেখে string ভেঙে দিয়েছে।

/*
 *মনে রাখার শর্ট নিয়ম
split() = String → Array
আর
যেটা দিবে separator, সেটা দেখে string কাটবে 
 */

/--------