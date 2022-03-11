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

// let userChoice = parseInt (prompt('Escolha um número: 1 Peda, 2 Papel, 3 Tesoura'));
// let botChoice = parseInt (Math.random() *3+1);

// const choices = {
//     1: 'PEDRA',
//     2: 'PAPEL',
//     3: 'TESOURA',
// }

// function checkChoices(userChoice, botChoice) {
//     switch (userChoice, botChoice) {
//         case (1 && 2):
//             console.log('o bot ganhou')
//             break;
//         case (2 && 1):
//             console.log('o bot ganhou')
//             break;
        
//     }
// }

let escolhaUsuario
let escolhaBot
let placar = {
  jogador: 0,
  maquina: 0
}

function obterEscolhaUsuario() {
  let escolha = parseInt(prompt('1-Pedra, 2-Papel, 3-Tesoura'))

  if(escolha > 0 && escolha < 4) {
      escolhaUsuario = escolha
  } else {
      alert('Por favor, forneça um número de 1 à 3')
      obterEscolhaUsuario()
  }
}

function verificaResultado(){
  if(escolhaUsuario === escolhaBot){
    alert('Empatou!')

  }else {
    if(
    (escolhaBot === 1 && escolhaUsuario === 3) ||
    (escolhaBot === 2 && escolhaUsuario === 1) ||
    (escolhaBot === 3 && escolhaUsuario === 2) )
    {
      alert('Perdeu!')
      placar.maquina++

    }else {
      alert('Ganhou!')
      placar.jogador++
  } }
}

function iniciar(){
  obterEscolhaUsuario()

  escolhaBot = parseInt(Math.random()*3+1)

  verificaResultado()
  verificaGanhador()
}

function limparPlacar() {

  placar.jogador = 0
  placar.maquina = 0

}

function verificaGanhador() {

  if(placar.jogador === 2) {

      alert('Parabéns, voce é o ganhador :)')
      finalizarJogo()

  } else if(placar.maquina === 2) {

      alert('Não foi dessa vez... programaram o bot no hard :(')
      finalizarJogo()

  } else {

      iniciar()
  }
}

function finalizarJogo() {

  limparPlacar()

  let desejaContinuar = confirm('Deseja jogar novamente?')

  if(desejaContinuar) {

      iniciar()

  } else {

      alert('Obrigado por jogar!')

  }
}

iniciar()