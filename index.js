'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var broker = require('./broker');
var subsignal1 = require('./subsignal1');
var port = process.env.PORT || 3780;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ceaproplc',{ useNewUrlParser: true },(err,res) => {  //useNewUrlParser agregado por el error de depreciacion
if (err) {
	throw err;
}else{
	console.log("La conexión a la base de datos está funcionando correctamente...");
  
    //    https.createServer(credentials, app).listen(port, function(){
    //    console.log("Servidor de adminpie escuchando en http://localhost:" + port);
	// });

	app.listen(port, function(){
    console.log("Servidor de ceaproplc escuchando en http://localhost:" + port);
	});
}
});