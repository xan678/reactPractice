import './SearchBar.css';
import {useState} from 'react';

const SearchBar = ({onSubmit}) => {
    
    const [term, setTerm] = useState('');


    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
        console.log(event.target.value);
    }
    return (<div className='search-bar'>
        <form onSubmit={handleFormSubmit}>
            <label>Enter Search Term</label>
            <input onChange={handleChange} value = {term}/>
        </form>
    </div>)
}

export default SearchBar;