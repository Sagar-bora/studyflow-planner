import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'

function App() {
  return (
    <div>
      <Navbar />
      <Hero
        title="Study smarter, not harder."
        subtitle="Organise your subjects, track progress."
      />
      <Features />
    </div>
  )
}

export default App