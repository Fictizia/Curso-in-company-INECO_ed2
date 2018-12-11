function agregarPasajeros(lista, elem){
	if (Array.isArray(lista)){
		lista.push(elem);
	}
}

function eliminarPasajero(lista,elem){
	if (Array.isArray(lista)){ç
		let pos = lista.indexOf(elem);
		if (pos>-1){
			lista.splice(pos,1);
		}		
	}
}
