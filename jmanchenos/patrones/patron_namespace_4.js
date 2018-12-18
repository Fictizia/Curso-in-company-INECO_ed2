var myApp = myApp || {};

myApp.crearElemento = function(nombre){
    var partes = nombre.split('.');
    var nameSpace = myApp;
    for (var i in partes) {
        if (!nameSpace[partes[i]]) {
            nameSpace[partes[i]] = {};
        }
        nameSpace = nameSpace[partes[i]];
    }
}

myApp.crearElemento('uno.dos.tres.cuatro.cinco.y.mas.niveles');
myApp.uno.dos.tres.cuatro.cinco.y.mas.niveles = "Funciona!"
console.log(myApp.uno.dos.tres.cuatro.cinco.y.mas.niveles);
