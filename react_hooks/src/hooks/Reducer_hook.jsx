import React, { useReducer, useState } from 'react'

const Reducer_hook = () => {
 // const [counter , setCounter] = useState(0);
 //const [state, dispatch] = useReducer(reducer, initialState)

 const initialState ={
    counter : 0,
    showText : true
 }
const reducer =(state,action)=>{
switch(action.type){
case "increment":
    return{
        ...state,
        counter: state.counter + 1
    }
case "toggleText":
    return{
            ...state,
            showText: !state.showText
        }
default:
    return state;
}
}
 const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <>
    <hr/>
    <h3>useReducer Hook</h3>
    <p>{state.counter}</p>
    <button onClick={()=>{
        dispatch({type: "increment"});
        dispatch({type: "toggleText"})
    }}>Click Here!</button>
    {state.showText && <p>Text here</p>}
    </>
  )
}

export default Reducer_hook;


/** useReducer hook 
 * useReducer hook is an replacement & alternative to the useState hook
 * they have the same purpose
 * it allow developers to create a variable, when their value changes the page will re-render
 * 
*/
/** what kind of actions and wt kind of states we're changing 
 * many different states are not required & change them individually
 * single state, that keep track of all the things, that are going to be changed
 * collectively manage them and change them however you want
 * 
 * useReducer --> bunch of different states will be altered in the same action
 * 
 * with useState hook:
 * const [counter , setCounter] = useState(0);
  const [showText, setShowText] = useState(true);

  const handleClick =() =>{
    setCounter(counter + 1);
    setShowText(!showText)
  }

  return (
    <>
    <hr/>
    <h3>useReducer Hook</h3>
    <p>{counter}</p>
    <button onClick={handleClick}>Click Here!</button>
    {showText && <p>Text here</p>}
    </>
  )
}
 * 
 */

/** flow of useReducer hook */

// const [state, dispatch] = useReducer(reducer, initialState);

// dispatch({
//     type: " ",
//     payload: 
// })
// //it will be an object
// const initialState={

// }
// // reducer function
// const reducer =(state, action)=>{
// switch(action.type){
//     case "incer":
//         return{

//         }
//     case "dec":
//         return{

//         }
//         default:
//        return state;
// }
// }