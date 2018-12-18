class Peticion {
    constructor(cantidad) {
        this.cantidad = cantidad;
        logger.registra(`Pedido: ${cantidad}€\n`);
    }

    get(valorMoneda) {
        const cuenta = Math.floor(this.cantidad / valorMoneda);
        this.cantidad -= cuenta * valorMoneda;

		if(cuenta !== 0){
	        if(valorMoneda < 5 ) {
				logger.registra(`Facilita un total de ${cuenta} monedas de ${valorMoneda}€`);
	        } else {
	        	logger.registra(`Facilita un total de ${cuenta} billetes de ${valorMoneda}€`);
	        }
		}

        return this;
    }
}

var logger = ((() => {
    let registro = "";
    return {
        registra(mensaje) { registro += `${mensaje}\n`; },
        resumen() {
        	console.log(registro);
        	registro = "";
        }
    }
}))();

function calcularBilletes(cantidad) {
    const peticion = new Peticion(cantidad);

    peticion.get(500).get(200).get(100).get(50).get(20).get(10).get(5) // Billetes
    		.get(2).get(1).get(0.50).get(0.20).get(0.10).get(0.05).get(0.02).get(0.01); // Monedas

    logger.resumen();
}

calcularBilletes(443.79);
