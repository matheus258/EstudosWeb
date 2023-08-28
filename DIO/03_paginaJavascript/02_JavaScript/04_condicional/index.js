let casa = 1;
let fora = 1;
let placar;

// Sistema para resultado de time Casa, fora ou empate.

casa < 0 && fora < 0 ? console.log('Deu zebra, resultado invalido!!') : console.log('Resultado ok');

if(casa > fora){
    console.log("O time da casa ganhou a partida")
}
else if (fora > casa){
    console.log ("o time de fora ganhou a partida");
} else {
    console.log('Empate');
}

switch (casa){
    case casa > fora:
        placar = 'Casa venceu';
        break;
    case casa < fora:
        placar= "Fora venceu";
        break;
    case casa = fora:
        placar = 'Empate'
        break;
}
console.log('Placar: ',placar);

// for

for(let i=0; i< 5; i++){
    console.log('Contagem ',i)
}
// exemplo de array
let array = ['Hello', 0, 10, 668, 'Pedra', 'Julia']

// For in - percorre pelos indices do array passado;
for (i in array){
    console.log('Indice do array com for in ',i);
}

// For of
for (i of array){
    console.log('Valor de cada casa do array com for of ', i)
}

let a = 0;

while(a < 5){
    console.log(a);
    a++; // a++ é o mesmo que a = a + 1
}