import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div id="Navbar">
      
        <Link to="/">Home</Link>
        <Link to="/Red">Red</Link>
        <Link to="/Blue">Blue</Link>
        <Link to="/Yellow">Yellow</Link>
      
    </div>
  )
}

export default Navbar
