/*
    1. Arrow function 
    - Foi lançada na versão ES6
    - São sempre funções anonimas, por issão são normalmente utilizadas com funções e callback.
    - Arrow function não possui seu próprio this.
*/

// 1.1. Sintaxe 

// Exemplo 1: 

// Antes
function temIdadeParaBeber(idade) {
    return idade >= 18;
}

var temIdadeParaBeber = function(idade) {
    return idade >= 18;
}

// Depois
var temIdadeParaBeber = idade => idade >= 18;

// Exemplo 2: 

// Antes 
function pegarUmValorAleatorio() {
    return Math.random();
}

var pegarUmValorAleatorio = function() {
    return Math.random();
}

// Depois
var pegarUmValorAleatorio = () => Math.random();

module.exports = { temIdadeParaBeber, pegarUmValorAleatorio };
