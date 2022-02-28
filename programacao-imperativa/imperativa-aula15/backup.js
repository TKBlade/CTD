function salvarNoBancoDeDados() {
    // 1. Ler o arquivo e guardar.
    var arquivo = fs.readFileSync(dirname + '/banco-de-dados.json', 'utf-8');
    // 2. Converter o arquivo de texto em objeto literal.
    var arquivoConvertidoEmObjetoLiteral = JSON.parse(arquivo);
    // 3. Adicionar o valor em um Array.
    arquivoConvertidoEmObjetoLiteral.push({ nome: nome, sobrenome: sobrenome});
    //console.log('Objeto Literal:', arquivoConvertidoEmObjetoLiteral);
    // 4. Converter o objeto literal em texto.
    var arquivoConvertidoEmTexto = JSON.stringify(arquivoConvertidoEmObjetoLiteral);
    //console.log('Texto:', arquivoConvertidoEmTexto);
    // 5. Salvar o resultado em texto no arquivo.
    fs.writeFileSync(dirname+'/banco-de-dados.json', arquivoConvertidoEmTexto);
}

// Executando a função de salvar 
salvarNoBancoDeDados();