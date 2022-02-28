// comentario de uma única linha

/*
    Alerts
    Documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert

    alert(texto|valor);

    Prompts
    Documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/prompt

    prompt(texto, valor);

    Confirm
    Documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/confirm

    confirm(mensagem);
*/
/*
comentario de multiplas linhas.
utilizada principalment eem documentações de código
*/

var saudacao = 'Olá';
var nome = prompt('Qual o seu nome?');
var quantidade = prompt ('Qual o valor gostaria de trocar?')
var real = quantidade + ' ' + 'Dólares são atualmente' + ' ' + quantidade * 5.30

alert(saudacao + ' ' + nome + ' ' + real);