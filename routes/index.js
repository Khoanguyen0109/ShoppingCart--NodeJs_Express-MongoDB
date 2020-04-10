var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  // this mean: find all products then call back excute render 
  Product.find(function(err,docs){ 
  res.render('shop/index', { title: 'Express' ,products : docs});
  });
});

module.exports = router;
