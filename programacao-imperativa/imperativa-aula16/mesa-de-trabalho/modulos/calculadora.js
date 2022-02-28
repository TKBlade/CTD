/**
 * Responsável por inicializar a aplicação Calculadora. 
 */
 function Calculadora() {
  
  var valorAcumulado = 100;
  this.zeraCalculadora = function (){
    return valorAcumulado = 0;
  };
  /**
   * Calcula múltiplos valores conforme a função de callback.
   * 
   * @param {number[]} valores Valores que deverão ser calculados.
   * @param {(valores:number[])=>number} operacaoRetorno Função responsável pela operação matemática.
   * 
   * @return {number} Resultado da operação matemática.
   */
  this.calcular = function (valores, operacaoRetorno) {
    valorAcumulado += operacaoRetorno(valores);
    return valorAcumulado;
  }

}

var Calculadora2 = new Calculadora()

console.log(Calculadora2.zeraCalculadora())

module.exports = Calculadora;