import React from 'react'

import { Link } from 'react-router-dom'

import "./Nav.css"
const Navbar = () => {

  return (
    <div>
    <nav>
  <ul>
    <li><span><Link to ='/list'>fishList</Link></span></li>
    <li><span>Products</span></li>
    <li><span>Services</span></li>
    <li><span>Contact</span></li>
  </ul>
</nav>

    
    
    </div>
  )
}

export default Navbar