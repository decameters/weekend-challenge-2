var express = require('express');
var router = express.Router();
var calculationArray = require('../modules/calculationArray');

var mathResult = 0;
var mathOper;
var historyArray = [];
var mathHistory = {};

/* Ally made a global var called mathResult 
in router.post
var firstNum = parseInt(req.body.firstNum);
var secondNum = parseInt(req.body.secondNum);

parseInt vs Number
no decimal or decimal

mathResult = firstNum + secondNumb;
res.sendStatus(200);

*/

router.post ('/', function (req, res){
    var firstNumber = Number(req.body.firstNumber);
    var secondNumber = Number(req.body.secondNumber);

    switch(req.body.operator) {
        case 'add':
            console.log('add!');
            mathOper = '+';
            mathResult = firstNumber + secondNumber;
            break;
        case 'subtract':
            mathOper = '-';
            mathResult = firstNumber - secondNumber;
            break;
        case 'multiply':
            mathOper = '*';
            mathResult = firstNumber * secondNumber;
            break;
        case 'divide':
            mathOper = '÷';
            mathResult = firstNumber / secondNumber;
            break;
    }

    mathHistory = {
        first: firstNumber,
        second: secondNumber,
        oper: mathOper,
        result: mathResult
    }

    historyArray.push(mathHistory);
    res.sendStatus(200);
})

router.get ('/', function (req, res){
    // console.log('router.get working');
    res.send({result: mathResult, history: historyArray});
    })

module.exports = router; //both a function and an object
