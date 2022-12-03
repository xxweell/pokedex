const pokeApi = {}

pokeApi.getPokemons = (offset=0, limit=10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url) // retorna uma Promisse - Processamento assíncrono pois não tem a resposta de imediato
    .then((response) => response.json()) // converte o resultado da Promisse para um formato json
    .then((jsonBody) => jsonBody.results) // pega o results do objeto jsonBody
    .catch((error) => console.log(error))
}