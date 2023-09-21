let novoParagrafo = document.createElement('p');

let texto = document.createTextNode("Conteudo do parágrafo");

novoParagrafo.appendChild(texto);
// Adicionando o elemento ao documento HTML
console.log(novoParagrafo);

let body = document.querySelector('body');

body.appendChild(novoParagrafo);

// Fazendo testes de add elementos

var titlePrincipal = document.getElementsByClassName('title')[0];

var el = document.createElement('H1');

el.appendChild(document.createTextNode('Texto Principal'))

// let textPrincipal = document.createTextNode('Este é o Titulo Principal.')

titlePrincipal.appendChild(el)

// Segundo teste

let span = document.querySelector('.span');

let p = document.createElement('p');
p.appendChild(document.createTextNode('Este é um span criado com javascript'));

span.appendChild(p);

// Terceiro teste, Criando um H2

let subtitle = document.querySelector('.subtitle');

let sub = document.createElement('H2');
sub.appendChild(document.createTextNode('lorem lorem e lorem lorem ahfafafj  afpj a lorem.'));
subtitle.appendChild(sub);

// MUSSUM
let mussum = document.querySelector('.mussum');
let paragrafo = document.createElement('p');

paragrafo.appendChild(document.createTextNode('Mussum Ipsum, cacilds vidis litro abertis.  Quem num gosta di mé, boa gentis num é. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Manduma pindureta quium dia nois paga. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.'));
mussum.appendChild(paragrafo);
