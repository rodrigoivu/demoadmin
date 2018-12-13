var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://165.227.26.150');
client.on('connect', function () {
	setInterval(function() {
		client.publish('postsignalplc001', '789/777');
		//console.log('Message Sent');
	}, 5000);
});