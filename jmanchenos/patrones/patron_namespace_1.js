var myApp = (function () {
    // privado
    var metodoPrivado1 = function () {
        console.info("Método Privado 1");
    };
    var metodoPrivado2 = function () {
        console.info("Método Privado 2");           
    };
    var propiedadPrivada1 = 'dato1';
    return {
        // público
        metodoPublico1: metodoPrivado1,
        propiedadesPublicas:{
            propiedad1: propiedadPrivada1,
            otro: "otro"
        },
        mas:{
            MetodoPublico2: metodoPrivado2
        }
        //...
    }
})();

console.log(myApp.metodoPrivado1);
console.log(myApp.metodoPublico1);
