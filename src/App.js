import React from 'react'

// Import Router tools
// BrowserRouter = wraps the whole app, enables routing
// Routes = container for all your routes
// Route = one single route (path + component)
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Navbar separately — shows on every page
import Navbar from './components/Navbar'

// Import all pages
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    /*
      BrowserRouter wraps everything
      It watches the URL and tells
      Routes which component to show
    */
    <BrowserRouter>

      {/* Navbar is OUTSIDE Routes so it shows on every page */}
      <Navbar />

      {/*
        Routes looks at current URL
        and renders the matching Route
        Only ONE route renders at a time
      */}
      <Routes>

        {/* path="/" = homepage */}
        <Route path="/" element={<Home />} />

        {/* path="/login" = login page */}
        <Route path="/login" element={<LoginPage />} />

        {/* path="/register" = register page */}
        <Route path="/register" element={<RegisterPage />} />

        {/* path="/dashboard" = dashboard page */}
        <Route path="/dashboard" element={<DashboardPage />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App