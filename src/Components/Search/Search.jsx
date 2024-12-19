import useDebounce from '../customHooks/useDebounce';
import './Search.css';

function Search({ updateSearchTerm }){

    const debounceUpdateSearch = useDebounce((e) => updateSearchTerm(e.target.value));

    return (
        <>
            <input 
                type='text' 
                placeholder='Which pokemon are you looking for?'
                id='search-bar'
                onChange={debounceUpdateSearch}
             />
        </>
    )
}

export default Search;