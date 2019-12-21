const geocode = require('./geocode');
const forecast = require('./forecast');

console.log(process.argv)
let city = process.argv[2];

let ans = geocode(city)
ans.then((data)=>{
    console.log("top res",data.latitude);
    forecast(data.latitude,data.longitude).then((res)=>{
        console.log(res);
    });
    
})
