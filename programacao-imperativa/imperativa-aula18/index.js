
const express = require('express');


const aplicativo = new express();


aplicativo.get('/', function(requisicaoAoServidor, respostaDoServidor) {

    respostaDoServidor.sendFile( __dirname + '/home/home.componente.html' ); 
});

aplicativo.listen(8081);