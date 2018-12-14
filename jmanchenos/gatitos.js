let listaImg = [].slice.call(document.getAllElementsByTagName('img'));
for (imagen of listaImg){
    let {h,w}={imagen.innerHeight, imagen.innerWidth};
    imagen.innerHeight=h;
    imagen.innerWidth=w;
    imagen.href=`http://placekitten.com/${h}/${w}`;
}
