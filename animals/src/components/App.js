import './App.css'
import {useState} from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimals(){
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}


function App(){

    const [animals, setAnimals] = useState([]);


    return (
        <div className='app'>
            <button onClick= {() => {
                setAnimals([...animals,getRandomAnimals()]);            
            }}>
                Add Animal
            </button>
            <div className='animal-list'>
                {animals.map((x, index) => {
                    return <AnimalShow type={x} key = {index}/>
                })}
            </div>
        </div>
    );
}

export default App;