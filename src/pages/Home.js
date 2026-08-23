import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Hero
        title="Study smarter, not harder."
        subtitle="Organise your subjects, track progress, and share notes with your classmates. All in one place."
      />
      <Features />
      <Footer />
    </div>
  )
}

export default Home