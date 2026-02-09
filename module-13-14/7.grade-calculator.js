/*
    ?Grade Calculator

            Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

            A: 90-100
            B: 80-89
            C: 70-79
            D: 60-69
            E: 0-59
           

*/

/*
 * স্কোর (Score)	শর্ত (Condition)	ফলাফল (Output)

      ?৮০ বা তার বেশি	mark >= 80	go for a lunch.
      ৬০ থেকে ৭৯.৯৯...	mark >= 60 && mark < 80	good luck next time.
      ?৪০ থেকে ৫৯.৯৯...	mark >= 40 && mark < 60	keep your friend's message unseen.
      ৪০-এর নিচে	mark < 40	block your friend.

 */

let mark = 89.5;

if (mark > 100 || mark < 0) {
  console.log("Invalid Mark"); // ১০০ এর বেশি বা ০ এর কম হলে
}
// ?1st else if
else if (mark >= 90) {
  console.log("A");
} // ?2nd else if
else if (mark >= 80) {
  console.log("B"); // এখানে mark <= 89 চেক করার দরকার নেই, কারণ উপরের শর্ত মিথ্যা হলেই এখানে আসবে
}
// ?3rd else if
else if (mark >= 70) {
  console.log("C");
}
// ?4th else if
else if (mark >= 60) {
  console.log("D");
}
// ?5th else if
else if (mark >= 33) {
  console.log("E"); // 33 থেকে 59 এর জন্য
}
//
else {
  console.log("Failed"); // ৩৩ এর নিচে এবং ০ এর উপরে হলে ফেইল
}
