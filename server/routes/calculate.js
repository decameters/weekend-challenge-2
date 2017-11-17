var express = require('express');
var router = express.Router();

router.post ('/equation', function (req, res){
    // if ($('.mathButton').id() == 'additionButton'){
    //     console.log('add!');
    res.sendStatus(200);
})
    // quotesData.push({quoteText: req.body.equation_to_add});
    

router.get ('/result', function (req, res){
    console.log('router.get working');
    
})

module.exports = router; //both a function and an object
