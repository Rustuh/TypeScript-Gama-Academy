"use strict";
// Boolean
var contaPaga = false;
// Number
var idade = 33;
var avaliacao = 4.5;
// String
var nome = 'Rustuh';
// Array
var idades = [23, 28, 45];
//outra forma
var idades2 = [23, 28, 45];
// Tuple
var jogadores;
jogadores = ['Rustuh', 'Fulano', 'Ciclano'];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any
var retornoDaAPI = [123, 'Rustuh', false];
var retornoDaAPI2 = {
//.......
};
// Void
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objecto) {
    //.....
}
criar({
    propriedade: 1,
});
//criar('Rustuh') // Da erro
//Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union Types
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
exibirNota(10);
//type Funcionarios = Array<string>; //string[]
var funcionarios = [{
        nome: 'Rustuh',
        sobrenome: 'Silva',
        dataNascimento: new Date()
    }, {
        nome: 'Fulano',
        sobrenome: 'Farias',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}
// Valores nulos ou opcionais
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Rustuh',
    telefone1: '1234567',
    telefone2: '12355677'
};
// Type Assertion
var minhaIdade = 33;
minhaIdade.toString();
//(<number>minhaIdade).toString();
//const input = document.getElementById('numero1') as HTMLInputElement;
var input = document.getElementById('numero1');
console.log(input.value);
