import React, { useState } from 'react'

function Register() {

  // One useState for each field
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function handleRegister() {

    // Check 1 — all fields must be filled
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      setError('Please fill in all fields')
      return
    }

    // Check 2 — name must be at least 2 characters
    if (name.length < 2) {
      setError('Please enter your full name')
      return
    }

    // Check 3 — valid email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    // Check 4 — password length
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    // Check 5 — passwords must match
    // This is the new concept today
    // We compare password state with confirmPassword state
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    // All checks passed
    setError('')
    setSuccess('Account created successfully! Please sign in.')
  }

  return (
    <div className="login-page">
      <div className="login-box">

        <div className="login-logo">StudyFlow</div>
        <h2>Create account</h2>
        <p className="login-sub">Start your study journey today</p>

        {/* Show error in red if exists */}
        {error && (
          <p style={{ color: '#ef4444', fontSize: '13px', marginBottom: '16px' }}>
            {error}
          </p>
        )}

        {/* Show success in green if exists */}
        {success && (
          <p style={{ color: '#34d399', fontSize: '13px', marginBottom: '16px' }}>
            {success}
          </p>
        )}

        {/* Full name field */}
        <div className="form-group">
          <label>Full name</label>
          <input
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email field */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="you@university.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password field */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirm password field */}
        <div className="form-group">
          <label>Confirm password</label>
          <input
            type="password"
            placeholder="Type password again"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="btn-login" onClick={handleRegister}>
          Create account
        </button>

        <p className="login-footer">
          Already have an account?
          <a href="/login"> Sign in</a>
        </p>

      </div>
    </div>
  )
}

export default Register