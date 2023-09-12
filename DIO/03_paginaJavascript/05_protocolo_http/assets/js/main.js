
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url)
    .then(function (response) {
        console.log(response);
    })
    .catch(function(err){
        console.error('Error:', err); // Error: TypeError: Failed to fetch
    })
    .finally(function () {
        console.info("Requisição Concluída");
    })