import React, { useRef} from 'react'

export default function Child( { name, send, update } ) {

  const messageRef = useRef("")
  const nameRef = useRef("")


  function pressButton()
  {
    const text = messageRef.current.value;
    alert(`Text in input ${text}`);
  }

  function pressButtonParam(text)
  {
    alert(`Text: ${text}`);
  }
  
  function subitFormUpdateName(e)
  {
    e.preventDefault();
    update(nameRef.current.value)
  }

  

  return (
    <div>
        <p onMouseOver={() => console.log("Encima del text")}>Hello, {name}</p>
        <button onClick={ () => console.log("Boton 1 pulsado")}> Boton 1</button>
        <button onClick={ pressButton}>Boton 2</button>
        <button onClick={ () => pressButtonParam('Hello')}>Boton 3</button>
        <input 
        placeholder='Send a text to your father' 
        onFocus={() => console.log("Input focus")}
        onChange={ (e) => console.log(`input changed: ${e.target.value}`)}
        onCopy={ () => console.log("Copied text from input")}
        ref={messageRef}
        />
        <button onClick={() => send(messageRef.current.value)}>Send Message</button>
        <div className='row mt-3'>
          <form onSubmit={subitFormUpdateName}>
            <input placeholder='New name'
              ref={ nameRef}
            />
            <button type='submit'>Update name</button>
          </form>
        </div>
    </div>
  )
}
