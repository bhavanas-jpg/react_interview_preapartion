import React, { useEffect, useLayoutEffect } from 'react'

const Layout_hook = () => {

useEffect(()=>{
console.log("useEffect")
},[])

useLayoutEffect(()=>{
    console.log("useLayout Effect");
},[]);

  return (
    <div>

    </div>
  )
}

export default Layout_hook;

/** useLayout Effect 
 * It's fundamentally called in a earlier stage of your page
 * rendering in the useEffect
 * 
 */