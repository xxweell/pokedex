

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url) // retorna uma Promisse - Processamento assíncrono pois não tem a resposta de imediato
    .then((response) => response.json()) // converte o resultado da Promisse para um formato json
    .then((jsonBody) => console.log(jsonBody)) // recebe já transformado para json
    .catch((error) => console.log(error)) // roda no caso de fracasso na requisição

