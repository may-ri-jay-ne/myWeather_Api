const axios = require('axios');
const SECRET_KEY = process.env.openweather_API
exports.readWeather = async(req, res)=>{
    try {
        const {cityName} = req.query
         //check if city is valid

         if(cityName === null){
            res.status(404).json({
        message: "Invalid city"
         })

    } ;

    //check if API key is entered
    if (!SECRET_KEY){
        return res.status(404).json({
            message: "Invalid API key "
        })
    };

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ SECRET_KEY}`);

    //create an instance 
    const {name, main, weather, wind, humidity, sys} = response.data
    console.log(response)

    const weatherData = {
        city: `${name}, ${sys.country}`,
        temperature: main.temp,
        condition: weather[0].description,
        wind_speed: wind.speed,
        humidity: main.humidity
    }

    res.status(200).json({
        data:{
        message: `The weather update for: ${cityName}`,
        temperature: main.temp,
        condition: weather[0].description,
        wind_speed: wind.speed,
        humidity: main.humidity
        }
        
    })
}catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}