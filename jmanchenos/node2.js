var https = require('https');
var url = require('url');
let datetime = require('date-and-time');

const opciones = ['significant' , '4.5' , '2.5' , '1.0' , 'all'];
let tipo = process.argv[2];
if (!tipo) {
    console.log('Debe indicar el atributo tipo de terremotos: [%s]', opciones.join(', '));
    process.exit(0);
}else if(!opciones.includes(tipo)){
    console.log('El atributo seleccionado no es correcto: debe ser uno de los siguientes: %O', opciones);
    process.exit(0);  
}else{
    let datos='';
    let url = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${tipo}_hour.geojson`;
    https.get(url, function(res){
        res.on("data", function(chunk){
            datos = datos + chunk;
        });
        res.on("end", function(){
            let salida = JSON.parse(datos);
            console.log(`
                *****************************
                ${salida.metadata.title}
                ---------------------     
                total: ${salida.metadata.count}
                status: ${salida.metadata.status}
                ---------------------     
                ${datetime.format(new Date(salida.metadata.generated),'DD/MM/YYYY \, hh:mm:ss A')}
                ==============================`);
            for (feature of salida.features){
                let prop = feature.properties;
                let geo = feature.geometry;
                console.log(`
                ${prop.title}
                ${datetime.format(new Date(prop.time),'DD/MM/YYYY \, hh:mm:ss A')}
                Magnitud: ${prop.mag}
                Estatus: ${prop.status}
                Tipo: ${prop.type}
                Lugar: ${prop.place}
                Coordenadas: ${geo.coordinates[0]} , ${geo.coordinates[1]}
                Info: ${prop.url}
                Detalles: ${prop.detail}
                ================================================`);
            }
        });
    });
}
