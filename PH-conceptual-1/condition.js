/* Problem 1. 
    ?Delivery Charge: Order amount যদি amount ≥ 1000 হয় → “Free Delivery”, 
    না হলে → “Delivery Charge = 80”
*/
let orderAmount = 1900;

if (orderAmount >= 1000) {
  console.log("Delivery charge is free");
} else {
  console.log("Delivery charge is not free. You need to pay extra 80 TK.");
}
