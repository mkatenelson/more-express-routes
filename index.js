var express = require("express");
var app = express();

///////////////

// PICK A COLOR
app.get("/color/:choice", function(req, res){
  var choice = req.params.choice;
  res.send("Your color is: " + choice);
});
///////////////

// WHICH TACO
var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];
               
var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];
//////////////

// NUMBER GUESSING GAME

//////////////

// CALCULATOR APP
