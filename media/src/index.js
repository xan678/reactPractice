import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store";

const element = document.getElementById('root');

const root = ReactDOM.createRoot(element);

//Rendering the root while hooking up redux via react-redux Provider component
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);

