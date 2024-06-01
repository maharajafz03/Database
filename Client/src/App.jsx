import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Register from './Pages/Register'
import Navbar from './Navbar'

const App = () => {
  return (
    <div>
      
        <div>
        <Navbar />
        </div>
      
     <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Market' element={<Register />} />
        </Routes>
    
    </div>
  )
}

export default App