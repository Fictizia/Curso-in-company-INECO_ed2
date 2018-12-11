
var billete = (function(){     
    let infoRetraso= 'Info: - Tetuán (12) - Moncloa (19) - Hortaleza (21)';
    return function(lista, asiento){      
        if (Array.isArray(lista)){
            if (lista[asiento-1]){
                console.log('****************************************');
                console.log('Usuario: %s', lista[asiento-1]);
                console.log('Asiento: %d', asiento);
                console.log(infoRetraso);
                console.log('****************************************');
            }else{
                console.log ('El asiento %d no está reservado', asiento);
            } 
        }else{
            throw Error( 'el parámetro ' + lista + ' no es un array');
        }
    }
})();
    
    
    
function listarReservas(lista){
    lista.forEach(function(elemento, indice){
        if (elemento!=='undefined'){
            console.log('el pasajero %s tiene reservado el asiento %d', elemento, indice+1);
        }     
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
  
  function eliminarPasajeroManteniendoAsiento(lista,elem){
  if (Array.isArray(lista)){
    let pos = lista.indexOf(elem);
    if (pos>-1){
            delete lista[pos];
            console.log('Se ha eliminado a %s de la lista de pasajeros', elem);
    }else{
            console.log('No se ha eliminado a %s de la lista de pasajeros. El pasajero no está en la lista', elem);
        }		
  }else{
        throw Error( 'el parámetro ' + lista + ' no es un array');
    }
  }
  
  var pasajeros=['Alicia Gutiérrez', 'Alfonso Gómez','Luis Navarro','Oscar García','Andres Fernández','Lucía Mellado'];
  agregarPasajeros(pasajeros,'Pepe Pérez');
  eliminarPasajeroManteniendoAsiento(pasajeros,'Alfonso Gómez');
  listarReservas(pasajeros);
  billete(pasajeros,1);
  billete(pasajeros,2);
  billete(pasajeros,3);
  billete(pasajeros,7);
  billete(pasajeros,8);
  
