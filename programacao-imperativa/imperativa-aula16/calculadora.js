var temIdadeParaBeber = idade => 18;

var temIdadeParaBeber = (idade) => {
    return idade >= 18;

}

temIdadeParaBeber(18); //true

//Antes

function pegarUmValorAleatorio() {
    return Math.random()
}

//Depois
var pegarUmValorAleatorio = () => Math.random();