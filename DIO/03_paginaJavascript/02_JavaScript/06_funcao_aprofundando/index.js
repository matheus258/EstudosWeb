// Funcoes avancado - TIPOS

// declarativa
function soma(n1, n2) {
    return (n1 + n2); // retorno implicito
}
console.log(`Soma: ${soma(5,5)}`);

// funcoes de expressoes

let alarme = function ajusteAlarme(horas){
    console.log('Seu alarme foi ajustado para',horas,'hrs.')
}
// funcao sem nome da funcao, apenas nome da variavel
let apresentacao = function (){console.log('Helloo, apresentação do resumo do curso de functions.')};
apresentacao();

// Arrow function
let funcaoArrow = () => {
    console.log('Sou uma arrow function')
};
funcaoArrow();
