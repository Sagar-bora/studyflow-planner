import React from 'react'

// We receive props as parameter
// props.title = the title passed from App.js
// props.subtitle = the subtitle passed from App.js
function Hero(props) {
  return (
    <section id="hero">

      {/* Small label above heading */}
      <p className="hero-label">Free for all students</p>

      {/* 
        {props.title} displays whatever
        title was passed from App.js
      */}
      <h1>{props.title}</h1>

      {/* 
        {props.subtitle} displays whatever
        subtitle was passed from App.js
      */}
      <p className="hero-sub">{props.subtitle}</p>

      {/* Buttons row */}
      <div className="hero-buttons">
        <button className="btn-primary">Get started free</button>
        <button className="btn-secondary">See how it works</button>
      </div>

    </section>
  )
}

export default Hero