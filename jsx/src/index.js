//Import the react and reactDom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

//Get a reference to the div with ID root

const el = document.getElementById('root');

//Tell react to take control of that element

const root = ReactDOM.createRoot(el);

// Create a component

function App() {
    //let message = "Hi my name is Ankush!!!"f
    // const date = new Date();
    // const time = date.toLocaleTimeString();

    //return <h1>{new Date().toLocaleTimeString()}</h1>

    // const name = 'Ankush';
    // const age = 23;
    // return <h1>
    //     Hi, my name is {name} and my age is {age}
    // </h1>


    //Props system below
    // We are not allowed to print objects but we are allowed to send objects as props like this -> {{objectName}}
    const inputType = "number";
    const minValue = 5;
    return <div>
        <h3>Enter a number greater than {minValue} :</h3>    
        <input style={{border : '3px solid red'}} type={inputType} min={minValue}/>
    </div> 
}

//Show the component on the screen
root.render(<App/>);
