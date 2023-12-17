import './PokemonDetails.css';
import { useParams } from 'react-router-dom';

function PokemonDetails(){

    const {id} = useParams();
    const [pokemon] = usePokemon(id);

    return(
        pokemon && <div>
            <div>
                Pokemon details
                {pokemon.name}
            </div>
            <div>
                <img src={pokemon.image}/>
            </div>
            <div>
                Height: {pokemon.height}
                Weight: {pokemon.weight}
            </div>
            <div>
                Type: {pokemon.types.map( t => <span key={t.type.name}>{t.type.name}</span>)}
            </div>
        </div>
    )
}

export default PokemonDetails;