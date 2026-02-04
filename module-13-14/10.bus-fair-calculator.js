/*
        ?Ticket fare Calculator
            - Children (age < 10): free
            ?- Students get a 50% discount
            - Senior citizens (age >= 60) gets a 15% Discount
            ?- Otherwise Regular ticket fare 800 tk
*/

let busFair = 800;
console.log("Normal Bus fair is:", busFair);
let age = 15;
const isStudent = true;

// প্রথমে Children কিনা  চেক করার লজিক দিতে হবে
if (age < 10) {
  console.log("Get free ticket");
}
/*
            ২য় পজিশনে Senior citizen কিনা চেক করতে হবে কারন আগে 
            Student কিনা তা check করলে  যদি বয়স ৬০ বা তার বেশি দেওয়া 
            থাকে আর isStudent = true হয় তাহলে  student ব্লকটা আগে কাজ 
            করবে তাই আগেই ২য় পজিশনে Senior citizen কিনা তা চেক করে 
            নিতে হবে কারন স্টুডেন্ট এর বয়স ৬০ বা তার বেশি হয়না কখনো। )
*/
// !first else-if (check Senior citizen)
else if (age >= 60) {
  //discount price : senior
  let discount = (busFair * 15) / 100;

  console.log("He/She is a Senior Citizen");
  console.log("So the discount price for Senior Citizens is:", discount);
  let finalPrice = busFair - discount;
  console.log("Final Price after discount is:", finalPrice);
}
// !Second else-if
else if (isStudent) {
  //discount price
  let discount = (busFair * 50) / 100;
  console.log("He/She is a Student");
  console.log("Discount price for student is:", discount);
  let finalPrice = busFair - discount;
  console.log("Final Price after discount is:", finalPrice);
} else {
  console.log("Regular Ticket Price 800 tk");
}
