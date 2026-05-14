// App.jsx
// import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'


import './App.css'

function App() {

  return (
    <>
      <h1>React App</h1>
      <Outlet />
    </>
  )
}

export default App
