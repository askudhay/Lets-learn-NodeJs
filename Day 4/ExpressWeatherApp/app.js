const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const geocode = require('./geocode');
const weather = require('./weather');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home'
    })
});

app.get('/about.html', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About'
    })
});

app.post('/weather.html', (req, res) => {
    console.log(req.body);
    var addJson = req.body;
    setTimeout(function() {
        geocode.geocodeAddress(addJson.address, (errorMessage, results) => {
            if (errorMessage) {
                res.render('error.hbs', errorMessage);
            } else {
                console.log(results.address);
                weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
                    if (errorMessage) {
                        res.render('error.hbs', errorMessage);
                    } else {
                        res.render('weather.hbs', weatherResults)
                        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
                    }
                });
            }
        });
    }, 1000);
});

app.listen(3000, () => {
    console.log('Server started at port # 3000');
})