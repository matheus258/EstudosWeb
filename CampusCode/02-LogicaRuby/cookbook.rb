# Programa de receitas

def bem_vindo
  puts "Bem-vindo ao Cookbook, sua rede de receitas!";
  puts
end

def menu
  puts "[1] - Adicionar nova receita"
  puts "[2] - Listar todas as  receitas"
  puts "[3] - Sair"

  print "Escolha uma opção: "
end

def inserir_receita
  puts "Digite o nome da receita: "
    nome = gets.chomp();
    # lista_receita << nome;
    puts
    puts "Digite o tipo da receita: "
    tipo = gets.chomp();
    # lista_receita << {nome: nome, tipo: tipo};
    puts
    puts  "#{nome} foi adicionada a lista de  receitas."
    puts
    return {nome: nome, tipo: tipo};
end

bem_vindo()
menu()
opcao = gets.to_i()
lista_receita = []

# Usando while para  repetir a escolha das opções até que  o usuário decida sair
while(opcao != 3) do
  # Usando if else para verificar qual é a opçao do user
  if  (opcao == 1)
    inserir_receita()
    lista_receita << inserir_receita()

  elsif (opcao == 2)
    puts
    puts "====== RECEITAS CADASTRADAS ======"
    # Imprimindo todos os itens da lista de  receitas de forma organizada com each.
    lista_receita.each do |receita|
      puts "#{receita[:nome]} - #{receita[:tipo]}"
    end
    puts "=============================="
    puts
    # OUTRAS FORMAS
      # Usando for para mostrar as receitas já cadastradas
      # for receita in lista_receita do
      #   puts receita
      # end

      # Usando each para percorrer a lista de receitas
      # lista_receita.each do |receita|
      #   puts receita
      # end
  else
    puts "Opção inválida!"
  end
  # Pegando a opção do usuario
  menu()
  opcao = gets.to_i()
end
puts
puts "Até logo e obrigado por usar o Cookbook!"