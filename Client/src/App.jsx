import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Market from './Pages/Market'
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
          <Route path='/Market' element={<Market />} />
        </Routes>
    
    </div>
  )
}

export default App