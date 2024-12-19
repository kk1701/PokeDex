import './Pokemon.css';
import { Link } from 'react-router-dom';

function Pokemon({name, image, id}){

    return(
        <div className='pokemon'>
            <Link to={`/pokemon/${id}`} className='link-wrapper'>
                <div className='pokemon-name'>
                    {name}
                </div>
                <img className='pokemon-image' src={image}/>
            </Link>
        </div>     
    )
}

export default Pokemon;