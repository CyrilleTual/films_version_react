// impport de dépendances
import React from 'react';             
import ReactDOM from 'react-dom';
//import de compmosant pas d'extension (.js)
import App from './App';
// imports css pas de from
import "./styles/index.scss"
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
