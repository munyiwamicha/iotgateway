const express = require('express');

//Express, is a back end web application framework for building RESTful APIs with Node.js

const iothttpgateway = require('./controller/mobile');

//Fixed Variable that pulls the mobile.js file that manages the consumption and of the HTTP Requests 

const app =  express();

const gatewayPort = process.env.PORT || 8759;

require('dotenv').config();

const helmet = require('helmet');

/**
Helmet. js is an open source JavaScript library that helps you secure your Node.js application by 
setting several HTTP headers. It acts as a middleware for Express and similar technologies, 
automatically adding or removing HTTP headers to comply with web security standards
**/

app.use(helmet());

//Gateway App Post
app.post('/', iothttpgateway);

app.listen(gatewayPort, () => console.log(`Gateway Application to Thingsboard gateway running on port ${gatewayPort}!`));