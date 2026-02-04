/*
    ?2. Add or remove elements
            Declare an array of 3 tourist destinations
            ?Add a new tourist destination to your tourist array
            Add two more to your array
            ?Remove the last tourist destination you have added
            display the final array as output
*/

const touristDestinations = [
  "Cox's Bazar",
  "Saazek Vally",
  "Saint Martin's Island",
];

touristDestinations.push("Rangamati");
touristDestinations.push("bandarban", "Sada-Pathar");

touristDestinations.pop();

console.log(touristDestinations);
