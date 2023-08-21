import React from 'react'

const TodoList = ({todos}) => {
  return (
    <div>
        <h3>TodoLists: </h3>
        <ul>
        {todos.map((todo)=>
        <li key={todo}>{todo}</li>
        )}
        </ul>
    </div>
  )
}

export default TodoList