var SubsignalController = require('./controllers/subsignal');

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.0.8')
client.on('connect', () => {
    client.subscribe('signal1')
})
client.on('message', (topic, message) => {
  handleSignal1(message)
})

function handleSignal1 (message) {
  context = message.toString();
  console.log(context)
  SubsignalController.saveSubsignal('signal1',context);
}