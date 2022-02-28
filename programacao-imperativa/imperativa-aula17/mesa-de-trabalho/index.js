/*
    Atividade I: Inicialize um projeto npm;
    (  ) Preencha nome do projeto;
    (  ) Preencha o nome de todos os integrantes do grupo;
    (  ) Preencha a licença como UNLICENSED;
    (  ) Preencha a versão como 1.0.

    Atividade II: Instale o Nodemon globalmente em sua máquina. Link com a instrução de instalação: https://www.npmjs.com/package/nodemon.
    
    Atividade III: Ignore a pasta node_modules
    (  ) Configure o git, utilizando o arquivo .gitignore, para que ele ignore as alterações realizas na pasta node_modules.

    Atividade IV: Crie o projeto 
    (  ) Instale o Express no projeto (https://expressjs.com/pt-br/),
    (  ) Implemente a aplicação como as seguintes rotas:
        (  ) Rota http://localhost:1234/
            (  ) Insira o texto: Seja bem-vindo ao [nome_do_projeto].
        (  ) Rota http://localhost:1234/sobre/
            (  ) Insire o texto: Sobre o projeto


    Comandos npm
        npm init -> para inicializar o projeto.
        npm install [nome_do_modulo] -> para instalar um módulo de terceiros.
        npm install -> para instalar o projeto quando esta sem a pasta node_modules.
        npm uninstall [nome_do_modulo] -> para desinstalar um módulo de terceiros.
        npm start -> para executar o projeto. 
*/

// 1. Importar o módulo Express.
const express = require('express');

// 2. Inicializar o contrutor do Express.
const aplicativo = new express();

// 3. Criando a Rota e retornando alguma informação.
aplicativo.get('/', function(requisicaoAoServidor, respostaDoServidor) {
    // 3.1. Manda uma resposta para o navegador.
    respostaDoServidor.send('Insira o texto: Seja bem-vindo ao Projeto.'); 
});

/* 4. Uma segunda rota */
aplicativo.get('/sobre', function(requisicaoAoServidor, respostaDoServidor) {
    // 3.1. Manda uma resposta para o navegador.
    respostaDoServidor.send('Aqui você encontra mais informações'); 
});

// 4. Inicializar o servidor.
aplicativo.listen(8081);