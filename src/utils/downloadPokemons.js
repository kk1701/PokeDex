import axios from "axios";

async function downloadPokemons(pokemonListState, setPokemonListState, DEFAULT_URL, limit = 20) {
    const response = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : DEFAULT_URL);

    let pokemonResults = response.data.results ? response.data.results : response.data.pokemon;     //array of pokemons(first 20)
    pokemonResults = pokemonResults.slice(0, limit);
    // setNextUrl(response.data.next);
    // setPrevUrl(response.data.previous);

    const pokemonPromise = pokemonResults.map((p) => {
        if(p.url){
            return axios.get(p.url)
        } else if(p.pokemon.url){
            return axios.get(p.pokemon.url)
        }
    });

    const pokemonListData = await axios.all(pokemonPromise);
    console.log(pokemonListData);

    const pokemonFinalList = pokemonListData.map((pokemonData) => {
        const pokemon = pokemonData.data;
        return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other.dream_world.front_default,
            types: pokemon.types
        }
    });

    // setPokemonList(pokemonFinalList);

    // console.log(pokemonFinalList);

    setPokemonListState({ ...pokemonListState, pokemonList: pokemonFinalList, prevUrl: response.data.previous, nextUrl: response.data.next });

}

export default downloadPokemons