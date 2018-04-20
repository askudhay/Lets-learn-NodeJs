const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/',(req, res) => {
    res.render('home.hbs',{
        pageTitle: 'Home'       
    })
});

app.get('/about.html',(req, res) => {
    res.render('about.hbs',{
        pageTitle: 'About'       
    })
});

app.get('/weather.html',(req, res) => {
    res.render('weather.hbs',{
        pageTitle: 'Weather'       
    })
});

app.listen(3000, () => {
    console.log('Server started at port # 3000');
})