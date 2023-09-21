// let x = 8;
// let y = 0;
// let a = 5;

// while(x > 1){
//     y = x + a;
//     x = x / 2;
//     a = a + x + y
// }

// console.log(a);

// x = 0;
// a = '';
// while (x < 6) {
//     console.log(a);
//     x++
// }


let numero, i, resultado = 0;
numero = 6;

for(i = 1 ; (i*(i+1))<=(numero*2) ; i++){
    if((i*(i+1)/2)==numero){
        resultado = 1;
    }
}
// se o resultado for true é triangular;
if(resultado){

    console.log("É TRIANGULAR");
}
else {
    console.log("NAO É TRIANGULAR");
}


