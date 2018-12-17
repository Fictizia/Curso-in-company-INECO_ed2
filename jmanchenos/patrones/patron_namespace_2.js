var myApp = myApp || {};

(function( namespace ){
    namespace.propiedad1 = "Propiedad 1";
    namespace.metodo1 = function(){
        return "metodo1";
    };
})(myApp);
console.log(myApp);
console.log(myApp.metodo1());
