# entrada e saida
puts('Digite o seu nome:')
nome = gets.chomp
puts("Olá #{nome}, Vamos começar!" )


#  operadores aritmeticos
num1 = 5
num2 = 3

soma = num1 + num2
subtracao = num1 - num2
multiplicacao = num1 * num2
divisao = num1 / num2
potenciacao = num1 ** num2
modulo = num1 % num2

# mostrando os resultados
puts  "A soma de #{num1} mais #{num2} é #{soma}"
puts "A subtração de  #{num1} menos #{num2} é #{subtracao}"
puts "A multiplicação de #{num1} por #{num2} é #{multiplicacao}"
puts "A divisão de #{num1} entre #{num2} é #{divisao}"
puts "A potência de #{num1} entre #{num2} é #{potenciacao}"
puts "O módulo de #{num1} dividido por #{num2} é #{modulo}."

# Exemplos de nomenclatura de variáveis em Ruby
nome_completo = 'Fulano Sicrano'
nota_final = 10

nome_feminino = 'Maria'
puts "Nome: " + nome_completo +' '+ nome_feminino;

# conversões de tipos
idade = '30'
puts('Meu nome é ' + nome + ' e eu tenho ' + idade + ' anos de idade')
puts('Meu nome tem ' + nome .length() .to_s() + ' caracteres')
