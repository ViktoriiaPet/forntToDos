import { useState } from 'react'
import './App.css'
import { CreateListaDeTareas } from './components/ListaDeTareas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateListaDeTareas />
    </>
  )
}

export default App
