import {useState} from 'react'
import PropTypes from 'prop-types';

export function CounterApp ({value}){

    const [Counter, setCounter] = useState(value);
    const handleade = () =>{
        setCounter(Counter + 1);
    }

    const menus = () =>{
        setCounter(Counter - 1);
    }

    const restart = () =>{
        setCounter(value);
    }

    return(
        <>
        <h1>CounterApp</h1>
        <h2> {Counter} </h2>
        <button onClick={handleade}> +1 </button>
        <button onClick={menus}> -1 </button>
        <button onClick={restart}> Re </button>
        </>
    );
}

CounterApp.propTypes = {
    value:PropTypes.number.isRequired
};