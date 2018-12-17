// Constructor
function constructorCoches( color ){
    this.marca = "Seat";
    this.modelo = "Ibiza";
    this.antiguedad = 20;
    this.color = color || "rojo";
    this.extras = 0;
    this.detalles = function (){
      console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años y color ${this.color}`);
    }
  }
  
  // Decorator 1
  function gps( coche ) {
    coche.gps = true;
    coche.extras++;
  }
  
  // Decorator 2
  function aireAcondiccionado( coche ){
    coche["aire acondiccionado"] = true;
    coche.extras++;
  }
  
  // Decorator 3
  function elevaLunas( coche ){
    coche.elevaLunas = true;
    coche.extras++;
  }
  
  // Decorator 4
  function farosLed( coche ){
    coche["faros led"] = true;
    coche.extras++;
  }
  
  // Decorator 5
  function detallesTecnicos( coche ){
    coche.detallesTecnicos = () => {
      if(coche.extras > 0){
        console.log(`El coche tiene ${coche.extras} extras: \n`);
        (coche.gps) ? console.log("- GPS"):console.log("- SIN GPS");
        (coche["aire acondiccionado"]) ? console.log("- Aire acondiccionado"):console.log("- SIN Aire acondiccionado");
        (coche["faros led"]) ? console.log("- Faros Led"):console.log("- SIN Faros Led");
        (coche.elevaLunas) ? console.log("- Elevalunas"):console.log("- SIN Elevalunas");
      } else {
        console.log("Parece.. que no se han añadido extras aun.");
      }
    };
  }
  
  const cocheRojo = new constructorCoches();
  cocheRojo.detalles();
  
  
  // Aplicando cambios
  detallesTecnicos(cocheRojo);
  cocheRojo.detallesTecnicos();
  
  // Aplicando más cambios
  gps(cocheRojo);
  aireAcondiccionado(cocheRojo);
  elevaLunas(cocheRojo);
  farosLed(cocheRojo);
  cocheRojo.detallesTecnicos();
  
  
  const nuevoCoche = new constructorCoches( "Verde" );
  nuevoCoche.detalles();
