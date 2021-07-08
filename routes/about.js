var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // title to set the page title in browser tab
  res.render('about', { value: 'This is an about page.', title: 'About' });
});

module.exports = router;
