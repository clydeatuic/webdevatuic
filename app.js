//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
//express server listen
var server = app.listen(3001, function(){
  console.log('Server listening on port 3001');
});