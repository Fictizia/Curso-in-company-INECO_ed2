function listarReservas(lista, elem){
    lista.forEach(function(elemento, indice){
        console.log('el pasajero %s tiene reservado el asiento %d', elemento, indice+1);
    });
}

function agregarPasajeros(lista, elem){
	if (Array.isArray(lista)){
        lista.push(elem);
        console.log('Se ha agregado a %s a la lista de pasajeros', elem);
	}else{
        throw Error( 'el parámetro ' + lista + ' no es un array');
    }
}

function eliminarPasajero(lista,elem){
	if (Array.isArray(lista)){
		let pos = lista.indexOf(elem);
		if (pos>-1){
            lista.splice(pos,1);
            console.log('Se ha eliminado a %s de la lista de pasajeros', elem);
		}else{
            console.log('No se ha eliminado a %s de la lista de pasajeros. El pasajero no está en la lista', elem);
        }		
	}else{
        throw Error( 'el parámetro ' + lista + ' no es un array');
    }
}



var pasajeros=['Alicia Gutiérrez', 'Alfonso Gómez','Luis Navarro','Oscar García','Andres Fernández','Lucía Mellado'];
agregarPasajeros(pasajeros,'Pepe Perez');
eliminarPasajero(pasajeros,'Alfonso Gómez');
eliminarPasajero(pasajeros,'Alfonso Gómez');
listarReservas(pasajeros);




