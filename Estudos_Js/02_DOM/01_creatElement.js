let novoParagrafo = document.createElement('p');

let texto = document.createTextNode("Conteudo do parágrafo");

novoParagrafo.appendChild(texto);
// Adicionando o elemento ao documento HTML
console.log(novoParagrafo);

let body = document.querySelector('body');

console.log(body)

body.appendChild(novoParagrafo);

// Fazendo testes de add elementos

var titlePrincipal = document.getElementsByClassName('title')[0];

console.log(titlePrincipal);

var el = document.createElement('H1');

el.appendChild(document.createTextNode('Texto Principal'))

// let textPrincipal = document.createTextNode('Este é o Titulo Principal.')

titlePrincipal.appendChild(el)

// Segundo teste

let span = document.querySelector('.span');

let p = document.createElement('p');
p.appendChild(document.createTextNode('Este é um span criado com javascript'));

span.appendChild(p);