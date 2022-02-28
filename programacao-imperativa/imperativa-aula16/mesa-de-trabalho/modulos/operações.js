const multiplicar = (valores) => {
  return valores.reduce((valorAcumula, valorAtual) => valorAcumula + valorAtual );
  ;
}

const dividir = (valores) => {
  return valores.reduce((valorAcumula, valorAtual) => valorAcumula / valorAtual );
  ;
}

const somar = (valores) => {
  return valores.reduce((valorAcumula, valorAtual) => valorAcumula / valorAtual );
  ;
}

const subtrair = (valores) => {
  return valores.reduce((valorAcumula, valorAtual) => valorAcumula - valorAtual );
  ;
}

module.exports = {multiplicar ,dividir, somar, subtrair}