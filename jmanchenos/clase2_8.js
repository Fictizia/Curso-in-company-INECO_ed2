function listarReservas(lista){
    lista.forEach(function(elemento, indice){
        console.log('el pasajero %s tiene reservado el asiento %d', elemento, indice+1);
    });
}
var pasajeros=['Alicia Gutiérrez', 'Alfonso Gomez','Luis Navarro','Oscar Garcia','Andres Fernandez','Lucia Mellado'];

listarReservas(pasajeros);
