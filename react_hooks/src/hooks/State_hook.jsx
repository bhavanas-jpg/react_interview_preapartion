import React, { useState } from 'react'

const State_hook = () => {

   const [counter ,setCounter] = useState(0);
   const [inputValue, setInputValue] = useState("Bhavana");
   
  /**we are not telling react to re-render the page and show the new values
   * every time the variable counter changes its value
   */
    // let counter = 0;
    const increment =()=>{
    // counter = counter + 1;
    // console.log(counter);
    setCounter(counter + 1);

    }

  return (
    <>
    <p>{counter}</p>
    <button onClick={increment}>Increment</button>
    <div>
      <h4>second example</h4>
      <input type="text" 
      onChange={(e)=>setInputValue(e.target.value)}
      placeholder='enter something....'/>
      <p>{inputValue}</p>
    </div>
    </>
  )
}

export default State_hook