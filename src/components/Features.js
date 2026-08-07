import React from 'react'
import FeatureCard from './FeatureCard'

const featuresData = [
  { icon: '📋', title: 'Task Manager', description: 'Add your daily tasks and mark them done.' },
  { icon: '📈', title: 'Progress Tracker', description: 'See your weekly progress and streaks.' },
  { icon: '📁', title: 'Note Sharing', description: 'Save and share notes with classmates.' }
]

function Features() {
  return (
    <section id="features">
      <h2>Everything you need to study better</h2>
      <p className="features-sub">Three simple tools that keep you organised</p>
      <div className="features-grid">
        {featuresData.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Features