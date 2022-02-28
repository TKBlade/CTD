// let escolhaUsuario =  parseInt(prompt('1= Papel, 2= Tesoura, 3= Pedra'))

// let escolhaMaquina = parseInt (Math.random()*3+1)

// if(escolhaUsuario === 1) {

//     if(escolhaMaquina === 1){

//         alert('empatou')

//     }

//     if(escolhaMaquina === 2){

//         alert('a maquina ganhou')

//     }

//     if(escolhaMaquina === 3){

//         alert('o usuario ganhou')

//     }
// }

// if(escolhaUsuario === 2) {

//     if(escolhaMaquina === 1){

//         alert('o usuario ganhou')

//     }

//     if(escolhaMaquina === 2){

//         alert('empatou')

//     }

//     if(escolhaMaquina === 3){

//         alert('a maquina ganhou')

//     }
// }

// if(escolhaUsuario === 3) {

//     if(escolhaMaquina === 1){

//         alert('a maquina ganhou')

//     }

//     if(escolhaMaquina === 2){

//         alert('o usuário ganhou')

//     }

//     if(escolhaMaquina === 3){

//         alert('empatou')

//     }
    
// }

// console.log('Jogada do Usuário '+escolhaUsuario)
// console.log('Jogada da Maquina '+escolhaMaquina)

let userChoice = parseInt (prompt('Escolha um número: 1 Peda, 2 Papel, 3 Tesoura'));
let botChoice = parseInt (Math.random() *3+1);

const choices = {
    1: 'PEDRA',
    2: 'PAPEL',
    3: 'TESOURA',
}

function checkChoices(userChoice, botChoice) {
    switch (userChoice, botChoice) {
        case (1 && 2):
            console.log('o bot ganhou')
            break;
        case (2 && 1):
            console.log('o bot ganhou')
            break;
        
    }
}