/**
 * Ejemplo de componente de tipo clase que dispone los
 * metodos de ciclo de vida
 */

//acceso rapido es rcfc

import React, { Component} from 'react'
import PropTypes from 'prop-types'

class LifeCycleExample extends Component
{
    constructor(props)
    {
        super(props)
        console.log("CONSTRUCTOR: Cuando se instancia el componente");
    }

    //!Deprecated
    componentWillMount()
    {
        console.log("WILLMOUNT: Antes del montaje del componente");
    }
    componentDidMount()
    {
        console.log("DIDMOUNT: Justo al acabar el montaje del componente antes de pintarlo");
    }

    //!Deprecated
    componentWillReceiveProps(nextProps)
    {
        console.log("WillRceiveProps: Si va a recibir nuevas props");
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        /**
         * Controlar si el componente debe actualizarse o no
         */
        //return true /false
    }

    //!Deprecated
    componentWillUpdate()
    {
        console.log("WillUpdate: Justo antes de actualizarse");
    }

    componentDidUpdate(prevProps, prevState)
    {
        console.log("DidUpdate: Justo despues de actualizarse");
    }

    componentWillUnmount()
    {
        console.log("WillUnmount: Justo antes de desaparecer");
        
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }

}
