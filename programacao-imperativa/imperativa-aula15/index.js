//var Professor = require('./professor/professor.controlador');

//var professorImperativa = new Professor('Willian', 'Sant Anna');

//console.log('Nome:', professorImperativa.pegarNome()); // Willian
//console.log('Sobrenome:', professorImperativa.pegarSobrenome()); // Sant Anna
//console.log('Nome Completo:', professorImperativa.pegarNomeCompleto()); // Willian Sant Anna

var Aluno = require('./mesa-de-trabalho/index');

var alunoDigital = new Aluno('Henrique', 'Ximenes');

console.log('Nome:', alunoDigital.pegarNome());
console.log('Sobrenome:', alunoDigital.pegarSobrenome());
console.log('Nome Completo:', alunoDigital.pegarNomeCompleto());

