var express = require('express'); // whatever express has in module.exports
var bodyParser = require('body-parser');
var app = express(); // an instance of an express web app
var port = 5000;
var calculate = require('./routes/calculate')

console.log('starting up the server');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/calculate', calculate);

app.listen(port, function() {
    console.log('listening on port', port);
})