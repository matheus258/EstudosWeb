// Resumo de estudos com JS;

// Diferença do VAR e LET 

//Usar o let vai ajudar o seu codigo, pois ele respeita o escopo da variavel.

let nome = 'Nome fora';

if (true){
    let nome = 'Nome dentro';
    console.log('Dentro do escopo: ', nome);
}

console.log('Fora do escopo: ', nome);

// Nomes reservados
// Existe uma lista de palavras reservadas , que não podem ser usadas como nomes de variáveis ​​porque são usadas pela própria linguagem.

// Por exemplo: let, class, returne functionsão reservados.

// O código abaixo dá um erro de sintaxe:

// let let = 5;
// let return = 5;