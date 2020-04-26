## Weathela - Weather PWA

#### Description

[Weathela](https://www.weathela.com) is a Weather Web Application which is named based on a combination of my profile name, Fadela and the word Weather.


###### Weathela is only available on mobile devices and it may not work properly on Desktop size.

It is written with React.Js on Front-End side (using [create-react-app]) and ExpressJs and Node on Back-End side.


## Installation and Setup Instructions


###### You need to add 4 environment varibales in order to run this application (Needed in Backend Side):
  - WEATHER_URL: Which is the URL of a weather web service
  - WEATHER_KEY: Which is the secret key of weather web service
  - MAP_URL: Which is the URL of a map web service 
  - MAP_KEY: Which is the secret key of map web service

#### How to run  
With `node` and `npm` installed, run the following commands in order:  

Installing Dependencies:

`npm install`  

To Run both Client and Server in Development mode:  

`npm run start:dev`  

To Visit the running App:

`localhost:3000`  

To Start the Server only:

`npm start`  

To Build the Client only:

`npm run build`


## Deployment

Please note that you should *first build the Client application* and *then Run The Server Only* in your server
