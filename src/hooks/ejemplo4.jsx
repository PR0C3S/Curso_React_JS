/**
 * Ejemplo para entender el uso de props.childre (NO ES UN HOOK)
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>*** EJEMPLO DE CHILDRE PROPS***</h1>
            <h2>Nombre: { props.nombre }</h2>
            {/*PROPS.CHILDREN pintara por defecto
            aquello quese encuentre en las etiquetas de apertura y cierre
            de este componente desde el componente de orden superior */}
            {props.children}
        </div>
    );
}

export default Ejemplo4;
