/*
        ?Checking Array Membership with ‘includes’
                Instructions:

                ?Create an array of books containing different book.

                Use the includes method to check if the array contains a javascript book.

                Print a message to the console indicating whether the element is present in the array or not.
 */

const booksArray = [
  "The Alchemist",

  "Atomic Habits",

  "Clean Code",

  "Harry Potter and the Sorcerer's Stone",

  "The Pragmatic Programmer",

  "Java Script Book",
];

if (booksArray.includes("Java Script Book")) {
  console.log("Yes, the element is present in this array, so Here is the Book");
} else {
  console.log("No, Not found");
}
