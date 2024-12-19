import axios from "axios";
import { useEffect, useState } from "react";

function usePokemon(id){
    const POKEMON_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon, setPokemon] = useState(null);

    async function downloadPokemon(id){
        console.log(id);
        // console.log(POKEMON_DETAIL_URL+id);
        const response = await axios.get(POKEMON_DETAIL_URL + id);
        const pokemonData = response.data;

        // console.log(pokemon);
        // console.log(pokemon.name);

        setPokemon({
            name: pokemonData.name,
            height: pokemonData.height,
            weight: pokemonData.weight,
            types: pokemonData.types,
            image: pokemonData.sprites.other.dream_world.front_default
        });

        // console.log(pokemon);

    }

    
    useEffect(()=>{
        downloadPokemon(id);
    }, []);

    return [pokemon];
}

export default usePokemon;