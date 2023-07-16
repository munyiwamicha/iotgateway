## Services Used

### Device
Install the mobile app below to obtain location data and send it to your machine.

Android

https://play.google.com/store/apps/details?id=org.traccar.client&pli=1

IOS

https://itunes.apple.com/us/app/traccar-client/id843156974


Within the APP, under server URL, place the IP address and port or the Domain name of your machine.

The Port Number is the same as the IOT gateway app e.g.:

192.168.1.23:8759


Open your CMD Terminal  and type the command below to find the IP address of your machine

```bash
ipconfig
```


### Gateway

Ensure the Gateway is installed and running on your machine.

Find the link below with intstructions

https://github.com/munyiwamicha/iotgateway


### IOT Platform

The URL points to a Thingsboard Instance thingsboard.io or your personal 
It should give you access to the DB and Thingsboard Instance

You may signup for a free account on demo.thingsboard.io using your google email

Import the dashboard found in smart_bus_tracking.json to your thingsboard Instance and ensure the devices align with the available entities