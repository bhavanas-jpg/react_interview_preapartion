import { useState } from 'react'

import './App.css'
import State_hook from './hooks/State_hook'
import Reducer_hook from './hooks/Reducer_hook'
import Effect_hook from './hooks/Effect_hook'
import Ref_hook from './hooks/Ref_hook'
import TodoCount from './lifting_state_up/TodoCount'
import TodoList from './lifting_state_up/TodoList'
import AddTodo from './lifting_state_up/AddTodo'

function App() {
const [todos, setTodos]= useState(["item1","item2","item3"]);

  return (
    <>
      {/* <State_hook />
      <Reducer_hook />
      <Effect_hook />
      <Ref_hook /> */}
      <TodoCount todos={todos}/>
      <TodoList todos={todos}/>
      <AddTodo setTodos={setTodos}/>
    </>
  )
}

export default App
