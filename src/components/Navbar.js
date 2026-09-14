import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className="logo">StudyFlow</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <Link to="/login">
        <button className="nav-btn">Login</button>
      </Link>

    </nav>
  )
}

export default Navbar