import React from 'react'
import { Link } from 'react-router-dom'

function Hero({ title, subtitle }) {
  return (
    <section id="hero">
      <p className="hero-label">Free for all students</p>
      <h1>{title}</h1>
      <p className="hero-sub">{subtitle}</p>

      <div className="hero-buttons">
        <Link to="/register">
          <button className="btn-primary">Get started free</button>
        </Link>
        <a href="#features">
          <button className="btn-secondary">See how it works</button>
        </a>
      </div>
    </section>
  )
}

export default Hero