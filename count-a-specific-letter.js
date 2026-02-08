// Count a specific letter
let string = "We love to travel and watch movie";

// how many times the t letter
let count = 0;
// i+=1 , i++
for (let i = 0; i < string.length; i++) {
  let letter = string[i];
  if (letter.toLowerCase() == " ") {
    // count = count + 1;
    // count += 1;
    count++;
  }
}

console.log(count);