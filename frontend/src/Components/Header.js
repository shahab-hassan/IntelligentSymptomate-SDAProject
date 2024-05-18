import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="logoDiv">
        <img src="./images/logo.png" alt="Error"/>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Detect Disease</Link></li>
          <li><Link to="/">Detect Skin Cancer</Link></li>
          <li><Link to="/">Reports</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Blog</Link></li>
          <li><Link to="/">Contact</Link></li>
          <li><Link to="/" className='btnSecondary'>Login</Link></li>
          <li><Link to="/" className='btn'>Register</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header