// Tipos primitivos

// Bolean
let isOpen = true;
console.log(typeof(isOpen));

// String

let nome = 'Andre';
let sobrenome = 'Pereira';
let nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto);

// Number
    // Inteiro
    let idade = 24;
    let ano = 2023;
    // Real
    let preco = 5.50;

    console.log(`${idade}, ${ano}, ${preco}`);

// Função
function sayMyName(name) {
    let myName = name;
    console.log(`Meu nome é ${myName}`);
    if (myName) return 'Tem nome';
    if (!myName) return 'Erro nome';

}
console.log(sayMyName('Matheus'));

// layout de Formulario?
