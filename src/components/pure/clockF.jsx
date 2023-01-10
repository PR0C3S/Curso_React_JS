import React, { useState,useEffect } from 'react';

const ClockF = () => {
    const state = {
         // Se genera una fecha como estado inicial del componente
         fecha: new Date(),
         edad: 0,
         nombre: "John",
         apellidos: "Pena Acosta"
    }

    function Tick()
    {
        setReloj({
            fecha: new Date(),
            edad: Reloj.edad+1,
            nombre: state.nombre,
            apellidos: state.apellidos
        })
    }

    const [Reloj, setReloj] = useState(state);
  
    //!Falta mejorar el el componentDidMount, componentWillUnmount
    useEffect(() => {
        console.log("Componente creado ")

        const intervalID = setInterval(() => {
           Tick()
        }, 1000);

        return () => {
            console.log("Componente va a desaparecer")
            clearInterval(intervalID);
        };
    }, []);
    
    return (
        <div>
            <h2>
            Hora Actual:
            {Reloj.toLocaleTimeString()}
            </h2>
            <h3>{Reloj.nombre} {Reloj.apellidos}</h3>
            <h1>Edad: {Reloj.edad}</h1>
        </div>
    );
}

export default ClockF;
