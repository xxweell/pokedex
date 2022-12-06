
function convertPokemonToLi(pokemon) {
    return `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                       ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        `
}

const pokemonList = document.getElementById('pokemonList') // pega a lista ol do html

pokeApi.getPokemons().then((pokemons = []) => { // recebe a listagem de pokemons já transformada do objeto json
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml

})

