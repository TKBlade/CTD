/*
    2. Callback(s)
    - Funcionam como uma função de retorno.
    
    3.JavaDoc https://jsdoc.app/
    - Documentação de códigos.
*/

// 3. JavaDoc
/**
 * Calcula múltiplos valores conforme a função de callback.
 * 
 * @param {number[]} valores Valores que deverão ser calculados.
 * @param {(valores:number[])=>number} operacaoCallback Função responsável pela operação matemática.
 * 
 * @return {number} Resultado da operação matemática.
 */
function calcular(valores, operacaoCallback) {
    return operacaoCallback(valores);
}

module.exports = { calcular };