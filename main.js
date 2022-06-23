const Aluno = require ('./modulos/Aluno');
const Curso = require ('./modulos/Curso');



let Curso = require('./modules/curso.js');

// Criando 5 alunos
Curso.addAlunos("Diogo", [7, 8, 10], 2);
Curso.addAlunos("Rafael", [10, 9, 9], 5);
Curso.addAlunos("Valquíria", [8, 7, 10], 0);
Curso.addAlunos("Diego", [8, 8, 5], 3);
Curso.addAlunos("Henrique", [10, 10, 10], 1);
Curso.addAlunos("Cauê", [7, 6, 8], 3);

// Média de um aluno
console.log(Curso.turma[1].media().toFixed(2));

// Média dos alunos
console.log(Curso.turma.map(item => [item.nome, item.media().toFixed(2)]));

// Faltas de um aluno
console.log(Curso.turma[4].qtdFaltas);

// Adicionar 1 (uma) falta para um aluno
console.log(Curso.turma[2].nome, Curso.turma[2].qtdFaltas);
Curso.turma[2].faltas()
console.log(Curso.turma[2].nome, Curso.turma[2].qtdFaltas);

// Faltas de todos os alunos
console.log(Curso.turma.map(item => [item.nome, item.qtdFaltas]));