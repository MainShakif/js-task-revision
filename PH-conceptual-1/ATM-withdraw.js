/*
     Problem 2. 
        ?ATM Withdraw: যদি withdraw amount ≤ balance amount হয়
           এবং যদি withdraw amount % 500 == 0 হয় → “Withdraw Successful”
         না হলে → “Write amounts that are multiples of 500.”
             না হলে → “Insufficient Balance”
*/
let balanceAmount = 3000;
let withdrawAmount = 4000;

if (withdrawAmount <= balanceAmount) {
  // nested if-else
  if (withdrawAmount % 500 == 0) {
    console.log("Withdraw Successful");
  } else {
    console.log("Write amounts that are multiples of 500.");
  }
} else {
  console.log("Insufficient Balance.....");
}

/*
    #QUERY:1
            ATM Withdraw: যদি withdraw amount ≤ balance amount হয়
                 যদি withdraw amount % 500 == 0 হয় → “Withdraw Successful”
                 না হলে → “Write amounts that are multiples of 500.”
                 না হলে → “Insufficient Balance”

এই প্রব্লেমটা NesTed If-else দিয়ে করানো হয়েছে। কিন্তু আমি যদি হঠাত বুঝতে না পারি যে NesTed If-else দিয়ে করা দরকার, তাহলে && লজিক ব্যাবহার করে কিভাবে কোড লিখতে পারি??
*/

// if (withdrawAmount <= balanceAmount && withdrawAmount % 500 == 0) {
//   console.log("Withdraw Successful");
// }
// else if{

// }
