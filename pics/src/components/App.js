import React, {useState} from 'react';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import searchImages  from '../api'

const App = () => {

    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
       const i =  await searchImages(term);
       setImages(i);
    }   

    return (
        <div>
            <SearchBar onSubmit = {handleSubmit}/>
            <ImageList images = {images} />
        </div>
    );
}

export default App;



