const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=bd8adb13febf1f6e108c6d8d155ca373&query=42.3605,-71.0596'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
});