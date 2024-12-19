import usePokemon from '../customHooks/usePokemon.js';
import './PokemonDetails.css';
import { Link, useParams } from 'react-router-dom';

function PokemonDetails(){

    const {id} = useParams();
    const [pokemon] = usePokemon(id);

    return(
        <>
        <h1 className='pokedex-redirect'>
            <Link to="/" className='link-dex'>
                Pokedex
            </Link>
        </h1>
            {pokemon && <div className='pokemon-details-wrapper'>
                <div className='pokemon-detail-name'>
                    {pokemon.name}
                </div>
                <div className='pokemon-image'>
                    <img src={pokemon.image}/>
                </div>
                <div className='pokemon-attr'>
                    <div>
                        Height: {pokemon.height}
                    </div>
                    <div>
                        Weight: {pokemon.weight}
                    </div>
                </div>
                <div className='pokemon-types'>
                    <h1>Type:</h1> {pokemon.types.map( t => <span key={t.type.name} className='type'>{t.type.name}</span>)}
                </div>
            </div>}
        </>
    )
}

export default PokemonDetails;