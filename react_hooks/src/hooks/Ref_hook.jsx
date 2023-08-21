import React, { useRef } from 'react'

const Ref_hook = () => {

    const inputRef = useRef(null);

   const onClick=()=>{
    inputRef.current.focus();
   inputRef.current.value ="";
   }  

  return (
    <>
    <hr />
    <input type="text" 
    placeholder="Ex..."
    ref={inputRef}/>
    <button
    onClick={onClick}
    >Change Name</button>
    </>
  )
}

export default Ref_hook;


/** useRef Hook
 * Its the easiest way to access and manipulate the DOM elements
 * 
 * 
 */