var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.0.8')
client.on('connect', () => {
    client.subscribe('signal1')
    client.subscribe('signal2')
})
client.on('message', (topic, message) => {
	switch (topic) {
	    case 'signal1':
	      return handleSignal1(message)
	    case 'signal2':
	      return handleSignal2(message)
	}
  console.log('No handler for topic %s', topic)

// context = message.toString();
// console.log(context)
})

function handleSignal1 (message) {
  console.log('Valor Señal 1: %s', message)
  connected = (message.toString() === 'true')
}

function handleSignal2 (message) {
  garageState = message
  console.log('Valor Señal 2: %s', message)
}