// **Express Routing** -- Exercises


// ### Pick A Color -- [solution](solutions.md)
// Create a route that responds with "You picked: blue" 
// or "You picked: green" depending on the path. For instance, 
// if I visit: `localhost:3000/pick-a-color/orange` 
// I should see the the color I chose (randomly) named in the 
// response.

var port = 3000;
app.listen(port, function(){
  console.log("Server Running at localhost:3000/");
});
///////////////


// ### Which Taco (Indexing a Collection) -- [solution](solutions.md)

// * Write a route with to allow you to access a `taco` 
// by it's index in the array, such that one could go to the 
// route: "/taco/2" and get back a server response with the 
// text "Super Taco".

app.get("/taco/:index", function(req, res) {
    var index = req.params.index;
    var choice = tacos[index];
    res.send(choice);
});

// * Write a route with to allow you to access a `burger` by 
// it's index in the array, similar to above.

app.get("/burger/:index", function(req, res) {
    var index = req.params.index;
    var choice = burgers[index];
    res.send(choice);
});
////////////////////////

// ### The Number Guessing Game -- [solutions](solutions.md)

// * Build a simple number guessing game using query parameters.
// * When the user goes to `/pickanumber?number=10` the server 
// should respond with either "Too High", "Too Low" or 
// "Nailed it!"

var correct_number = 7;

app.get("/pick-a-number/:num", function(req, res){
  var num = req.params.num;
  if (num > correct_number){
    res.send("Too High!");
  } 
  else if(num < correct_number) {
    res.send("Too Low");
  } 
  else if(num === correct_number) {
    res.send("Nailed it!");
  }
});
//////////////////////////

// ### Building Cities

// * Write a route that serves a template which shows all of the cities.
// * Write a route that allows you to add a new city to the list of cities. **Hint: use a form.**
// * Write a route that allows you to delete a city from your list. What will you need to do this? **Hint: you'll need to handle the specific cities in both the HTML and in the server-side JS code.**

// ## Stretch Exercises
// ### Calculator app (Using Query Parameters) -- [solutions](solutions.md)

// * Create a `/multiply` route that uses query params `x` and `y` to multiple two numbers and send the result back: `"10 is the result"`.
// * Create an `/add` route, similar to above.
