function solucao(pesos){

    let peso1 = pesos[0];
    let peso2 = pesos[1];

    if (peso1 > peso2){
        pesoFinal = peso1 - peso2;

    } else if (peso2 > peso1){
        pesoFinal = peso2 - peso1;
    }

    if (pesoFinal <= 5){
        return 'PODEM LUTAR';
    } else {
        return 'NAO PODEM LUTAR';
    }
}

console.log(solucao(pesos[50,56]))



// if (pesoFinal <= 5){
//     return 'PODEM LUTAR';
// } else {
//     return 'NAO PODEM LUTAR';
// }

const listas = ['casa', 'pao', 'asa', 'sapato']

let contador = 0;

for(itens of listas){

    if (itens == 'pao'){
        contador ++
    }
}
console.log(contador);
