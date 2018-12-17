var mqtt = require('mqtt');
//var client  = mqtt.connect('mqtt://192.168.0.8');
var client  = mqtt.connect('mqtt://165.227.26.150')

client.on('connect', function () {
	setInterval(function() {
		//client.publish('signal1', 'dol8i00001111,aol8i1000i0987i0001i0021i0999i0321i0554i0765,end');
		var var1 = aleatorio(1,1000);
		var var2 = aleatorio(1,1000);
		var resultado =  var1 + '/' + var2;
		client.publish('postsignalplc003', resultado);
		//console.log('Message Sent');
	}, 5000);
});

function aleatorio(a,b) {
         return Math.round(Math.random()*(b-a)+parseInt(a));
}