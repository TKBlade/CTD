const numbers = [9, 15, 24, 32, 70]

const welcome = 'Hello World :D';

let soma = numbers[0];

/*for (let i = 1; i <numbers.length; i++) {
    soma = soma + numbers[i];
    console.log
}*/

const somaInicial = numbers.reduce(
    (primeiroValor, proximoValor) => {
        console.log(primeiroValor + proximoValor)
    }
)

console.log(welcome);
