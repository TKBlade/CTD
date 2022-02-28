// new Function Produto (nomeProduto, valorProduto, qualidade, disponivel) {
//     this.nomeDoProduto = nomeProduto;
//     this.valorDoProduto = valorProduto;
//     this.qualidadeDoProduto = qualidade;
//     this.statusProduto = disponivel;
//  new Produto("Tênis", 250, 10, true),
//  new Produto("Colar", 340, 9, true)
// };


// Atividade Checkpoint Prog Imp. CTD - Thiago Cavalcante


const produtos = [
    {
        nomeDoProduto: "Camisa Autografada",
        valorDoProduto: 1400,
        qualidadeDoProduto: 100,
        statusProduto: true
    },
    {
        nomeDoProduto: "Bone",
        valorDoProduto: 120,
        qualidadeDoProduto: 40,
        statusProduto: true
    },
    {
        nomeDoProduto: "Tenis Ed Ltd",
        valorDoProduto: 250,
        qualidadeDoProduto: 80,
        statusProduto: true
    },
    {
        nomeDoProduto: "Colar Ouro",
        valorDoProduto: 780,
        qualidadeDoProduto: 100,
        statusProduto: true
    },
    {
        nomeDoProduto: "Anel NBA",
        valorDoProduto: 1899,
        qualidadeDoProduto: 100,
        statusProduto: false
    }
];


console.log(produtos, "Este é o fim da lista de produtos");


let pesquisa = produtos.filter(produto => (produto.valorDoProduto >= 482 && produto.valorDoProduto <= 1600 && produto.qualidadeDoProduto >= 60 && produto.statusProduto))

console.log(pesquisa, "Estes é o fim dos resultados da pesquisa, prosseguindo para o carrinho");


const carrinho = pesquisa

carrinho.map(produto => console.log(`${produto.nomeDoProduto} por apenas ${produto.valorDoProduto}`))

const valores = pesquisa.map(produtos => produtos.valorDoProduto).reduce((soma, preço) => soma + preço )


console.log(`Comprar agora pelo preço de ${valores} em até 12 vezes sem juros`);