import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div>
      <Navbar />

      {/*
        We pass title and subtitle as props.
        Hero component receives them and
        displays them inside its JSX.
        
        This is like calling a function:
        Hero({ title: "Study smarter...", subtitle: "Organise..." })
      */}
      <Hero
        title="Study smarter, not harder."
        subtitle="Organise your subjects, track progress, and share notes with your classmates. All in one place."
      />

    </div>
  )
}

export default App