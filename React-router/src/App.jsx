import { useState } from 'react'
import './App.css'
import { Routes, Route , Link } from "react-router-dom";
import Home from './Componets/Home';
import Navbar from './Componets/navbar';
import Red from './Componets/Red'
import Blue from './Componets/Blue'
import Yellow from './Componets/Yellow'
import './index.css'
function App() {

  return (
    <><div id="container">
    <h1>Hello React Router!</h1>
    
    <div id="main-section">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/blue" element={<Blue />} />
      <Route path="/red" element= {<Red />}/>
      <Route path="/yellow" element= {<Yellow/>}/>
      </Routes>
    </div>
  </div>
 

    </>
  )
}

export default App
