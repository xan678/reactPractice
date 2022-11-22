//Import the required libraries
import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App"

//Get the reference to the div with ID root
const element = document.getElementById('root');

// Tell react to take control of that element
const root = ReactDOM.createRoot(element);

//Create a component, functional component in this case


//show the component inside root
root.render(<App/>)