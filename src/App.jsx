import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage/>
      <p className='copyright'>
        &copy;Copyright 2023.All Rights Reserved.Built with &hearts;by <a href='https://bimalthapamagar.com.np' target='_blank'>Bimal Thapa Magar</a>
      </p>
    </>
  )
}

export default App
