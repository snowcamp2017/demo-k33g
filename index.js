const express = require("express");
const bodyParser = require("body-parser");
const Promise = require('promise');
const fetch = require('node-fetch');

const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.get('/hello/world', (req, res) => {
  res.send({
    message: "Hello 🌏!"
  })
});

//--- 1st update -------------------------------------
const Sensor = require('./Sensor').Sensor;

let sensor = new Sensor({
  id:`k33g-sensor`,
  minValue:-42,
  maxValue:42,
  delay:2000
});
sensor.start("generateData");

app.get('/sensors/k33g-sensor', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(sensor.getData());
});
//----------------------------------------------------


app.listen(port);
console.log(`🌍 Web Application is started - listening on ${port}`);
