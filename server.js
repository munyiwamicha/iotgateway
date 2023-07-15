const express = require('express');

const iothttpgateway = require('./controller/mobile');

//Fixed Variable that pulls t

const app =  express();

const gatewayPort = process.env.PORT || 8081;

require('dotenv').config();

const helmet = require('helmet');

app.use(helmet());

//Gateway App Post
app.post('/', iothttpgateway);

app.listen(gatewayPort, () => console.log(`Gateway Application to Thingsboard gateway running on port ${gatewayPort}!`));