let lineas = document.getElementsByClassName("list__lineas__element")
for(let i=0;i<lineas.length;i++){
    let elemNombre = lineas[i].querySelector('a img');
    let nombre = elemNombre?elemNombre.className:'';
    let elemEstado = lineas[i].querySelector('span.state--green');
    let elemAlerta = lineas[i].querySelector('span span.state--alert');
    let estado= elemEstado?'normal':'parada';
    let alerta = '';
    if (elemEstado && elemAlerta){
        alerta=document.getElementById(elemAlerta.parentNode.dataset.toggle).innerText;
    }  
    if (nombre){
        console.log(`Circulacion ${estado} en ${nombre} ${alerta?' Atencion: '+ alerta :''}`); 
    }
}
