import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    //Breve introduccion a useState
    const [age, setAge] = useState(29);
    
    const birthday = () => {
        //Actualizar el state
        setAge(age+1)
    }
    return (
        <div>
            <h1>¡Hola {props.name} desde componente funcional!</h1>
            <h2>Tu edad es de: {age}</h2>
            <div>
                <button onClick={birthday}>Agregar</button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
