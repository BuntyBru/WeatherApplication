const request = require('request');
const url = 'https://api.darksky.net/forecast/d8931387dcb589c3da3a0bc9afff23b1/37.8267,-122.4233';

request({url: url, json:true}, (error, response)=>{
    console.log(response.body.currently);
})
