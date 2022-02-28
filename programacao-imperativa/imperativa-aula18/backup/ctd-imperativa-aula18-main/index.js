/*
    Aula 18 - Express: Template Engine parte I
    (  ) Enviando um arquivo HTML.
*/

// 1. Importar o módulo Express.
const express = require('express');

// 2. Inicializar o contrutor do Express.
const aplicativo = new express();

// 3. Criando a Rota e retornando alguma informação.
aplicativo.get('/', function(requisicaoAoServidor, respostaDoServidor) {
    // 3.1. Manda um arquivo como resposta para o navegador.
    respostaDoServidor.sendFile( __dirname + '/home/home.componente.html' ); 
});

// 4. Inicializar o servidor.
aplicativo.listen(8081);
