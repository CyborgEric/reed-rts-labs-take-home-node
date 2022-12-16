var express = require('express');
const { handleAboveBelow, stringRotation } = require('./handlers');
var router = express.Router();


router.post('/aboveBelow', function (req, res, next) {
    let numbers = req.body.numbers;
    let comp = req.body.comparator;
    let result = handleAboveBelow(numbers, comp);
    res.status(200).json(result)
});


router.post('/stringRotation', function (req, res, next) {
    let stringRes = stringRotation(req.body.stringToRot, req.body.rotateAmount);
    res.status(200).json(stringRes)
});


module.exports = router;
