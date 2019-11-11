const request = require('request');
const url = 'https://api.darksky.net/forecast/d8931387dcb589c3da3a0bc9afff23b1/37.8267,-122.4233';
const mapURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGl2eWFuc2h1bG9rdHJhIiwiYSI6ImNrMnVwdnZvbjE0NmIzbnRqbTMyd2p5anQifQ.YTnW9LIpAddbadEToxeh-g';

request({url: url, json:true}, (error, response)=>{
  //  console.log(response.body.currently);
})


//Geocoding
//Address => Lat/Long =>Weather


request({url:mapURL, json:true},(error,response)=> {

    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(`Latitude ${latitude} , Longitude ${longitude}`);
})

