var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');

var app = express();
var server = http.createServer(app);

var grocerys = [];

app.set('view engine', 'ejs' );

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Bodyparser for handling form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.render('index.ejs', {grocerys: grocerys});
});

app.post('/', function(req, res) {
  grocerys.push(req.body.grocery);
  res.redirect('/');
});

// Clear content .my-grocery-list
app.get('/empty', function(req, res) {
  grocerys = [];
  res.render('index', {grocerys: grocerys});
});

server.listen(3000, function() {
	console.log("Server started on port 3000...");
});
