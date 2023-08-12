import React, { useEffect, useState } from 'react'
import axios from "axios"

const Effect_hook = () => {
    const [data, setData] = useState();
    const [count ,setCount] = useState(0);

    const getData =  async()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        setData(response.data[0].email);
        console.log("API called");

    }

    useEffect(()=>{     
      getData(); 
    } ,[count])

  return (
    <>
    <hr />
    <h4>UseEffect Hook</h4>
    <p>{data}</p>
    <button onClick={()=> setCount(count + 1)}>click here!</button>
    <p>{count}</p>
    </>
  )
}

export default Effect_hook;

//fetch
// axios is a library used to  make an API call
// 

/**useEffect 
 * Is just a function that will be called , whenever the page re-renders
 * it is used to detect when a page re-renders
 * dependancy empty array makes sure that the it will only call once
 * 
 * useLayoutEffect hook same as useEffect hook
 * 
 */