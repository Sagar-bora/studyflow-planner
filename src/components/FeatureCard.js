import React from 'react'
import { Link } from 'react-router-dom'

function FeatureCard({ icon, title, description, link }) {
  return (
    // If link prop is provided wrap card in Link
    // Otherwise just show the card normally
    link ? (
      <Link to={link} style={{ textDecoration: 'none' }}>
        <div className="feature-card">
          <div className="card-icon">{icon}</div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    ) : (
      <div className="feature-card">
        <div className="card-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    )
  )
}

export default FeatureCard