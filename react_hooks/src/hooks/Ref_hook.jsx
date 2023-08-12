import React, { useRef } from 'react'

const Ref_hook = () => {

    const inputRef = useRef(null);
    console.log(inputRef.current)

  return (
    <>
    <hr />
    <input type="text" 
    value="Bhavana"
    ref={inputRef}/>
    </>
  )
}

export default Ref_hook;


/** useRef Hook
 * Its the easiest way to access and manipulate the DOM elements
 * 
 * 
 */