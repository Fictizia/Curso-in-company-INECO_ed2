var trenes =[1,1,1,0,0,0,0,0];
var i = 0;

do {
	console.log('el tren número %d está %s funcionando', i+1, trenes[i]?'':'no');
	i++;
}while (i<trenes.length)
