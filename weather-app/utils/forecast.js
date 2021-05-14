const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/bd8adb13febf1f6e108c6d8d155ca373/' + latitude + ',' + longitude
    //const url = 'http://api.weatherstack.com/current?access_key=bd8adb13febf1f6e108c6d8d155ca373&query=' + latitude + ',' + longitude + '&units=f'
    
    request({ url, json: true }, (error, { body }) => {
        console.log('Forecast response: ', body)

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast