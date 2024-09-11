
const request = require('postman-request')

const geocode = (address,callback) => {
    const url = 'https://api.maptiler.com/geocoding/' + encodeURIComponent(address) + '.json?key=vFBa7PDFmbxj68RffmFc'
    
    request({ url: url, json: true }, (error, response) => {
        //url is not working
        //callback('Unable to connect to location services!',undefined)   
        if(error) {
            return callback('Unable to connect to location services!',undefined)   
        }
         if(response.body.features.length===0 ){
             return callback('Unable to find location .Please try another location!',undefined)   
        }
        callback(undefined,{
            latitude : response.body.features[0].center[1],
            longitude : response.body.features[0].center[0],
            location : response.body.features[0].place_name
        })
    })
       
} 

module.exports =geocode

