/*
    Atividade I: Crie um controlador responsável por criar novos Alunos.
    O controlador deve ser capaz de:
    (  ) Cadastrar um novo aluno com nome, sobrenome.
    (  ) Validar se o nome e sobrenome do aluno é uma string e/ou não esta vazio.
    (  ) Caso passe na validação:
        (  ) Salvar o cadastro em um arquivo json.
    (  ) Caso o contrário:
        (  ) Recusar o Cadastro com uma mensagem de erro.
*/

const fs = require('fs');

const arquivo = fs.readFileSync(__dirname + '/aluno.modelo.json', 'utf-8');

function Professor(nomeDoAluno, sobrenomeDoAluno) {

    var nome = nomeDoAluno
    var sobrenome = sobrenomeDoAluno

    /* 
        Conceitualmente chamado de Get.
        Serve para acessar um atriputo privado.
    */
        this.pegarNome = function() {
            return nome;
        }
    
        this.pegarSobrenome = function() {
            return sobrenome;
        }
    
        this.pegarNomeCompleto = function() {
            return `${nome} ${sobrenome}`; 
        }
    
        /* 
            Conceitualmente chamado de Set.
            Serve para definir um novo valor a um atributo privado.
        */
        this.definirNome = function(novoNome) {
            nome = novoNome;
            return nome;
        }
    
        this.definirSobrenome = function(novoSobrenome) {
            sobrenome = novoSobrenome;
            return sobrenome;
        }
}
