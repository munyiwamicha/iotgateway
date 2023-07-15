## IOT HTTP Gateway
 Gateway that Consumes Location data from a mobile phone and forwards it via HTTP Post to an IOT platform. 
### Prerequisites
    1. NodeJS
    2. Docker (Optional)

Follow the installation Process of Node on your (Windows) machine

https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows

Download link for NodeJS
https://nodejs.org/en/download


### Clone the repository

```bash
git clone https://github.com/munyiwamicha/iotgateway.git
```
### Installation

```bash
npm install
```
### Runnig the Node app on Port 8759
```bash
node server.js
```

#### Alternative Implementation Method 
You may use the tutorial below to run your application.
https://learn.microsoft.com/en-us/azure/developer/javascript/how-to/with-visual-studio-code/install-run-debug-nodejs

Under step Number 4 of the Above tutorial, replace Repository URL with the repo below 
https://github.com/munyiwamicha/iotgateway.git

After cloning the repo from within you may run the app from within VS Code by using the F5 Key

## Forwarding to an IoT Platform.
Within the .env file you may edit the values for URL as the IOT Platform URL
For this demo, we will be using Thingsboard, an Open-Source IOT Platform as an endpoint.
The Database Used is 

Installation steps can be found below:

https://thingsboard.io/docs/user-guide/install/installation-options/

