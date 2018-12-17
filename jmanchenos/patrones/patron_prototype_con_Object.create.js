const coche = {
    marca: "Land Rover",
    modelo: "Santana Aníbal",
    antiguedad: 35,
    color: "Marrón tierra",
    tipo: "4x4",
    detalles: dameDetalles
  };
  
  const furgon = {
    taraMinima: 1200,
    cargaUtil: 768,
    volumenCarga: 4.5,
    detalles: detallesTecnicos
  };
  
  const conductor = {
    nombre: "Yo",
    apellido: "Mismo",
    experiencia: 10000,
    limite: 120,
    detalles() {
      console.log(`El conductor es ${this.nombre} ${this.apellido}. Con ${this.experiencia} horas de experiencia y una restricción a ${this.limite}Km/h.`);
    }
  };
  
  function dameDetalles(){
    console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`);
  };
  
  function detallesTecnicos(){
    console.warn(`Tu coche tiene una Tara mínima de ${this.taraMinima}. Carga útil de ${this.cargaUtil} y un volumen de carga de ${this.volumenCarga}m3`);
  };
  
  // Patrón de Prototype
  const miPickup = Object.create(coche, {
      'conductor': { value: conductor },
      'carga': { value: furgon}
    });
  
  
  miPickup.detalles();
  miPickup.carga.detalles();
  miPickup.conductor.detalles();
  console.log(`Es "coche" prototipo de "miPickup" ? ${coche.isPrototypeOf(miPickup)}`);
  console.log(`Es "conductor" prototipo de "miPickup" ? ${conductor.isPrototypeOf(miPickup)}`);
  console.log(`Es "furgon" prototipo de "miPickup" ? ${furgon.isPrototypeOf(miPickup)}`);4
