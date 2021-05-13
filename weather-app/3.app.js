const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=bd8adb13febf1f6e108c6d8d155ca373&query=42.3605,-71.0596&units=f'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
})

// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoid2VyaXNvbi1mYXciLCJhIjoiY2tvbXplM2p0MDlyNzJub2k5eWZtN292aiJ9.hw-G6rDlArNcVlTgbj3jqQ&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
})