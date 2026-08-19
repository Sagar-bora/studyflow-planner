import React from 'react'

function Navbar() {
  return (
    <nav>
      <div className="logo">StudyFlow</div>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <button className="nav-btn">Login</button>
    </nav>
  )
}

export default Navbar