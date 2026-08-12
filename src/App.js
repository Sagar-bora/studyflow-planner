import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Login from './components/Login'

function App() {
  return (
    <div>
      <Navbar />
      <Hero
        title="Study smarter, not harder."
        subtitle="Organise your subjects, track progress, and share notes with your classmates. All in one place."
      />
      <Features />

      {/* Login shown below for now — Day 19 React Router puts it on its own page */}
      <Login />
    </div>
  )
}

export default App