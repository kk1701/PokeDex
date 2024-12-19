import axios from "axios";
import { useEffect, useState } from "react";
import downloadPokemons from "../../utils/downloadPokemons";
import { useParams } from "react-router-dom";

function usePokemon(pokemonName){

    const {id} = useParams();

    const POKEMON_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon, setPokemon] = useState(null);

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        pokedexUrl: '',
        prevUrl: '',
        nextUrl: ''
    });

    async function downloadGivenPokemon(id){
        // console.log(id);
        const extension = pokemonName ? pokemonName : id;
        // console.log(extension);
        const getUrl = POKEMON_DETAIL_URL + extension;
        console.log(getUrl);
        const response = await axios.get(getUrl);
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
        const types = response.data.types.map(t => t.type.name);
        return types[0];

    }

    async function downloadPokemonAndRelated(id){
        try{
            const type = await downloadGivenPokemon(id);
            await downloadPokemons(pokemonListState, setPokemonListState, `https://pokeapi.co/api/v2/type/${type}`);
        } catch(e){
            console.log("No pokemon found!");
        }
        
    }
    
    useEffect(()=>{
        downloadPokemonAndRelated(id);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, [id, pokemonName]);

    return [pokemon, pokemonListState];
}

export default usePokemon;