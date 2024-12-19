import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../customHooks/usePokemonList';

function PokemonList(){
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

    const [pokemonListState, setPokemonListState] = usePokemonList(DEFAULT_URL);

    return (
        <div className='list-wrapper'>
            <h2>Pokemon List</h2>
            <div className='page-controls'>
                <button onClick={() => setPokemonListState({...pokemonListState, pokedexUrl: pokemonListState.prevUrl})}>Prev</button>
                <button onClick={() => setPokemonListState({...pokemonListState, pokedexUrl: pokemonListState.nextUrl})}>Next</button>
            </div>
            <div className='pokemon-list'>
                {pokemonListState.pokemonList.map((pokemon)=> <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} image={pokemon.image}/>)}
            </div>
        </div>
    )
}

export default PokemonList;