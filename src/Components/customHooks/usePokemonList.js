import { useState, useEffect } from "react";
import axios from "axios";

function usePokemonList(){
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";
    // const [pokemonList, setPokemonList] = useState([]);
    // const [pokedexUrl, setPokedexUrl] = useState(DEFAULT_URL);
    // const [prevUrl, setPrevUrl] = useState(DEFAULT_URL);
    // const [nextUrl, setNextUrl] = useState(DEFAULT_URL);

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        pokedexUrl: DEFAULT_URL,
        prevUrl: DEFAULT_URL,
        nextUrl: DEFAULT_URL
    });

    async function downloadPokemon(){
        const response = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : DEFAULT_URL);

        const pokemonResults = response.data.results;     //array of pokemons(first 20)

        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.previous);

        const pokemonPromises = pokemonResults.map((pokemon) => axios.get(pokemon.url));

        const pokemonListData = await axios.all(pokemonPromises);

        const pokemonFinalList = pokemonListData.map((pokemonData) => {
            const pokemon = pokemonData.data;
            return{
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types
            }
        });

        // setPokemonList(pokemonFinalList);

        // console.log(pokemonFinalList);

        setPokemonListState({...pokemonListState, pokemonList: pokemonFinalList, prevUrl: response.data.previous, nextUrl: response.data.next});

    }

    useEffect(() => {         //always gets called when th component re renders. It gets called once only when an empty dependency array is passed, again and again if no dependency array is passed and depending on the component when the specified component in dependency araray re renders.
        downloadPokemon();
    }, [pokemonListState.pokedexUrl]);

    return [pokemonListState, setPokemonListState];

}

export default usePokemonList;