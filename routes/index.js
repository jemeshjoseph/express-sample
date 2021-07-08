var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const values = ['John', 'Jane', 'Jems', 'Ash'];

  res.render('index', { title: 'Express', values });
});

module.exports = router;
