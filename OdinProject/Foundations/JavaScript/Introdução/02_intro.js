// Fundamentos Parte 2

// Além dos números regulares, existem os chamados “valores numéricos especiais” que também pertencem a este tipo de dados: Infinity, -Infinitye NaN.

Infinity, -Infinitye, NaN;

// Infinity representa o infinito matemático ∞. É um valor especial que é maior do que qualquer número.

console.log( 1 / 0 ); // Infinity;

// NaN representa um erro computacional. É resultado de uma operação matemática incorreta ou indefinida.

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

// Concat STRINGS

const namep = 'Matheus';
const sobrenome = 'Marques';

console.log(`Hello, ${namep}`);
console.log(`${namep} e ${sobrenome}`);

// Funções de String

