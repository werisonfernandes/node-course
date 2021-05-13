const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=bd8adb13febf1f6e108c6d8d155ca373&query=42.3605,-71.0596&units=f'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
})