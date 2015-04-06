var piblaster = require('pi-blaster.js');
var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.3.3');

var lastCommand = "";

client.subscribe('touch');

client.on('message', function (topic, message) {
  // message is Buffer
  var currentCommand = message.toString();
  // console.log(currentCommand + " " + lastCommand);
  if (currentCommand != lastCommand) {
    lastCommand = currentCommand;
    console.log("New: " + lastCommand);

    if (lastCommand === "LEFT") {
      piblaster.setPwm(17, .06);
    } else
    if (lastCommand === "RIGHT") {
      piblaster.setPwm(17, .24);
    } else { // return to center by default
      piblaster.setPwm(17, .15);
    }


  }
});
