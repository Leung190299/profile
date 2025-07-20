import NavBar from '@/sections/navbar'
import { useState } from 'react'
import Hero from './sections/hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Hero />
    </>
  )
}

export default App
