var nome = prompt('Qual o seu nome?');
var idade = prompt ('Qual a sua idade?')
var altura = prompt ('Qual a sua altura?')
var peso = prompt ('Qual o seu peso?')
var imc = Math.round(peso /(altura * altura));

function calculaImc(){
    alert(`Seu IMC é ${imc}`);
}

function classificacao(){
    if(omc <18.5){
        alert('Seu Imc esta dentro da Média')
    }
}

calculaImc();