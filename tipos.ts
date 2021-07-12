// Boolean

const contaPaga: boolean = false;

// Number

const idade: number = 33;
const avaliacao: number = 4.5;

// String

const nome: string = 'Rustuh';

// Array

const idades: number[] = [23, 28, 45];
//outra forma
const idades2: Array<number> = [23, 28, 45];

// Tuple

let jogadores: [string, string, string];
jogadores = ['Rustuh', 'Fulano', 'Ciclano'];

// Enum

enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002' ,
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any

const retornoDaAPI: any[] = [123, 'Rustuh', false];
const retornoDaAPI2: any = {
    //.......
};

// Void

function printarNaTela(msg: string): void {
    console.log(msg);
}

// Null e Undefined

const u: undefined = undefined;
const n: null = null;

// Object

function criar(objecto: object) {
    //.....
}
criar({
    propriedade: 1,
})
//criar('Rustuh') // Da erro

//Never

function loopInfinito(): never {
    while (true) { }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha() {
    return erro('Algo falhou');
}

// Union Types

const nota: string | number = 5;
function exibirNota(nota : number | string) {
    console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);

// Alias

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

//type Funcionarios = Array<string>; //string[]
const funcionarios: Funcionario[] = [{
    nome: 'Rustuh',
    sobrenome: 'Silva',
    dataNascimento: new Date()
}, {
    nome: 'Fulano',
    sobrenome: 'Farias',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}



// Valores nulos ou opcionais

let altura: number | null= 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;   //? operador opcional
}
const contato: Contato = {
    nome: 'Rustuh',
    telefone1: '1234567',
    telefone2: '12355677'
}

// Type Assertion

const minhaIdade: any = 33;
(minhaIdade as number).toString();
//(<number>minhaIdade).toString();

//const input = document.getElementById('numero1') as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById('numero1');

console.log(input.value);