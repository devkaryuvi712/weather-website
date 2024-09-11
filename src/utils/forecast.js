const request = require('postman-request')

const forecast= (latitude,longitude,callback) =>{
     const url = 'http://api.weatherstack.com/current?access_key=c633a4fe97e0f94778ef7cc2d4df3871&query=' +latitude   + ',' +longitude + '&units=f'

     request({url , json : true}, (error,response) => {
        if(error){ 
            return callback('Unable to load information ',undefined)
        }
        if(response.body.error){
            return callback('Unable to find location .Please try again.',undefined)
        } 
           callback(undefined,{
            weather_descriptions : response.body.current.weather_descriptions[0],
            temperature : response.body.current.temperature,
            feelsLike : response.body.current.feelslike
           })
    })
}

module.exports = forecast
