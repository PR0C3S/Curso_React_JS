import React, { useState } from 'react';

// Definiendo estilo en constantes:
//? Estilo para usuario logueado
const loggedStyle = {
    color: 'white'
};
//? Estilo para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold' 
}


const GrettingStyled = (props) => {
    
    /**
     * Generamos un estado para componente para controlar
     * si el usuario esta logueado o no
     */
    const [isLogged, setIsLogged] = useState(false);
    return (
        <div style={ isLogged ? loggedStyle : unloggedStyle}>
        {isLogged ? (<p>Hola, {props.name}</p>) : (<p>Please login</p>)}
        <button onClick={() => {
            console.log('Boton pulsado');
            setIsLogged(!isLogged);
        }}>
            {isLogged? 'Logout':'Login'}
        </button>
        </div>
    );
}

export default GrettingStyled;
