import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {
  return (
    <div className='container'>
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default App
