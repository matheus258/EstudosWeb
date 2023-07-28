# Instalando o NVM no Ubuntu
- sudo apt install curl 
- curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
<br>

O script do instalador nvm cria uma entrada de ambiente para o script de login do usuário atual. Você pode sair e fazer login novamente para carregar o ambiente ou executar o comando abaixo para fazer o mesmo.

- source ~/.bashrc   

#  Instalando o Node usando NVM

- nvm install node 

Para instalar uma versão específica do nó:

- nvm install 18.16.0 