var express = require('express');
var router = express.Router();


router.post('/aboveBelow', function(req, res, next) {
  const body = req.body  
  
  let comp = req.body.comparator;
  let above = 0;
  let below = 0;

  //Spec doesn't say what to do if equal, intentionally ignoring case and asking about it
  body.numbers.forEach((num) => {
    if(num > comp){
      above++
    } else if (num < comp){
      below++
    }
  }) 
  res.status(200).json({ above: above, below: below })
});


router.post('/stringRotation', function(req, res, next) {
  const body = req.body  

  let initString = body.stringToRot;
  let modRotAount  = initString.length - (body.rotateAmount % initString.length)

  let stringRes = initString.slice(modRotAount) + initString.slice(0, modRotAount)  

  res.status(200).json({ stringRes: stringRes })
});


module.exports = router;
