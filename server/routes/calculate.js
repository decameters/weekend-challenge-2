var express = require('express');
var router = express.Router();
var calculationArray = require('../modules/calculationArray');


router.post ('/equation', function (req, res){
    calculationArray.push({ x: req.body.x, y: req.body.y, type: req.body.type});
    res.sendStatus(200);
    })
    

router.get ('/result', function (req, res){
    // console.log('router.get working');
    for (var i = 0; i < calculationArray.length; i++) {
        return res.send(calculationArray[i]);
    }
    
})

router.post ('/clear', function (req, res){
    calculationArray = [];
    res.sendStatus(200);
})

module.exports = router; //both a function and an object
