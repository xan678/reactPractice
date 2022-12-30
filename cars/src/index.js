import 'bulma/css/bulma.css';
import './styles.css';
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { store } from './store';
import { Provider} from 'react-redux';

//Get hold of the element from the DOM
const element = document.getElementById('root');

//Make that element a root element
const root = createRoot(element);

//Render your App component under that element.
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
