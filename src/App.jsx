// import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
// sample auth consumer components
import {Compo} from './components/Compo.jsx'
import {Child} from './components/Child.jsx'


import './App.css'

function App() {

  return (
    <>
      <h1>React App</h1>
      <Compo />
      <Child />
      <Outlet />
    </>
  )
}

export default App
