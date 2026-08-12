import React, { useState } from 'react'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleLogin() {

    if (email === '' || password === '') {
      setError('Please fill in all fields')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setError('')
    alert('Login successful! Welcome ' + email)
  }

  return (
    <div className="login-page">
      <div className="login-box">

        <div className="login-logo">StudyFlow</div>
        <h2>Welcome back</h2>
        <p className="login-sub">Sign in to your account</p>

        {error && (
          <p style={{ color: '#ef4444', fontSize: '13px', marginBottom: '16px' }}>
            {error}
          </p>
        )}

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="you@university.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn-login" onClick={handleLogin}>
          Sign in
        </button>

        <p className="login-footer">
          Don't have an account?
          <a href="/register"> Create one</a>
        </p>

      </div>
    </div>
  )
}

export default Login