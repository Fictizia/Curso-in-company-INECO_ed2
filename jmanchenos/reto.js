var Magic = (function(){
	console.log("Soy 1");
	let coeficienteSeguro = 10;
	return function(num){
		console.log("Soy 2, coeficienteSeguro:", coeficienteSeguro)		
		if(coeficienteSeguro > 20){
			return coeficienteSeguro*num;
		} else {
			coeficienteSeguro++;
			return Magic(num);
		}			
    }
})()

var dato = Magic(10)
console.log(dato);
dato = Magic(100)
console.log(dato);
