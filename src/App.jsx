import React from 'react'
import LandingPage from './suby/pages/LandingPage'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import FirmProducts from './suby/components/FirmProducts'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/products/:firmId" element={<FirmProducts/>}/>
      </Routes>
      
    </div>
  )
}

export default App