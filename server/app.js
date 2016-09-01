var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var heros = require('./routes/heros');
// Serve back static files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());

//ROUTING FILES
app.use('/heros', heros);

var databaseUri = 'mongodb://localhost:27017/omicron';
mongoose.connect(databaseUri);
mongoose.connection.on('connected', function(){
  console.log("Mongoose connected to", databaseUri);
});

// Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
})




app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
