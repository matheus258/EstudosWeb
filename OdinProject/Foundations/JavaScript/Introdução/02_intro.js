// Fundamentos Parte 2

// Além dos números regulares, existem os chamados “valores numéricos especiais” que também pertencem a este tipo de dados: Infinity, -Infinitye NaN.

// Infinity, -Infinitye, NaN;

// Infinity representa o infinito matemático ∞. É um valor especial que é maior do que qualquer número.

console.log( 1 / 0 ); // Infinity;

// NaN representa um erro computacional. É resultado de uma operação matemática incorreta ou indefinida.

// alert( NaN + 1 ); // NaN
// alert( 3 * NaN ); // NaN
// alert( "not a number" / 2 - 1 ); // NaN

// Concat STRINGS

const namep = 'Matheus';
const sobrenome = 'Marques';
const nomeCompleto = `${namep} ${sobrenome}`

console.log(`Hello, ${namep}`);
console.log(`${namep} e ${sobrenome}`);

// Funções de String

    // length
    console.log(namep.length); //Quantidade de caracteres da string.

    // indexOf
    console.log(namep.indexOf('M'));

    // slice
    let removerString = namep.slice(0, 1); // Pega o valor selecionado.
    console.log(removerString);

    // replace
    let trocaLetra = nomeCompleto.replace("Marques", "Oliveira");
    console.log(`${trocaLetra}`);