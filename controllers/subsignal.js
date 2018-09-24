'use strict'

 var Subsignal = require('../models/subsignal');
 //================================================
// CREAR SUBSIGNAL
//================================================

function saveSubsignal(nombre,valor){
	var f = new Date();
	// var nombre = 'nombre';
	// var valor = 'valor';
	 var fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
	 var hora = f.getHours()+":"+f.getMinutes()+":"+f.getSeconds();

	var subsignal = new Subsignal({
		nombre: nombre,
		valor: valor,
		fecha: fecha,
		hora: hora
	});
					
					

	//Guardar subsignal
	subsignal.save((err, subsignalStored) => {
		if(err){
			res.status(500).send({
				error: err,
				message: 'Error al guardar subsignal'
			});
		}else{
			if(!subsignalStored){
				console.log('No se ha registrado el subsignal');
				
			}else{
				
			}
		}
	});
	
}

//================================================
// MOSTRAR 10 DATOS DE SIGNAL
//================================================
function listSignals(req,res){

   
	Subsignal.find()
	   .sort({ $natural: -1 })  //los 10 ultimos
	   .limit(10)	
	   .exec(
	   		(err, signals) => {
	   			if (err){
	   				res.status(500).send({message: 'Error cargando signals'});
	   			}else{
	   				Subsignal.count({}, (err,conteo) =>{
	   					res.status(200).send({
								signals: signals,
								total: conteo
						});
	   				});
	   				
	   			}
	   		}
	   	);
}

//================================================
// MOSTRAR Todos DATOS DE SIGNAL
//================================================
function listSignalsAll(req,res){

	var desde = req.query.desde || 0;
	desde= Number(desde);
   
	Subsignal.find()
	   .sort({ $natural: -1 })
	   .skip(desde)
	   .limit(10)	
	   .exec(
	   		(err, signals) => {
	   			if (err){
	   				res.status(500).send({message: 'Error cargando signals'});
	   			}else{
	   				Subsignal.count({}, (err,conteo) =>{
	   					res.status(200).send({
								signals: signals,
								total: conteo
						});
	   				});
	   				
	   			}
	   		}
	   	);
}

module.exports = {
	saveSubsignal,
	listSignals,
	listSignalsAll
	
};
