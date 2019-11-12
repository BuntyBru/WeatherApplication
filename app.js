const geocode = require('./geocode');
const forecast = require('./forecast');

geocode('New York',(error,data)=>{
    console.log('Error',error);
    console.log('Data',data);
})

forecast(-75.7088, 44.1545,(error,data)=>{
    console.log('Error',error);
    console.log('Data',data);
})
