var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
heros.find({}, function (err, heros){
  if(err){
    res.sendStatus(500);
    return;
  }
  console.log(heros);
  res.send(heros);
});
});



router.post('/', function (req, res) {
console.log('POST', req.body);
var book = Book(req.body);
book.save(function(err){
  if(err){
    res.sendStatus(500);
    return;
  }
  res.sendStatus(201); // created
});
});


module.exports = router;
