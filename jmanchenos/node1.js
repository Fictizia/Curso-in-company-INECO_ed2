var http = require('http');
var url = require('url');
var server = http.createServer().listen(3000);

server.on('request', function (req, res) {
    var pathname = url.parse(req.url).pathname;
    if (pathname === '/quien') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end('<h1>Hola, soy el proceso ' + process.pid + ' </h1>');
    } else if(pathname==='/donde'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end('<h1> Hola, actualmente resido en  la plataforma ' + process.platform + '</h1>');
    } else if(pathname==='/matame'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end('<h1> Adios, me cierro</h1>');
        process.exit(0);
    } else {
        res.writeHead(500, {
            'Content-Type':'text/html'
        });
        res.end('<h1> Ha habido un error: no se lo que quieres</h1>');
    }
});
console.log('Servidor escuchando por el puerto 3000');
