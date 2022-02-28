/*
    Aula 17 - Express: Introdução
    ( x ) Instação e configuração npm; npm init e preenche as informações...
    ( x ) Instalação do Nodemon(https://www.npmjs.com/package/nodemon);
    ( x ) Instalação do Express(https://expressjs.com/pt-br/);
    - Configurando as excessões do git com .gitignore;
    - Rotas Express.
*/

// 1. Importar o módulo Express.
const express = require('express');

// 2. Inicializar o contrutor do Express.
const aplicativo = new express();

// 3. Criando a Rota e retornando alguma informação.
aplicativo.get('/', function(requisicaoAoServidor, respostaDoServidor) {
    // 3.1. Manda uma resposta para o navegador.
    respostaDoServidor.send('Principal'); 
});

/* 4. Uma segunda rota */
aplicativo.get('/contato', function(requisicaoAoServidor, respostaDoServidor) {
    // 3.1. Manda uma resposta para o navegador.
    respostaDoServidor.send('Contato'); 
});

// 4. Inicializar o servidor.
aplicativo.listen(8081);