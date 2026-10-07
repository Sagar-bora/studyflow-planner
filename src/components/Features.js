import React from 'react'
import FeatureCard from './FeatureCard'

const featuresData = [
  {
    icon: '🤖',
    title: 'AI Roadmap Generator',
    description: 'Upload your exam syllabus PDF and get an AI generated day by day study roadmap instantly.'
  },
  {
    icon: '👥',
    title: 'Virtual Study Rooms',
    description: 'Study together in real time with synchronized Pomodoro timers and shared whiteboards.'
  },
  {
    icon: '📊',
    title: 'Progress Analytics',
    description: 'Track your study sessions, streaks, and subject wise time distribution with visual charts.'
  }
]

function Features() {
  return (
    <section id="features">
      <h2>Everything you need to study better</h2>
      <p className="features-sub">
        Three powerful tools built for serious students
      </p>
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