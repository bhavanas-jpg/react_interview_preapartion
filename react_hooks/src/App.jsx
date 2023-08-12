import { useState } from 'react'

import './App.css'
import State_hook from './hooks/State_hook'
import Reducer_hook from './hooks/Reducer_hook'
import Effect_hook from './hooks/Effect_hook'
import Ref_hook from './hooks/Ref_hook'

function App() {


  return (
    <>
      <State_hook />
      <Reducer_hook />
      <Effect_hook />
      <Ref_hook />
    </>
  )
}

export default App
