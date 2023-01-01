/**
 * Ejemplo de uso del metodo
 * de ciclo de vida en componente clase 
 * y el hook del ciclo de vida en componente funcional
 */

 import React, { Component, useEffect } from 'react';
 
 export class DidMount extends Component {
    
    componentDidMount()
    {
        console.log("Comportamiento antes de que el componente sea añadido al dom(redice)");
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
 }

 
 
 export const DidMountHook = () => {
    
    useEffect(() => {
        console.log("Comportamiento antes de que el componente sea añadido al dom(redice)");
    }, []);
    
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
 }
 
 
 

 