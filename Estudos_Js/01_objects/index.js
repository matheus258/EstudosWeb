const Pessoa = function (nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

const carla = new Pessoa ('Carla', 'Alcantara', 25)

// document.write(carla.nome, ' ', carla.idade);

// DOM

let x = 0;

function getPrincipal(){
    // Muda o p toda vez que da click pelo ID;
    let text = document.getElementById('principal').innerHTML = x % 2 == 0 ? 'Mudou o Texto' : 'Mudou novamente';
    // Muda o p toda vez que da click pela Class
    let turno = document.getElementsByClassName('secundario')[0].innerHTML = x % 2 == 0 ? 'Boa tarde' : 'Boa noite';
    document.getElementsByClassName('secundario')[1].innerHTML = x % 2 == 0 ? 'Envio' : 'Retorno';
    x++;
}

let text = document.getElementById('principal');
let turno = document.getElementsByClassName('secundario')[0];

// Apaga os campos para onde é apontado.
function apagar() {

    let exemplo = document.querySelector('#principal').innerHTML = '';
    let secExemplo = document.querySelectorAll('.secundario')[0].innerHTML = '';
    let terExemplo = document.querySelectorAll('.secundario')[1].innerHTML = '';

}
// Muda Backgound do BODY;
function backRed(){
    let color = document.body.style.backgroundColor='red'
}
function backBlue(){
    let color = document.body.style.backgroundColor='blue'
}
function backWhite(){
    let color = document.body.style.backgroundColor='#fff'
}


console.log(text, turno);