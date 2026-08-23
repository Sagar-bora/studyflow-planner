import React from 'react'

function Footer() {
  return (
    <footer>

      <div className="footer-top">

        {/* Left side — brand */}
        <div className="footer-brand">
          <div className="footer-logo">StudyFlow</div>
          <p className="footer-tagline">
            Built by a student, for students.
          </p>
        </div>

        {/* Right side — links */}
        <div className="footer-links">

          <div className="footer-col">
            <p className="footer-col-title">Product</p>
            <a href="#">Features</a>
            <a href="#">Login</a>
            <a href="#">Register</a>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Built with</p>
            <a href="#">HTML + CSS</a>
            <a href="#">React</a>
            <a href="#">Node + MongoDB</a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 StudyFlow. Built as a final year project.</p>
      </div>

    </footer>
  )
}

export default Footer