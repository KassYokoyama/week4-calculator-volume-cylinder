//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// Send the HTML file for the cone height calculator
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/VolCalculator.html");
});

// Receive data and compute the height of the cone
app.post("/", function(req, res){
  let radius = Number(req.body.radius);
  let volume = Number(req.body.volume);

  // Calculate the height of the cone
  let height = (3 * volume) / (Math.PI * Math.pow(radius, 2));
  
  // Send the calculated height back to the client
  res.send(`The height of the cone is ${height.toFixed(2)} units.`);
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
