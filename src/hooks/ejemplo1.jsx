/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo funcion y acceder a su estado
 * privado a traves de un hook y ademas poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;

    //valor inicial para una persona
    const personaInicial =
    {
        nombre: "John",
        email: "john@example.com"
    }

    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL sean 
     * parte del estado del componente para asi poder gestionar su cambio
     * y que est se vea reflejado en la vista del componente
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    const incrementarContador = () =>{
        setContador(contador+1);
    }

    const actualizarPersona = () =>{
        setPersona({nombre: "Harold",email: "harold@example.com"})
    }
    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>

            <button onClick={incrementarContador}>Actualizar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
