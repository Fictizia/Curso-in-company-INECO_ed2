async function ajaxHandler (url, cb){
    try{
        let response = await fetch(url);
        let data = await response.json();
        await cb(data);
    }catch(error){
        console.log(error);
    }
}

  
  ajaxHandler("http://airemad.com/api/v1/pollen", function(data){
    let ul = document.createElement('ul');
    ul.innerText = 'Lista de Estaciones de medición de Polen';
    document.body.appendChild(ul);
    for (let i=0;i<data.length;i++){
        let elem = data[i];
        let li = document.createElement('li');
        li.id = elem.id;
        li.innerText=elem.name;
        ul.appendChild(li);
        ulMediciones = document.createElement('ul');
        li.appendChild(ulMediciones);
        console.log(elem.mediciones.key);
        for (arbol in elem.mediciones){
            let medicion = document.createElement('li');
            ulMediciones.appendChild(medicion);
            let resumen = elem.mediciones[arbol].resumen;
            medicion.innerText=`${arbol}: ${resumen}`;
            switch(resumen){
                case 'bajo': medicion.style.color='green';break;
                case 'medio': medicion.style.color='orange';break;
                case 'alto': medicion.style.color='red';break;
            }
            ulMediciones.appendChild(medicion);
        }
    }
  })
