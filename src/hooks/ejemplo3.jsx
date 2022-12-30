/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext() para trabajar con datos y pasarle los datos a componentes inferiores
 */
import React,{useState, useContext} from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */
const miContexto = React.createContext(null);

const Component1 = () => {
    //Inicializamos un estado vacio que se rellenara con los datos del padre
    const state = useContext(miContexto);
    return (
        <div>
            <h1>El token es: {state.token}</h1>
            {/*Pintamos el componente 2*/}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);
    return (
        <div>
            <h2>La sesion es: {state.session}</h2>
        </div>
    );
}



export default function MiComponentConContexto(){
    
    const estadoInicial = {
        token: '12345',
        session: 1
    }

    //creamos el estado de este componente
    const [sesionData, setSesionData] = useState(estadoInicial);

    function actualizarSesion()
    {
        setSesionData(
            {
                token: "JWT123456789",
                session: sesionData.session + 1
            }
        );
    }
    return (
        <miContexto.Provider value={sesionData}>
        {/* todo lo que este aqui dentro puede leer los datos de sessionData*/}
        {/* Ademas, si se actualiza los componentes de aqui, tambien lo actualizan*/}
        <h1>*** Ejemplo de useState() y useContext()***</h1>
        <Component1></Component1>
        <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
    );
}
