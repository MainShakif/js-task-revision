// Example 1: Object এর ক্ষেত্রে (সঠিক ব্যবহার)

let person = {
  name: "Shakif",
  age: 22,
  city: "Dhaka",
};

for (let key in person) {
  console.log(key); // key দেখাবে
  console.log(person[key]); // value দেখাবে
}

//--------------------------------------------------

/* 
🔸//!Example 2: Array তে for...in (কেন ভালো না)
*/
let fruits = ["apple", "banana", "mango"];

for (let index in fruits) {
  console.log(index);
}

/* 
দেখতে ঠিক মনে হচ্ছে, কিন্তু সমস্যা আছে।
কারণ for...in index কে string হিসেবে নেয়. 
 */
