import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../customHooks/usePokemonList';

function PokemonList(){

    const [pokemonListState, setPokemonListState] = usePokemonList();

    return (
        <div className='list-wrapper'>
            <h2>Pokemon List</h2>
            <div className='page-controls'>
                <button onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
                <button onClick={() => setPokedexUrl(nextUrl)}>Next</button>
            </div>
            <div className='pokemon-list'>
                {pokemonListState.pokemonList.map((pokemon)=> <Pokemon key={pokemon.id} name={pokemon.name} image={pokemon.image}/>)}
            </div>
        </div>
    )
}

export default PokemonList;