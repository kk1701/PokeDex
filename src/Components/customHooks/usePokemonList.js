import { useState, useEffect } from "react";
import axios from "axios";
import downloadPokemons from "../../utils/downloadPokemons";

function usePokemonList(DEFAULT_URL){
    
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

    useEffect(() => {         //always gets called when th component re renders. It gets called once only when an empty dependency array is passed, again and again if no dependency array is passed and depending on the component when the specified component in dependency araray re renders.
        downloadPokemons(pokemonListState, setPokemonListState, DEFAULT_URL);
    }, [pokemonListState.pokedexUrl]);

    return [pokemonListState, setPokemonListState];

}

export default usePokemonList;