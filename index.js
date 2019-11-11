// Require express library
const express = require("express");
const app = express();

// You can use an in-memory array in place of a database
compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Tuesday yet?",
  "It's almost fun hours!",
  "The Force is strong with you",
  "Its dangerous to go alone, Take this!"
];

app.get("/", (req, res) => {
  //display a generic greeting and a randomly chosen compliment. Th    e background color of the app should be randomized as well
});

// Launch server
app.listen(3000, () => {
  console.log("app listening at http://localhost:3000/");
});
