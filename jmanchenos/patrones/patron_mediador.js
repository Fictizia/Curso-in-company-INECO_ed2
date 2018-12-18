// Patron de Mediador
const moduloCentral = ((() => {
    const _temas = {};
    const _suscribir = function( tema, fn ){
        if ( !_temas[tema] ){
            _temas[tema] = [];
        }
        _temas[tema].push( { context: this, callback: fn } );
        return this;
    };
    const _publicar = function( tema ){
        let args;
        if ( !_temas[tema] ){
            return false;
        }
        args = Array.prototype.slice.call( arguments, 1 );
        for ( let i = 0, l = _temas[tema].length; i < l; i++ ) {
            const subscription = _temas[tema][i];
            subscription.callback.apply( subscription.context, args );
        }
        return this;
    };
    return {
        verTemas: _temas,
        publicar: _publicar,
        suscribir: _suscribir,
        instalarEn(obj) {
            obj.suscribir = _suscribir;
            obj.publicar = _publicar;
        }
    };
})());

// Creamos dos Objetos
const modulo1 = {};
const modulo2 = {};
console.clear();

// Instalamos ...
moduloCentral.instalarEn(modulo1);
moduloCentral.instalarEn(modulo2);

// Ajustamos las suscripciones
modulo1.suscribir("test", () => {
    console.info("\"modulo1\" suscrito a \"test\". Callback disparado! ")
});

modulo2.suscribir("test2", () => {
    console.info("\"modulo2\" suscrito a \"test2\". Callback disparado! ")
});

moduloCentral.suscribir("testCentral", () => {
    console.info("\"moduloCentral\" suscrito a \"testCentral\". Callback disparado! ")
});

// Suscripciones extra...
moduloCentral.suscribir("test", () => {
    console.info("\"moduloCentral\" suscrito a \"test\". Callback disparado! ")
});
moduloCentral.suscribir("test2", () => {
    console.info("\"moduloCentral\" suscrito a \"test2\". Callback disparado! ")
});
console.clear();

// Disparamos las publicaciones
modulo2.publicar("testCentral");
modulo2.publicar("test2");
modulo2.publicar("test");

modulo1.publicar("testCentral");
modulo1.publicar("test2");
modulo1.publicar("test");

moduloCentral.publicar("testCentral");
moduloCentral.publicar("test2");
moduloCentral.publicar("test");
