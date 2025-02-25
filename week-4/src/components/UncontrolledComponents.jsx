import React, { useRef } from 'react'

function UncontrolledComponents() {
    const inputRef = useRef(null);
    
    const handleClick = () => {
        alert(inputRef.current.value);
    }

  return (
    <>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Click</button>
    </>
  )
}

export default UncontrolledComponents;