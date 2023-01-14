import React, { useState} from 'react'
import Child from '../pure/child'

export default function Father() {


    const [name, setName] = useState("John");
    
    function showMessage(text)
    {
        alert(`Message received: ${text}`)
    }

    function updateName(newName)
    {
        setName(newName)
    }

  return (
    <div>
    <Child name={name} send={showMessage} update={updateName}></Child>
    </div>
  )
}
