function calculadora() {
    const operacao = prompt('Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtração (-)\n 3 - Multiplicação (*) \n 4 - Divisão Real (/) \n 5 - Divisão Inteira (%) \n 6 - Potenciação (**)')

    // Se a operação selecionada nao exister nao vai passar.
    if(!operacao || operacao >= 7 || operacao <= 0 ){
        alert('Erro - operação inválida.');
        calculadora();
    } else{
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        // Se o numero for invalido não vai passar.
        if(!n1 || !n2){
            alert('Erro - número inválido.');
            calculadora();
        } else{
            function soma(){
            resultado=n1+n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            novaOperação();
        }
        function subtrair(){
            resultado=n1-n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaOperação();
        }
        function multiplicar(){
            resultado=n1*n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novaOperação();
        }
        function divisao(){
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaOperação();
        }
        function divisaoInteira(){
            resultado = n1 % n2;
            alert(`O resto da divisão de ${n1}/${n2} é igual a  :${resultado}`);
            novaOperação();
        }
        function potenciacao(){
            resultado = n1 ** n2;
            alert (`A potenciação do número ${n1} elevado ao numero ${n2}, resultando em: ${resultado}.`);
            novaOperação();
        }
        function novaOperação(){
            let opcao = prompt(`Deseja realizar uma nova operação?\n1 - Sim\n2 - Não`);
            if(opcao == 1){
                calculadora();
            } else if(opcao == 2){
                alert("Obrigado por usar nossa aplicação!");
            } else {
                alert('Opção Inválida');
                novaOperação();
            }
        }

        if (operacao == 1) {
            soma();
        } else if (operacao == 2){
            subtrair();
        } else if (operacao == 3){
            multiplicar();
        } else if (operacao == 4){
            divisao();
        } else if (operacao == 5){
            divisaoInteira();
        } else if (operacao == 6){
            potenciacao();
        }
    }
    }
}
calculadora();