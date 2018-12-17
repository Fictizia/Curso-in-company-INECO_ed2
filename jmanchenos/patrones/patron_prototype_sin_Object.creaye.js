class constructorCoches {
    constructor(modelo, color) {
      this.marca = "Seat";
      this.modelo = modelo || "Ibiza";
      this.antiguedad = 20;
      this.color = color || "rojo";
      this.detalles = function (){
        console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años y color ${this.color}`);
      }
    }
  
    clone() {
        return new constructorCoches(this.modelo, this.marca);
    }
  }
  
  
  // Comprobaciones
  const cocheRojo = new constructorCoches();
  const otroCoche = constructorCoches.prototype.clone( "Azul" );
  console.log(`¿Es "cocheRojo" una instancia de "constructorCoches"? ${cocheRojo instanceof constructorCoches}`); //true
  console.log(`¿Es "otroCoche" una instancia de "constructorCoches"? ${otroCoche instanceof constructorCoches}`); //true
  otroCoche.detalles();
