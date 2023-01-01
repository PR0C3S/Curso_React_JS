/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef() sirve para referenciar elementos dentro de la vista 
 * - useEffect() sirve para controlar cambios en la vista
 */
import React,{useState,useRef,useEffect} from 'react';

const Ejemplo2 = () => {

    /**
     * Vamos a crear dos contadores distintos
     * cada uno en un estado diferente
     */

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    /**
     * Vamos a crear una referencia con useRef() para asociar una
     * con un elemento del dom del componente (vista HTML)
     * Basicamente es un findByID de jquery
     */
    const miRef =useRef();

    function incrementar1()
    {
        setContador1(contador1 +1)
    }
    
    function incrementar2()
    {
        setContador2(contador2 + 1)
    }

    /**
     * Trabajado con UseEffect
     * *SOLO SE PUEDE CREAR UN USEEFFECT
     * ? Caso 1: Ejecutar siempre un snippet de codigo
     * cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que este dentro del useEffect()
     */

    /*
    useEffect(() => {
        console.log("Cambio en el estado del componente");
        console.log("Mostrando referencia a elemento del DOM:");
        console.log(miRef);  
    });
    */

    /** 
     * ? Caso 2: Ejecutar solo cuando cambien el contador 1
     * cada vez que haya un cambio en el contador 1, se ejecuta lo que diga el useEffect() 
     * en caso de que cambie contador, 2 no habra ejecucion
    */
    /*useEffect(() => {
        console.log("Cambio en el estado del contador 1");
        console.log("Mostrando referencia a elemento del DOM:");
        console.log(miRef);  
    }, [contador1]);
    */

     /** 
     * ? Caso 3: Ejecutar solo cuando cambien el contador 1 O contador 2
     * cada vez que haya un cambio en el contador 1 se ejecuta lo que diga el useEffect()
     * cada vez que haya un cambio en el contador 2 se ejecuta lo que diga el useEffect()
    */
    useEffect(() => {
        console.log("Cambio en el estado del contador 1 / contador 2");
        console.log("Mostrando referencia a elemento del DOM:");
        console.log(miRef);  
    }, [contador1,contador2]);
   
    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef y useEffect ***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* ELEMENTO REFERENCIADO */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
