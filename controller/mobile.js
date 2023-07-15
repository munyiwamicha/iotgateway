var express = require('express');
var router = express.Router();
/**
Router is a method obtained from express js library used to receive location requests from mobile phone
and forward them to Thingsboard using HTTP 
**/

const axios = require('axios');

/**
Axios is a JS Library used to make HTTP Posts and Requests. Used to post the body v
**/


const validator = require('validator');

// Validator is used to handle input validation of location data from the phone and ensure it is the correct data being received

require('dotenv').config();

// dotenv config referrences to the file that contains environment variables

const platformUrl = process.env.URL;

/**
platformUrl takes the URL or IP of an IOT Platform from the environment file (.env).
**/

if(!platformUrl){
    throw new Error('Please add the URL (platformUrl) of the in the .env file')
}

//If condition that creates an error if the URL in the .env file is empty

function mainUrl(id){
    if(id){ return platformUrl+"/api/v1/"+id+"/telemetry";}
    else { throw new Error('Invalid Request');}
}

router.post('/', function (req, res) {

    try {
  
      var url = mainUrl(validator.escape(req.query.id));
      var timestamp = validator.toInt(req.query.timestamp);
      var date = new Date(timestamp*1000).toString();
  
      var body = {
        timestamp: timestamp,
        date: date,
        longitude: validator.toFloat(req.query.lon),
        latitude: validator.toFloat(req.query.lat),
        speed: validator.toFloat(req.query.speed),
        bearing: validator.toFloat(req.query.bearing),
        altitude: validator.toFloat(req.query.altitude),
        accuracy: validator.toFloat(req.query.accuracy),
        battery: validator.toFloat(req.query.batt)
      };
  
    } catch (error) {
      console.error('Validation error', error);
      res.status(400).send('BAD REQUEST');
    }
  
  
    axios.post(url, body)
    .then(function (response) {
      console.log('HTTP POST: ' + url);
      res.status(200).send('OK');
    })
    .catch(function (error) {
      console.log('HTTP POST ERROR', { error: true, url: url, body: body });
      res.status(error.response.status).send('ERROR');
    });
  
  })
  
  module.exports = router;