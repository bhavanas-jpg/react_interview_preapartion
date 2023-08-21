import React, { useRef, useState } from 'react'

const AddTodo = ({setTodos}) => {
    const inputRef = useRef(null);
    
    const [newTodo, setNewTodo]= useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();   
        // const newItem = inputRef.current.value;
        
      setTodos(prev=> [...prev, newTodo])
    }
  return (
    <div>
        
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={newTodo}
            onChange={(e)=>setNewTodo(e.target.value)}
            ref={inputRef}
            placeholder="add itemto todo" />
            <button type="submit">Add Todo</button>
        </form>
    </div>
  )
}

export default AddTodo