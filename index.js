var express = require('express');
var app = express();
var path =require('path');

var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// --- routes --- //

app.get("/",function(req,res){
	// An object to hold the data that will get fed into the template.
	// Note! the property names here must match the variable names in handlebars
	var myData = {
		 name: 'Greg',
		 city: 'Leesburg',
		state: 'Virginia',
		
	};
	// Render the template using this data
	res.render("home", myData);
});


app.get("/3d",function(req,res){

	res.render("3d");
});


app.get("/game",function(req,res){

	res.render("game");
});


// 404 Not found catch-all handler 

app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 server error handler 

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});



// Start the server. Listen for traffic on port 3000
app.listen(3000, function () {
    // Print out a message to the console
    console.log('Listening on port 3000!');
});