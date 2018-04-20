const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {
    res.render('home.hbs',{
        pageTitle: 'Home',
        msg: 'Welcome to Express learning'
    })
});

app.get('/about',(req, res) => {
    res.render('about.hbs',{
        pageTitle: 'About',
        msg: 'This is a dummy about page created by Express using HBS'
    })
});

app.get('/product',(req, res) => {
    res.render('product.hbs',{
        pageTitle: 'Product',
        msg: 'This is again a simple Product page'
    })
});

app.listen(3000, () => {
    console.log('Server started at port # 3000');
})