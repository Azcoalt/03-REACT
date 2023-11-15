import React from "react";//importacion de react
import ReactDOM from "react-dom/client";//herramienta para renderizarlo
//import {App} from "./HelloW";
//import {FirstApp} from "./FirstApp";
import { CounterApp } from "./CounterApp";
import './style.css';

//renderizar la aplicacion
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={0}/>
    </React.StrictMode>
);