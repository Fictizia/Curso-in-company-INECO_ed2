// global
var myApp = myApp || {};

// sub-objeto
myApp.ejemploDatos = {}

myApp.ejemploDatos = {
    metodo: function () {
        console.log("esto es un metodo");           
    },
    propiedad1: 1,
    propiedad2: "dos"
}

console.log(myApp.ejemploDatos.propiedad1);
