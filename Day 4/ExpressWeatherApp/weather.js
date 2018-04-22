const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.forecast.io/forecast/70fccf4af580541ed63e5de127ba5a46/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    console.log(response.statusCode);
    console.log(error);
    if (response.statusCode === 403) {
      callback(JSON.parse('{"error": "Unable to connect to Forecast.io server."}'), null);
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.', null);
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
