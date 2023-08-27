let array = ['Hello', 24, 2023, 'Pedro', true, ['array1'], ['array2'], ['array3']];

// forEach - Adiciona um indice para cada item do array.
array.forEach(function(item, indice){
    console.log(item, indice);
});

// push - adiciona um novo item ao final do array;
array.push('Novo item')
console.log('Depois do push ',array);

//pop - remove o ultimo item do array;
array.pop();
console.log('Depois do pop ',array)

// shift - remove item no inicio do array;
array.shift();
console.log('Depois do shift ',array);

// unshift - adiciona um item no inicio do array;
array.unshift(150);
console.log('Depois do unshift ',array);

// indexOf - indica indice de item selecionado
console.log('Saber indice do item 2023 ',array.indexOf(2023));

// splice - apaga mais de um item de acordo com o que é passado;
array.splice(0 , 3); // apagar do indice 0 e pare no indice 3.
console.log('Depois do splice ',array);

// slice - pega os valores passados
let newArray = array.slice(0 , 3);
console.log('newArray com slice ',newArray);

// OBJETOS em js

let xicara = {
    cor: "Pink",
    tamanho: "pequena",
    preco: 15,
    object: tipo = {
        nome: "Xicara Maruel",
        idade: 67,
        sexo: "Unissex"
    }
    };

console.log(xicara);

