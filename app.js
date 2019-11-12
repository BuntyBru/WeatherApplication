const geocode = require('./geocode');
const forecast = require('./forecast');


console.log(process.argv)
let city = process.argv[2];

geocode(city,(error,data)=>{
    if (error)
    {
        return console.log(error);
    }
    forecast(data.latitude, data.longitude,(error,forecastData)=>{
        if(error)
        {
            return console.log(error);
        }
        console.log(data.location);
        console.log(forecastData);
    })    
})

