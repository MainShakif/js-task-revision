let n = 1;
while (n <= 25) {
  if (n == 15) {
    n++; /**যখন i == 15
    তখন continue হবে , continue → লুপের নিচের অংশ skip করে।
    তাই  i এর মান আর বাড়ে না , তাই continue হবার আগেই একবার increment দেওয়া হয়েছে*/
    continue;
  }
  console.log(n);
  n++;
}
