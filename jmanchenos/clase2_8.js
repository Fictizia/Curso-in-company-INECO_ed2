var pasajeros=['Alicia Gutiérrez', 'Alfonso Gomez','Luis Navarro','Oscar Garcia','Andres Fernandez','Lucia Mellado'];

pasajeros.forEach(function(elemento, indice){
	console.log('el pasajero %s tiene reservado el asiento %d', elemento, indice+1);
});
