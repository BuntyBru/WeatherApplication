const request = require('request');
const geocode  = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiZGl2eWFuc2h1bG9rdHJhIiwiYSI6ImNrMnVwdnZvbjE0NmIzbnRqbTMyd2p5anQifQ.YTnW9LIpAddbadEToxeh-g';
    request({url:url, json:true},(error,response)=>{
        if(error) {
             callback('Unable to connect', undefined);
            }
        else if(response.body.features.length === 0) {
            callback('Unable to find location, try another search',undefined)
        }
        else
        {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}
const geocode2 =(address)=>{
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiZGl2eWFuc2h1bG9rdHJhIiwiYSI6ImNrMnVwdnZvbjE0NmIzbnRqbTMyd2p5anQifQ.YTnW9LIpAddbadEToxeh-g';
return new Promise((res,rej)=>{
    request({url:url, json:true},(error,response)=>{
        if(error) {
             callback('Unable to connect', undefined);
            }
        else if(response.body.features.length === 0) {
            callback('Unable to find location, try another search',undefined)
        }
        else
        {
            let obj =  {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            }
            res(obj);
        }
    })
   
})}


module.exports = geocode2;