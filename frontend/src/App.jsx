import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateBrowserRouter, Route, Router} from 'react-router-dom'


function App() {

  return (
    <Router >
      <Route path='/' element={<Home />} />
    </Router>
  )
}

export default App
