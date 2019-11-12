const request = require('request');

const forecast =(latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/d8931387dcb589c3da3a0bc9afff23b1/'+latitude+','+longitude;
    request({url:url, json:true},(error,response)=>{
        if(error)
        {
            callback('Unable to connect with the service',undefined);
        }
        else if(response.body.error)
        {
            callback('Unable to find location', undefined)
        }
        else
        {
            callback(undefined,response.body.daily.data[0].summary);
        }

    })


}


module.exports = forecast;