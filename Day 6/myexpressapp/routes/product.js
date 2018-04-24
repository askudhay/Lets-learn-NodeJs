var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('product', { title: 'Product', pName: 'ChatBot' });
});

router.get('/echome', function (req, res, next) {
    res.render('product', { title: 'Product', pName: 'Echo Me' });
});

router.get('/echome/v1', function (req, res, next) {
    res.render('product', { title: 'Product', pName: 'Echo Me Version 1' });
});

module.exports = router;
