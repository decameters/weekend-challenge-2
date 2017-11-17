var express = require('express'); // whatever express has in module.exports
var bodyParser = require('body-parser');
var app = express(); // an instance of an express web app
var port = 5000;
var calculate = require('./routes/calculate')
// var subtract = require('./routes/subtract')
// var multiply = require('./routes/multipy')
// var divide = require('./routes/divide')

console.log('starting up the server');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/calculate', calculate);
// app.use('/calculate', calculate) > then a calculate route that goes to add / subtract / etc modules

// app.get('/really-great', reallyGreat);

// app.use('/dinosaur', function(req, res){
//     res.send('rawr!');
// })

app.listen(port, function() {
    console.log('listening on port', port);
})